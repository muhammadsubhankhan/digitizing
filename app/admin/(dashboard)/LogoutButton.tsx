'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await fetch('/api/admin/logout', { method: 'POST' });
    router.refresh();
    router.push('/admin/login');
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={busy}
      className="text-sm text-gray-600 hover:text-[#e63946] disabled:opacity-60"
    >
      {busy ? 'Signing out…' : 'Sign out'}
    </button>
  );
}
