import { NextResponse } from 'next/server';
import { isLoggedIn } from '@/lib/auth';
import { createPost, listPosts, slugify, slugTaken, type PostInput } from '@/lib/posts';
import { revalidatePost } from '@/lib/revalidate';

function unauthorised() {
  return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
}

/** Validates and normalises a submitted post. Returns an error string, or the clean input. */
async function readPost(request: Request, excludeId?: string): Promise<PostInput | string> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return 'Invalid request body.';
  }

  const title = String(body.title ?? '').trim();
  const content = String(body.content ?? '').trim();
  if (!title) return 'Title is required.';
  if (!content) return 'Content is required.';

  const slug = slugify(String(body.slug ?? '').trim() || title);
  if (!slug) return 'Could not build a URL slug from that title. Try adding some letters or numbers.';
  if (await slugTaken(slug, excludeId)) {
    return `The URL "/blog/${slug}" is already used by another post. Change the title or the slug.`;
  }

  return {
    title,
    slug,
    content,
    excerpt: String(body.excerpt ?? '').trim().slice(0, 300),
    coverImage: String(body.coverImage ?? '').trim(),
    coverAlt: String(body.coverAlt ?? '').trim(),
    author: String(body.author ?? '').trim() || 'Custom Patch House',
    published: Boolean(body.published),
  };
}

export async function GET() {
  if (!(await isLoggedIn())) return unauthorised();
  const posts = await listPosts({ includeDrafts: true });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!(await isLoggedIn())) return unauthorised();

  const input = await readPost(request);
  if (typeof input === 'string') return NextResponse.json({ error: input }, { status: 400 });

  const post = await createPost(input);
  revalidatePost(post.slug);
  return NextResponse.json({ post }, { status: 201 });
}

export { readPost };
