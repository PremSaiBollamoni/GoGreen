import { Target, Eye, HeartHandshake, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { CORE_VALUES } from '@/constants/values';

const ICONS: Record<string, LucideIcon> = {
  target: Target,
  eye: Eye,
  'heart-handshake': HeartHandshake,
};

export function MissionValues() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="01">Mission &amp; Values</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            What we build toward, and why.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {CORE_VALUES.map((value, i) => {
            const Icon = ICONS[value.icon];
            return (
              <Reveal
                key={value.title}
                delay={i * 0.08}
                className="group bg-paper p-9 transition-colors duration-300 hover:bg-mist md:min-h-[280px]"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-canopy transition-transform duration-300 group-hover:-translate-y-1"
                />
                <h3 className="mt-8 font-display text-xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/60">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
