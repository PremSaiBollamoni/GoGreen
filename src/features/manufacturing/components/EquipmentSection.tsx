import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { EQUIPMENT_LIST } from '@/constants/manufacturingEquipment';

export function EquipmentSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="02" tone="dark" />
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: '#1c3a29' }}
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="02">Floor Equipment</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            The machines behind the line.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-mist/10 bg-mist/10 md:grid-cols-2">
          {EQUIPMENT_LIST.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.04}
              className="flex items-center justify-between gap-6 bg-deepest px-6 py-5 transition-colors hover:bg-forest/20"
            >
              <span className="text-sm font-medium text-mist/85">{item.name}</span>
              <span className="font-mono text-sm text-sprout">×{item.qty}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
