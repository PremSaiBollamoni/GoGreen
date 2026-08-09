import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { StatBlock } from '@/components/ui/StatBlock';
import { EXPORT_MARKETS } from '@/constants/exportMarkets';

export function ExportsPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="07" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow index="07">Global Exports</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              A buyback agreement with Advent Group, Australia.
            </h2>
            <p className="mt-6 leading-relaxed text-graphite/60">
              Every dome, trellis and cover we fabricate ships under a
              standing agreement with our Australian technology partner, who
              also supplies the specialty tensile-grade steel our designs
              require.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-6">
              <StatBlock value="10+" label="Destination Markets" />
              <StatBlock value="5" label="Continents Served" />
            </div>

            <Link
              to="/exports"
              className="mt-9 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-forest hover:text-canopy"
            >
              Export manifest <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="spec-label">Destination Markets</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-3">
              {EXPORT_MARKETS.map((market) => (
                <li
                  key={market}
                  className="flex items-center gap-2 border-b border-line pb-4 font-display text-sm font-medium"
                >
                  <MapPin size={14} strokeWidth={1.5} className="shrink-0 text-gold" />
                  {market}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
