/**
 * Central site config used by metadata, sitemap, robots and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in your environment (and in Vercel project settings)
 * to your live domain — the fallback below is only for local development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://custompatchhouse.com'
).replace(/\/$/, '');

if (SITE_URL.includes('example.com')) {
  // Canonical tags and the sitemap are built from this value — shipping the
  // placeholder would point Google at the wrong domain.
  console.warn(
    '[seo] NEXT_PUBLIC_SITE_URL is still the placeholder. Set it to the live domain in .env.local and in the Vercel project settings.'
  );
}

export const SITE_NAME = 'Custom Patch House';

export const CONTACT = {
  email: 'info@custompatchhouse.com',
  phone: '+1 (972) 447-7381',
  phoneHref: '+19724477381',
  /** wa.me expects digits only, no leading + or spaces. */
  whatsapp: '19724477381',
};

export const SOCIAL_PROFILES = [
  'https://facebook.com',
  'https://instagram.com',
  'https://pinterest.com',
];

/** Absolute URL helper — schema.org and OG tags need fully-qualified URLs. */
export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
