import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';
import { getPostBySlug, listPostsSafe } from '@/lib/posts';
import { isDbConfigured } from '@/lib/mongodb';
import { renderMarkdown, readingTime } from '@/lib/markdown';

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  if (!isDbConfigured) return [];
  const posts = await listPostsSafe();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = isDbConfigured ? await getPostBySlug(slug) : null;

  if (!post) {
    return { title: 'Post not found', robots: { index: false, follow: false } };
  }

  const canonical = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: post.title,
      description: post.excerpt || undefined,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = isDbConfigured ? await getPostBySlug(slug) : null;
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <div>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <header className="gradient-bg py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                ← Back to blog
              </Link>
              <h1 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-gray-300">
                <span>{post.author}</span>
                <span aria-hidden="true"> · </span>
                <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                <span aria-hidden="true"> · </span>
                <span>{readingTime(post.content)} min read</span>
              </p>
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="container mx-auto px-4 -mt-10 lg:-mt-12 relative z-10">
            <div className="max-w-3xl mx-auto aspect-video relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src={post.coverImage}
                alt={post.coverAlt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div
            className="prose-post max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-4">
            Ready to order your patches?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Send us your design and we will come back with pricing and a free digital proof.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-instant-quote" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
