'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Two-step delete. window.confirm() would block the page, so the button turns
 * into its own confirmation instead.
 */
export default function DeletePostButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  async function remove() {
    setBusy(true);
    const response = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    setBusy(false);
    if (response.ok) {
      router.refresh();
    } else {
      setConfirming(false);
    }
  }

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-gray-400 hover:text-red-600"
        aria-label={`Delete ${title}`}
      >
        Delete
      </button>
    );
  }

  return (
    <span className="flex items-center gap-2">
      <button
        type="button"
        onClick={remove}
        disabled={busy}
        className="font-medium text-red-600 hover:underline disabled:opacity-60"
      >
        {busy ? 'Deleting…' : 'Confirm'}
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        Cancel
      </button>
    </span>
  );
}
