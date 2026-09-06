import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isLoggedIn } from '@/lib/auth';
import LogoutButton from './LogoutButton';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Every page in this group is behind the session cookie. API routes check
  // separately, so a missing session cannot be worked around by calling them.
  if (!(await isLoggedIn())) redirect('/admin/login');

  return (
    <div className="bg-gray-50 min-h-[80vh]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-xl font-bold text-[#1d3557]">
              Blog admin
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-[#e63946]">
              View blog
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/new" className="btn-primary text-sm">
              New post
            </Link>
            <LogoutButton />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
