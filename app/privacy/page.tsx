import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbSchema } from '@/lib/schema';
import { privacySections } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What Custom Patch House collects when you request a patch quote, what we use it for, who we share it with, and how to ask us to delete it.',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy', title: 'Privacy Policy' },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        intro="What we collect when you ask us for a quote, what we do with it, and how to get it removed."
        sections={privacySections}
      />
    </>
  );
}
