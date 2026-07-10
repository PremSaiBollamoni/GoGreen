import { PageHero } from '@/components/common/PageHero';
import { MissionValues } from './components/MissionValues';
import { FoundingTimeline } from './components/FoundingTimeline';
import { EcosystemGrid } from './components/EcosystemGrid';
import { SdgSection } from './components/SdgSection';

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="ABOUT"
        eyebrow="About GoGreen"
        title="An export venture built on twenty years of applied engineering."
        subtitle="GoGreen Agritech Solutions is the newest company in the Gram Tarang Technologies group, incubated within Centurion University of Technology and Management."
      />
      <MissionValues />
      <FoundingTimeline />
      <EcosystemGrid />
      <SdgSection />
    </>
  );
}
