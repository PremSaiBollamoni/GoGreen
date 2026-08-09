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

export function TechnologySection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="03" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <Eyebrow index="03">Technology</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Controlled Environment Agriculture, engineered as a system.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-graphite/60 lg:justify-self-end lg:text-right">
              Four subsystems working as one — climate, structure, motion and
              monitoring — so the crop, not the weather, sets the pace of
              growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {TECHNOLOGY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon];
            return (
              <Reveal key={pillar.tag} delay={i * 0.06} className="bg-mist p-8 md:min-h-[280px]">
                <Icon size={26} strokeWidth={1.5} className="text-canopy" />
                <p className="mt-8 font-mono text-xs tracking-[0.14em] text-gold">{pillar.tag}</p>
                <h3 className="mt-3 font-display text-xl font-medium">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/60">
                  {pillar.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
