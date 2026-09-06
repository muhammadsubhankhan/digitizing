'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Image from 'next/image';
import type { Post } from '@/lib/posts';

const FIELD =
  'w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e63946]/40 focus:border-[#e63946]';

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export default function PostEditor({ post }: { post?: Post }) {
  const router = useRouter();
  const editing = Boolean(post);

  const [title, setTitle] = useState(post?.title ?? '');
  const [slug, setSlug] = useState(post?.slug ?? '');
  const [slugEdited, setSlugEdited] = useState(Boolean(post));
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '');
  const [content, setContent] = useState(post?.content ?? '');
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? '');
  const [coverAlt, setCoverAlt] = useState(post?.coverAlt ?? '');
  const [author, setAuthor] = useState(post?.author ?? 'Custom Patch House');
  const [published, setPublished] = useState(post?.published ?? false);

  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const inlineInputRef = useRef<HTMLInputElement>(null);

  // Keep the slug in step with the title until the user edits the slug themselves.
  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  async function upload(file: File): Promise<string | null> {
    setError('');
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      const response = await fetch('/api/admin/upload', { method: 'POST', body });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? 'Upload failed.');
        return null;
      }
      return data.url as string;
    } catch {
      setError('Upload failed. Check your connection and try again.');
      return null;
    } finally {
      setUploading(false);
    }
  }

  async function onCoverSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const url = await upload(file);
    if (url) setCoverImage(url);
  }

  /** Uploads an image and drops the markdown for it at the cursor. */
  async function onInlineSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const url = await upload(file);
    if (!url) return;

    const textarea = contentRef.current;
    const markdown = `\n\n![Describe this image](${url})\n\n`;
    if (!textarea) {
      setContent((current) => current + markdown);
      return;
    }
    const { selectionStart, selectionEnd } = textarea;
    setContent(
      (current) => current.slice(0, selectionStart) + markdown + current.slice(selectionEnd)
    );
    requestAnimationFrame(() => {
      textarea.focus();
      const caret = selectionStart + markdown.length;
      textarea.setSelectionRange(caret, caret);
    });
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setSaving(true);

    try {
      const response = await fetch(
        editing ? `/api/admin/posts/${post!._id}` : '/api/admin/posts',
        {
          method: editing ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            slug,
            excerpt,
            content,
            coverImage,
            coverAlt,
            author,
            published,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? 'Could not save the post.');
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Could not save the post. Check your connection and try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={save} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-[#1d3557] mb-6">
        {editing ? 'Edit post' : 'New post'}
      </h1>

      {error && (
        <p
          role="alert"
          className="mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm"
        >
          {error}
        </p>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">Title</span>
            <input
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              required
              className={FIELD}
              placeholder="How to iron on a patch without damaging it"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              URL slug
              <span className="font-normal text-gray-400"> — /blog/{slug || '…'}</span>
            </span>
            <input
              value={slug}
              onChange={(e) => {
                setSlugEdited(true);
                setSlug(slugify(e.target.value));
              }}
              className={FIELD}
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
              <span className="font-normal text-gray-400">
                {' '}
                — shown on the blog list and in Google results ({excerpt.length}/160)
              </span>
            </span>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              maxLength={300}
              className={FIELD}
              placeholder="A short summary. Aim for 120 to 160 characters."
            />
          </label>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="block text-sm font-medium text-gray-700">Content (Markdown)</span>
              <button
                type="button"
                onClick={() => inlineInputRef.current?.click()}
                disabled={uploading}
                className="text-sm font-medium text-[#e63946] hover:underline disabled:opacity-60"
              >
                {uploading ? 'Uploading…' : '+ Insert image'}
              </button>
              <input
                ref={inlineInputRef}
                type="file"
                accept="image/*"
                onChange={onInlineSelected}
                className="hidden"
              />
            </div>
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={22}
              className={`${FIELD} font-mono text-sm leading-relaxed`}
              placeholder={'## A heading\n\nA paragraph of text. Leave a blank line between paragraphs.\n\n**Bold text** and *italic text*.\n\n- A bullet\n- Another bullet\n\n[A link](https://example.com)'}
            />
            <p className="mt-2 text-xs text-gray-500">
              <code>## Heading</code> · <code>**bold**</code> · <code>*italic*</code> ·{' '}
              <code>- list item</code> · <code>[link](url)</code> ·{' '}
              <code>![alt](/uploads/image.jpg)</code>. Blank line between paragraphs.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-gray-200 p-4">
            <span className="block text-sm font-medium text-gray-700 mb-3">Cover image</span>
            {coverImage ? (
              <div className="space-y-3">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={coverImage}
                    alt={coverAlt || 'Cover image preview'}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setCoverImage('')}
                  className="text-sm text-gray-500 hover:text-[#e63946]"
                >
                  Remove
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                disabled={uploading}
                className="w-full rounded-lg border-2 border-dashed border-gray-300 py-8 text-sm text-gray-500 hover:border-[#e63946] hover:text-[#e63946] disabled:opacity-60"
              >
                {uploading ? 'Uploading…' : 'Choose an image'}
              </button>
            )}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              onChange={onCoverSelected}
              className="hidden"
            />
          </div>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Cover image alt text
            </span>
            <input
              value={coverAlt}
              onChange={(e) => setCoverAlt(e.target.value)}
              className={FIELD}
              placeholder="Describe the image for screen readers and Google"
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">Author</span>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} className={FIELD} />
          </label>

          <label className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#e63946]"
            />
            <span>
              <span className="block text-sm font-medium text-gray-700">Published</span>
              <span className="block text-xs text-gray-500 mt-1">
                Unpublished posts stay as drafts — not visible on the site, not in the sitemap.
              </span>
            </span>
          </label>

          <button
            type="submit"
            disabled={saving || uploading}
            className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving…' : editing ? 'Save changes' : 'Create post'}
          </button>
        </div>
      </div>
    </form>
  );
}
