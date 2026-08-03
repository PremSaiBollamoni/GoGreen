import { PageHero } from '@/components/common/PageHero';
import { MarketsGrid } from './components/MarketsGrid';
import { PartnerSection } from './components/PartnerSection';
import { TradeFlow } from './components/TradeFlow';

export function ExportsPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="EXPORTS"
        eyebrow="Global Exports"
        title="Engineered in Vizianagaram, growing on five continents."
        subtitle="An International MoU with Advent Group, Australia, moves every dome, trellis and cover we fabricate into ten-plus destination markets under a standing buyback agreement."
      />
      <MarketsGrid />
      <PartnerSection />
      <TradeFlow />
    </>
  );
}
