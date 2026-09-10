import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/IndustryPage';
import { industries } from '@/lib/industries';

const SLUG = 'scout-and-youth-group-patches';

export const metadata: Metadata = industryMetadata(SLUG);

export default function ScoutAndYouthGroupPatchesPage() {
  return <IndustryPage industry={industries[SLUG]} />;
}
