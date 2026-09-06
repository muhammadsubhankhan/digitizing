import { NextResponse } from 'next/server';
import { checkCredentials, createSessionToken, credentialsAreConfigured, SESSION_COOKIE, sessionCookieOptions } from '@/lib/auth';

export async function POST(request: Request) {
  if (!credentialsAreConfigured()) {
    return NextResponse.json(
      { error: 'Admin login is not configured. Set ADMIN_EMAIL, ADMIN_PASSWORD and AUTH_SECRET.' },
      { status: 500 }
    );
  }

  let email = '';
  let password = '';
  try {
    ({ email = '', password = '' } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!checkCredentials(email, password)) {
    // Deliberately vague — do not reveal whether the email or the password was wrong.
    return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions);
  return response;
}
