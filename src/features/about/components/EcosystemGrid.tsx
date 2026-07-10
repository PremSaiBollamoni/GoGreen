import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { ECOSYSTEM_ENTITIES } from '@/constants/ecosystem';

export function EcosystemGrid() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="03" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="03">The Group</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Five ventures, one development mandate.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ECOSYSTEM_ENTITIES.map((entity, i) => (
            <Reveal
              key={entity.code}
              delay={i * 0.06}
              className="border border-line p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/50 hover:shadow-[0_16px_40px_-24px_rgba(18,59,38,0.35)] md:min-h-[240px]"
            >
              <p className="font-mono text-xs tracking-[0.14em] text-canopy">{entity.code}</p>
              <h3 className="mt-3 font-display text-lg font-medium leading-snug">
                {entity.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-graphite/45">
                {entity.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-graphite/60">
                {entity.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
