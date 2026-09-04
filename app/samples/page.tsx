import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import SamplesContent from './SamplesContent';

export const metadata: Metadata = {
  title: 'Patch Samples Gallery | Real Custom Patch Work',
  description:
    'Browse our gallery of finished custom patches — embroidered, chenille, PVC, woven and leather. See the stitch quality and detail before you order.',
  alternates: { canonical: '/samples' },
  openGraph: { url: '/samples', title: 'Custom Patch Samples Gallery' },
};

export default function SamplesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Samples', path: '/samples' },
        ])}
      />
      <SamplesContent />
    </>
  );
}
