import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/IndustryPage';
import { industries } from '@/lib/industries';

const SLUG = 'school-and-varsity-patches';

export const metadata: Metadata = industryMetadata(SLUG);

export default function SchoolAndVarsityPatchesPage() {
  return <IndustryPage industry={industries[SLUG]} />;
}
