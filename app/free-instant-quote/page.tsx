import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import QuoteContent from './QuoteContent';

export const metadata: Metadata = {
  title: 'Free Instant Quote for Custom Patches',
  description:
    'Get a free, no-obligation quote for your custom patches in minutes. Pick your patch type, size and quantity — we reply with pricing and a digital proof.',
  alternates: { canonical: '/free-instant-quote' },
  openGraph: { url: '/free-instant-quote', title: 'Free Instant Custom Patch Quote' },
};

export default function FreeInstantQuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Free Instant Quote', path: '/free-instant-quote' },
        ])}
      />
      <QuoteContent />
    </>
  );
}
