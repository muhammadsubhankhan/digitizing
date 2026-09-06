import { NextResponse } from 'next/server';
import { isLoggedIn } from '@/lib/auth';
import { deletePost, getPostById, updatePost } from '@/lib/posts';
import { deleteImage } from '@/lib/storage';
import { revalidatePost } from '@/lib/revalidate';
import { readPost } from '../route';

type Params = { params: Promise<{ id: string }> };

function unauthorised() {
  return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await isLoggedIn())) return unauthorised();
  const { id } = await params;

  const input = await readPost(request, id);
  if (typeof input === 'string') return NextResponse.json({ error: input }, { status: 400 });

  // Read the old slug first: if it changed, the old URL needs purging too.
  const previous = await getPostById(id);
  const post = await updatePost(id, input);
  if (!post) return NextResponse.json({ error: 'Post not found.' }, { status: 404 });

  revalidatePost(post.slug);
  if (previous && previous.slug !== post.slug) revalidatePost(previous.slug);

  return NextResponse.json({ post });
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isLoggedIn())) return unauthorised();
  const { id } = await params;

  const existing = await getPostById(id);
  if (!existing) return NextResponse.json({ error: 'Post not found.' }, { status: 404 });

  await deletePost(id);
  // Remove the cover image too, so deleted posts do not leave files behind.
  if (existing.coverImage) await deleteImage(existing.coverImage);
  revalidatePost(existing.slug);

  return NextResponse.json({ ok: true });
}
