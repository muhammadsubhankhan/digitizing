import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

/**
 * Uploaded images live on the server's filesystem, in UPLOAD_DIR.
 *
 * They deliberately do NOT go in public/. Next.js indexes public/ at build
 * time, so a file written there after the build is never served — it 404s.
 * These are served by the route handler at app/uploads/[filename] instead,
 * which reads from disk on each request.
 *
 * Point UPLOAD_DIR somewhere outside the repo (e.g. /var/www/uploads) if you
 * redeploy by cloning into a fresh directory, so uploads survive deploys.
 */
export const UPLOAD_DIR = process.env.UPLOAD_DIR ?? path.join(process.cwd(), 'uploads');
const PUBLIC_PATH = process.env.PUBLIC_UPLOAD_PATH ?? '/uploads';

/** Content types we serve back, keyed by extension. */
export const CONTENT_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
};

const MAX_BYTES = 8 * 1024 * 1024; // 8MB

/** Only these are accepted, and the extension is derived from the type — never from the filename. */
const ALLOWED: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/avif': '.avif',
};

export type UploadResult = { url: string; filename: string };

export async function saveImage(file: File): Promise<UploadResult> {
  const extension = ALLOWED[file.type];
  if (!extension) {
    throw new Error(
      `Unsupported file type "${file.type}". Allowed: JPG, PNG, WebP, GIF, AVIF.`
    );
  }
  if (file.size > MAX_BYTES) {
    throw new Error(`File is ${(file.size / 1024 / 1024).toFixed(1)}MB. The limit is 8MB.`);
  }

  // A generated name means an attacker cannot steer the write with "../" in a
  // filename, and two uploads of "logo.png" cannot overwrite each other.
  const filename = `${randomUUID()}${extension}`;

  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, filename), Buffer.from(await file.arrayBuffer()));

  return { url: `${PUBLIC_PATH}/${filename}`, filename };
}

/** Best-effort cleanup. A missing file is not an error worth failing a delete over. */
export async function deleteImage(url: string): Promise<void> {
  if (!url.startsWith(`${PUBLIC_PATH}/`)) return;
  const filename = path.basename(url);
  try {
    await unlink(path.join(UPLOAD_DIR, filename));
  } catch {
    // already gone
  }
}
