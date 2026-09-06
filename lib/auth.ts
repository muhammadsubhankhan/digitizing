import { createHmac, timingSafeEqual, randomBytes } from 'crypto';
import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'cph_admin';
const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? '';
const AUTH_SECRET = process.env.AUTH_SECRET ?? '';

/** Constant-time string comparison, so a wrong password cannot be found by timing. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  // timingSafeEqual throws on length mismatch, so hash first to equalise length.
  const hashA = createHmac('sha256', 'cmp').update(bufA).digest();
  const hashB = createHmac('sha256', 'cmp').update(bufB).digest();
  return timingSafeEqual(hashA, hashB);
}

export function credentialsAreConfigured(): boolean {
  return Boolean(ADMIN_EMAIL && ADMIN_PASSWORD && AUTH_SECRET);
}

export function checkCredentials(email: string, password: string): boolean {
  if (!credentialsAreConfigured()) return false;
  // Both checks always run so the response time does not reveal which one failed.
  const emailOk = safeEqual(email.trim().toLowerCase(), ADMIN_EMAIL.trim().toLowerCase());
  const passwordOk = safeEqual(password, ADMIN_PASSWORD);
  return emailOk && passwordOk;
}

/** token = <expiry>.<hmac(expiry)> — no database lookup needed to validate it. */
export function createSessionToken(): string {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const signature = createHmac('sha256', AUTH_SECRET).update(String(expires)).digest('hex');
  return `${expires}.${signature}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token || !AUTH_SECRET) return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature) return false;
  if (Number(expires) < Date.now()) return false;

  const expected = createHmac('sha256', AUTH_SECRET).update(expires).digest('hex');
  if (expected.length !== signature.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SESSION_MAX_AGE,
};

/** Server-side check for use in pages and route handlers. */
export async function isLoggedIn(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

/** Helper for generating a secret when setting the project up. */
export function generateSecret(): string {
  return randomBytes(32).toString('hex');
}
