import Link from 'next/link';
import { listPosts } from '@/lib/posts';
import { isDbConfigured } from '@/lib/mongodb';
import DeletePostButton from './DeletePostButton';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  if (!isDbConfigured) {
    return (
      <div className="bg-white rounded-2xl border border-amber-200 p-8">
        <h1 className="text-xl font-bold text-[#1d3557] mb-2">Database not configured</h1>
        <p className="text-gray-600">
          Set <code className="text-sm">MONGODB_URI</code> in <code className="text-sm">.env.local</code>{' '}
          and restart the server.
        </p>
      </div>
    );
  }

  const posts = await listPosts({ includeDrafts: true });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h1 className="text-xl font-bold text-[#1d3557]">
          Posts <span className="text-gray-400 font-normal">({posts.length})</span>
        </h1>
      </div>

      {posts.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="text-gray-500 mb-6">No posts yet.</p>
          <Link href="/admin/new" className="btn-primary">
            Write your first post
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {posts.map((post) => (
            <li key={post._id} className="px-6 py-4 flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#1d3557] truncate">{post.title}</span>
                  {post.published ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex-shrink-0">
                      Published
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 flex-shrink-0">
                      Draft
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1 truncate">
                  /blog/{post.slug} ·{' '}
                  {new Date(post.updatedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                {post.published && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-500 hover:text-[#e63946]"
                  >
                    View
                  </Link>
                )}
                <Link
                  href={`/admin/edit/${post._id}`}
                  className="font-medium text-[#1d3557] hover:text-[#e63946]"
                >
                  Edit
                </Link>
                <DeletePostButton id={post._id} title={post.title} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
