import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/IndustryPage';
import { industries } from '@/lib/industries';

const SLUG = 'corporate-uniform-patches';

export const metadata: Metadata = industryMetadata(SLUG);

export default function CorporateUniformPatchesPage() {
  return <IndustryPage industry={industries[SLUG]} />;
}
