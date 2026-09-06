import { revalidatePath } from 'next/cache';

/**
 * Purges the cached pages a post appears on.
 *
 * The blog pages use ISR so they stay fast, but an edit or an unpublish has to
 * show up immediately rather than after the revalidate window — otherwise an
 * unpublished post stays readable, and the sitemap keeps advertising it.
 */
export function revalidatePost(slug?: string) {
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');
  if (slug) revalidatePath(`/blog/${slug}`);
}
