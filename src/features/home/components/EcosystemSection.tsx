import { GraduationCap, Wrench, Users, Landmark, Leaf, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { ECOSYSTEM_ENTITIES } from '@/constants/ecosystem';

const ICONS: Record<string, LucideIcon> = {
  CUTM: GraduationCap,
  GTT: Wrench,
  GTET: Users,
  GTIDS: Landmark,
  ESSE: Leaf,
};

export function EcosystemSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="05" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <Eyebrow index="05">University Ecosystem</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Built inside a twenty-year record of applied development work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-graphite/60 lg:justify-self-end lg:text-right">
              GoGreen is the newest venture in a group that has trained
              hundreds of thousands of people and run development programs
              across five states.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {ECOSYSTEM_ENTITIES.map((entity, i) => {
            const Icon = ICONS[entity.code];
            return (
              <Reveal key={entity.code} delay={i * 0.05}>
                <div className="grid gap-3 py-7 md:grid-cols-[40px_100px_1fr_1.4fr] md:items-center md:gap-8">
                  <Icon size={20} strokeWidth={1.5} className="hidden text-canopy md:block" />
                  <p className="font-mono text-xs tracking-[0.14em] text-canopy">{entity.code}</p>
                  <div>
                    <p className="font-display text-base font-medium">{entity.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.08em] text-graphite/45">
                      {entity.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-graphite/60">{entity.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
