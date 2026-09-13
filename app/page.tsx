import {
  Hero,
  Description,
  WhyChoose,
  ProcessSteps,
  ServiceShowcase,
  Creations,
  Stats,
  OrderQuantity,
  Reviews,
  FAQ,
} from '@/components';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Patches USA | Bulk Orders, No Minimums & Free Design Help',
  description: 'Shop Custom Patches for Hats & Apparel in the USA. Order online with fast production, free design help, and reliable shipping for quality you\u2019ll love.',
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <Description />
      <WhyChoose />
      <ProcessSteps />
      <ServiceShowcase />
      <Creations />
      <Stats />
      <OrderQuantity />
      <Reviews />
      <FAQ />
    </>
  );
}
