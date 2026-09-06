import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { UPLOAD_DIR, CONTENT_TYPES } from '@/lib/storage';

/**
 * Serves uploaded blog images from disk.
 *
 * public/ cannot be used for these: Next.js indexes it at build time, so files
 * written after the build 404. This handler reads UPLOAD_DIR per request.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  // Reject anything that is not a plain filename, so a crafted request cannot
  // walk out of the upload directory.
  if (filename !== path.basename(filename) || filename.startsWith('.')) {
    return new NextResponse('Not found', { status: 404 });
  }

  const contentType = CONTENT_TYPES[path.extname(filename).toLowerCase()];
  if (!contentType) return new NextResponse('Not found', { status: 404 });

  try {
    const file = await readFile(path.join(UPLOAD_DIR, filename));
    return new NextResponse(new Uint8Array(file), {
      headers: {
        'Content-Type': contentType,
        // Filenames are generated UUIDs, so a given URL never changes content.
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
