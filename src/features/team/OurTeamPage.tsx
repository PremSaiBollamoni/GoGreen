import { PageHero } from '@/components/common/PageHero';
import { TeamProfiles } from './components/TeamProfiles';

export function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="TEAM"
        eyebrow="Our Team"
        title="Development-sector depth, engineering discipline."
        subtitle="Promoters, directors and the development & implementation team behind GoGreen — three decades of rural development, DFID program leadership and precision engineering brought to an export-manufacturing venture."
      />
      <TeamProfiles />
    </>
  );
}
