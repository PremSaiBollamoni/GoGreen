import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { COMPANY_FACTS } from '@/constants/companyFacts';

export function WhoWeAre() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: 'var(--color-line)' }}
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="01">Who We Are</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
              An engineering company, built for the field.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite/75">
              GoGreen Agritech Solutions is a 100% Export-Oriented Unit
              incubated within Centurion University of Technology and
              Management — designing, fabricating, and exporting
              climate-resilient growing infrastructure for the international
              agriculture industry.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-graphite/60">
              We are the flagship agritech venture of Gram Tarang
              Technologies, drawing on two decades of applied engineering and
              rural-development expertise. Our controlled-environment domes
              and rotating trellis systems replace unpredictable open-field
              growing with a precisely engineered structure — closing the gap
              between what a crop needs and what the climate provides.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:pt-2">
            <p className="spec-label">At a Glance</p>
            <dl className="mt-4 divide-y divide-line border-t border-line">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between py-4">
                  <dt className="text-sm text-graphite/50">{fact.label}</dt>
                  <dd className="font-display text-base font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
