import { Hero, Description, ProcessSteps, Creations, Reviews, Stats, FAQ } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Embroidered Patches | Premium Quality Custom Patches',
  description: 'Get eye-popping embroidered custom patches for every industry. Premium quality, fast delivery, affordable prices. Order custom patches for businesses, teams, and personal projects.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <ProcessSteps />
      <Creations />
      <Reviews />
      <Stats />
      <FAQ />
    </>
  );
}
