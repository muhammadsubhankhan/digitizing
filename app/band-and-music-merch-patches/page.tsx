import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/IndustryPage';
import { industries } from '@/lib/industries';

const SLUG = 'band-and-music-merch-patches';

export const metadata: Metadata = industryMetadata(SLUG);

export default function BandAndMusicMerchPatchesPage() {
  return <IndustryPage industry={industries[SLUG]} />;
}
