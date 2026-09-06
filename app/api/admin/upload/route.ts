import { NextResponse } from 'next/server';
import { isLoggedIn } from '@/lib/auth';
import { saveImage } from '@/lib/storage';

export async function POST(request: Request) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file was uploaded.' }, { status: 400 });
  }

  try {
    const { url } = await saveImage(file);
    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
