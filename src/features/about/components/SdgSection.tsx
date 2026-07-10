import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { SDG_FOCUS } from '@/constants/values';

export function SdgSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="04" tone="dark" />
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: '#1c3a29' }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow index="04">Global Impact</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Aligned to the UN Sustainable Development Goals.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-mist/60">
              Centurion University builds its strategy around nine of the 17
              SDGs. GoGreen advances this mandate directly — replacing
              climate-vulnerable farming with engineered, exportable
              infrastructure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SDG_FOCUS.map((goal, i) => (
                <Reveal key={goal} delay={0.1 + i * 0.04}>
                  <li className="border-l-2 border-sprout py-2.5 pl-4 text-sm font-medium text-mist/80 transition-colors hover:border-mist hover:text-mist">
                    {goal}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
