import { PageHero } from '@/components/common/PageHero';
import { PillarsDetail } from './components/PillarsDetail';
import { EfficiencySection } from './components/EfficiencySection';
import { SensorSuite } from './components/SensorSuite';

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="TECH"
        eyebrow="Technology"
        title="Controlled Environment Agriculture, engineered as a system."
        subtitle="Climate control, structural geometry, automated motion and remote monitoring — four subsystems built to work as one growing environment."
      />
      <PillarsDetail />
      <EfficiencySection />
      <SensorSuite />
    </>
  );
}
