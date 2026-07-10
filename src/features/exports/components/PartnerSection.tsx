import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';

const AGREEMENT_TERMS = [
  { label: 'Partner', value: 'Advent Group, Australia' },
  { label: 'Coverage', value: 'Domes, trellises & dome covers' },
  { label: 'Arrangement', value: 'Standing buyback agreement' },
  { label: 'Supply', value: 'Specialty tensile-grade raw steel' },
] as const;

export function PartnerSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="02" tone="dark" />
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: '#1c3a29' }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow index="02">Trade Partner</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              A closed loop with our Australian technology partner.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-mist/60">
              Advent Group supplies the tensile-grade steel our designs
              require — material not available in India — and buys back
              every finished dome, trellis and cover we fabricate under a
              standing agreement.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="divide-y divide-mist/10 border-t border-mist/10">
              {AGREEMENT_TERMS.map((term) => (
                <div
                  key={term.label}
                  className="flex items-baseline justify-between py-5 transition-colors hover:text-sprout"
                >
                  <dt className="text-sm text-mist/50">{term.label}</dt>
                  <dd className="font-display text-base font-medium">{term.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
