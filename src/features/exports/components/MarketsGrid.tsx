import { MapPin } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { StatBlock } from '@/components/ui/StatBlock';
import { EXPORT_MARKETS } from '@/constants/exportMarkets';

export function MarketsGrid() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <Reveal>
            <Eyebrow index="01">Destination Markets</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Ten markets, five continents, one manufacturing floor.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-x-10 gap-y-6 lg:justify-end">
            <StatBlock value="10+" label="Countries" />
            <StatBlock value="5" label="Continents" />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {EXPORT_MARKETS.map((market, i) => (
            <Reveal key={market} delay={i * 0.03}>
              <div className="group flex items-center gap-2 border-t-2 border-forest pt-4 transition-[padding] duration-300 hover:pt-3">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-display text-sm font-medium">{market}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
