import { PageHero } from '@/components/common/PageHero';
import { LeadershipProfiles } from './components/LeadershipProfiles';

export function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="TEAM"
        eyebrow="Leadership"
        title="Development-sector depth, engineering discipline."
        subtitle="Three directors bringing three decades of rural development, DFID program leadership and corporate consulting to an export-manufacturing venture."
      />
      <LeadershipProfiles />
    </>
  );
}
