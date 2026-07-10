import { Radio } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { SENSOR_SUITE } from '@/constants/efficiency';

export function SensorSuite() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="03" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow index="03">Monitoring</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Every reading, one mobile interface.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-t border-line">
              {SENSOR_SUITE.map((sensor, i) => (
                <Reveal key={sensor} delay={0.1 + i * 0.05}>
                  <li className="group flex items-center gap-3 py-5 transition-colors">
                    <Radio
                      size={17}
                      strokeWidth={1.5}
                      className="shrink-0 text-canopy transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm font-medium text-graphite/80 group-hover:text-graphite">
                      {sensor}
                    </span>
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
