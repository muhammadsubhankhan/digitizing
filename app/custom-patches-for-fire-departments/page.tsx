import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/IndustryPage';
import { industries } from '@/lib/industries';

const SLUG = 'custom-patches-for-fire-departments';

export const metadata: Metadata = industryMetadata(SLUG);

export default function CustomPatchesForFireDepartmentsPage() {
  return <IndustryPage industry={industries[SLUG]} />;
}
