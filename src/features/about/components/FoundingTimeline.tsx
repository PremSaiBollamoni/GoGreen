import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { FOUNDING_TIMELINE } from '@/constants/values';

export function FoundingTimeline() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="02" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="02">Timeline</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Two decades of applied work, one new export venture.
          </h2>
        </Reveal>

        <ol className="mt-16 border-l border-line pl-8 md:pl-12">
          {FOUNDING_TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <li className="group relative pb-12 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-forest transition-transform duration-300 group-hover:scale-150 md:-left-[calc(3rem+5px)]" />
                <p className="font-mono text-sm text-gold">{item.year}</p>
                <p className="mt-1 max-w-md font-display text-lg font-medium">{item.event}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
