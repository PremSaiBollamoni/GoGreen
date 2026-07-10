import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { RAW_MATERIALS, PACKING_MATERIALS } from '@/constants/manufacturingEquipment';

export function MaterialsSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="03" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="03">Materials</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Imported raw materials, precise HS codes.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="spec-label">Raw Materials</p>
            <ul className="mt-4 divide-y divide-line border-t border-line">
              {RAW_MATERIALS.map((material) => (
                <li
                  key={material.name}
                  className="flex items-center justify-between gap-6 py-4 transition-colors hover:text-canopy"
                >
                  <span className="text-sm font-medium">{material.name}</span>
                  <span className="font-mono text-xs text-graphite/50">{material.code}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="spec-label">Consumables &amp; Packing</p>
            <ul className="mt-4 divide-y divide-line border-t border-line">
              {PACKING_MATERIALS.map((item) => (
                <li key={item} className="py-4 text-sm font-medium transition-colors hover:text-canopy">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
