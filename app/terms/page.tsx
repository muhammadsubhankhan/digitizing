import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbSchema } from '@/lib/schema';
import { termsSections } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms that apply to custom patch quotes and orders with Custom Patch House — proofs and approval, production times, shipping, faults and refunds.',
  alternates: { canonical: '/terms' },
  openGraph: { url: '/terms', title: 'Terms & Conditions' },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions', path: '/terms' },
        ])}
      />
      <LegalPage
        title="Terms & Conditions"
        intro="The terms that apply when you request a quote or place an order with us. Written to be read, not to be skipped."
        sections={termsSections}
      />
    </>
  );
}
