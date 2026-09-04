import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE_NAME, CONTACT, absoluteUrl } from '@/lib/site';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Custom Patch Quotes & Support',
  description:
    'Talk to the Custom Patch House team about your custom patch order. Email or call us for pricing, artwork help, bulk quotes and delivery timelines.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact', title: 'Contact Custom Patch House' },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE_NAME}`,
  url: absoluteUrl('/contact'),
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    email: CONTACT.email,
    telephone: CONTACT.phone,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <ContactContent />
    </>
  );
}
