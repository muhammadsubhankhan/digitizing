import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { serviceSlugs } from '@/lib/services';
import { listPostsSafe } from '@/lib/posts';
import { isDbConfigured } from '@/lib/mongodb';

// Blog posts come from the database, so this cannot be baked in at build time.
// revalidatePost() purges it whenever a post changes; the window below is the
// fallback for anything that changes outside the admin.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/free-instant-quote', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/samples', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  ];

  // Drafts are excluded — listPosts() only returns published posts.
  const posts = isDbConfigured ? await listPostsSafe() : [];

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
