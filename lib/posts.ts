import { ObjectId, type Collection } from 'mongodb';
import { getDb } from './mongodb';

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Markdown. Rendered to HTML at request time. */
  content: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PostInput = Omit<Post, '_id' | 'createdAt' | 'updatedAt'>;

type PostDoc = Omit<Post, '_id'> & { _id?: ObjectId };

async function collection(): Promise<Collection<PostDoc>> {
  const db = await getDb();
  const posts = db.collection<PostDoc>('posts');
  // Slugs are the public URL, so they have to be unique.
  await posts.createIndex({ slug: 1 }, { unique: true });
  await posts.createIndex({ createdAt: -1 });
  return posts;
}

function serialise(doc: PostDoc): Post {
  const { _id, ...rest } = doc;
  return { ...rest, _id: String(_id) };
}

/** Turns a title into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export async function listPosts({ includeDrafts = false } = {}): Promise<Post[]> {
  const posts = await collection();
  const filter = includeDrafts ? {} : { published: true };
  const docs = await posts.find(filter).sort({ createdAt: -1 }).toArray();
  return docs.map(serialise);
}

/**
 * listPosts() for build-time and public paths. A database that is unreachable
 * should not fail the build or take the whole site down — those callers render
 * an empty list instead, and the error is logged.
 */
export async function listPostsSafe(options?: { includeDrafts?: boolean }): Promise<Post[]> {
  try {
    return await listPosts(options);
  } catch (error) {
    console.error('[blog] could not load posts:', error instanceof Error ? error.message : error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await collection();
  const doc = await posts.findOne({ slug, published: true });
  return doc ? serialise(doc) : null;
}

export async function getPostById(id: string): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  const posts = await collection();
  const doc = await posts.findOne({ _id: new ObjectId(id) });
  return doc ? serialise(doc) : null;
}

export async function createPost(input: PostInput): Promise<Post> {
  const posts = await collection();
  const now = new Date().toISOString();
  const doc: PostDoc = { ...input, createdAt: now, updatedAt: now };
  const result = await posts.insertOne(doc);
  return serialise({ ...doc, _id: result.insertedId });
}

export async function updatePost(id: string, input: PostInput): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  const posts = await collection();
  const doc = await posts.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { ...input, updatedAt: new Date().toISOString() } },
    { returnDocument: 'after' }
  );
  return doc ? serialise(doc) : null;
}

export async function deletePost(id: string): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  const posts = await collection();
  const doc = await posts.findOneAndDelete({ _id: new ObjectId(id) });
  return doc ? serialise(doc) : null;
}

/** True when another post already uses this slug. */
export async function slugTaken(slug: string, excludeId?: string): Promise<boolean> {
  const posts = await collection();
  const doc = await posts.findOne({ slug });
  if (!doc) return false;
  return !excludeId || String(doc._id) !== excludeId;
}
