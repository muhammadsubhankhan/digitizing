import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { listPostsSafe } from '@/lib/posts';
import { isDbConfigured } from '@/lib/mongodb';

export const metadata: Metadata = {
  title: 'Blog | Patch Guides, Materials and How-Tos',
  description:
    'Guides on choosing, applying and caring for custom patches — backing types, embroidery coverage, materials and design tips from Custom Patch House.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', title: 'Custom Patch House Blog' },
};

// Posts come from the database, so the list is rendered per request rather than
// baked in at build time.
export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogIndex() {
  const posts = isDbConfigured ? await listPostsSafe() : [];

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Patch guides and how-tos</h1>
            <p className="text-xl text-gray-200">
              Practical advice on choosing backings, picking materials, preparing artwork and
              looking after your patches.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No articles published yet. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.coverImage && (
                      <div className="aspect-video relative overflow-hidden bg-gray-100">
                        <Image
                          src={post.coverImage}
                          alt={post.coverAlt || post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <time
                        dateTime={post.createdAt}
                        className="text-sm text-gray-400 block mb-2"
                      >
                        {formatDate(post.createdAt)}
                      </time>
                      <h2 className="text-xl font-bold text-[#1d3557] mb-3 leading-snug">
                        {post.title}
                      </h2>
                      {post.excerpt && <p className="text-gray-600">{post.excerpt}</p>}
                      <span className="inline-block mt-4 font-medium text-[#e63946]">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
