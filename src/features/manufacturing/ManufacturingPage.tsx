import { PageHero } from '@/components/common/PageHero';
import { ProcessTimeline } from './components/ProcessTimeline';
import { EquipmentSection } from './components/EquipmentSection';
import { MaterialsSection } from './components/MaterialsSection';

export function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="MFG"
        eyebrow="Manufacturing"
        title="From raw steel to dispatch crate, on one factory floor."
        subtitle="Every dome frame we export moves through the same fixed eleven-stage sequence at our Vizianagaram unit — cut, pressed, bent, inspected and crated to spec."
      />
      <ProcessTimeline />
      <EquipmentSection />
      <MaterialsSection />
    </>
  );
}
