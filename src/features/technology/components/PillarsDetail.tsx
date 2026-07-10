import { Thermometer, RotateCw, Cpu, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { TECHNOLOGY_PILLARS } from '@/constants/technologyPillars';

const ICONS: Record<string, LucideIcon> = {
  thermometer: Thermometer,
  'rotate-cw': RotateCw,
  cpu: Cpu,
  'shield-check': ShieldCheck,
};

export function PillarsDetail() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="01">System Overview</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Four subsystems, engineered to operate as one.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {TECHNOLOGY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon];
            return (
              <Reveal key={pillar.tag} delay={i * 0.05}>
                <div className="group grid gap-4 py-9 transition-colors md:grid-cols-[48px_140px_1fr] md:items-start md:gap-8">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-canopy transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="font-mono text-xs tracking-[0.14em] text-gold">{pillar.tag}</p>
                  <div>
                    <h3 className="font-display text-xl font-medium">{pillar.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-graphite/60">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
