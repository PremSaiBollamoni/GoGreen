import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { TechnologySection } from './components/TechnologySection';
import { ProductsPreview } from './components/ProductsPreview';
import { ManufacturingPreview } from './components/ManufacturingPreview';
import { EcosystemSection } from './components/EcosystemSection';
import { ExportsPreview } from './components/ExportsPreview';
import { TeamPreview } from './components/TeamPreview';
import { ProjectGallery } from './components/ProjectGallery';
import { ContactCTA } from './components/ContactCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TechnologySection />
      <ProductsPreview />
      <ManufacturingPreview />
      <EcosystemSection />
      <ExportsPreview />
      <TeamPreview />
      <ProjectGallery />
      <ContactCTA />
    </>
  );
}
