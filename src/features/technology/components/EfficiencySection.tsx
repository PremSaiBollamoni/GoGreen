import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { StatBlock } from '@/components/ui/StatBlock';
import { EFFICIENCY_METRICS } from '@/constants/efficiency';

export function EfficiencySection() {
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
          <Eyebrow index="02">Performance</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Automation removes the guesswork from growing conditions.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-mist/60">
            Automating temperature, humidity, light and water-use efficiency
            takes climate out of the equation — the more of these operations
            we automate, the more productive the growing environment becomes.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {EFFICIENCY_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={0.1 + i * 0.06}>
              <StatBlock tone="dark" {...metric} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
