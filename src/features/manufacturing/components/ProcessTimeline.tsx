import {
  Truck,
  Warehouse,
  Scissors,
  Hammer,
  Sparkles,
  CornerDownRight,
  Stamp,
  CircleCheck,
  Package,
  ClipboardList,
  Ship,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { MANUFACTURING_STEPS } from '@/constants/manufacturingProcess';

const ICONS: Record<string, LucideIcon> = {
  truck: Truck,
  warehouse: Warehouse,
  scissors: Scissors,
  hammer: Hammer,
  sparkles: Sparkles,
  'corner-down-right': CornerDownRight,
  stamp: Stamp,
  'circle-check': CircleCheck,
  package: Package,
  'clipboard-list': ClipboardList,
  ship: Ship,
};

export function ProcessTimeline() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="01">The Process</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Eleven stages, one continuous line.
          </h2>
        </Reveal>

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {MANUFACTURING_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <Reveal key={step.order} delay={i * 0.03}>
                <li className="group grid gap-3 py-6 pl-4 transition-colors hover:bg-mist md:-mx-4 md:grid-cols-[60px_44px_1fr_1.4fr] md:items-center md:gap-8 md:pl-8">
                  <span className="font-mono text-xs text-gold">
                    {String(step.order).padStart(2, '0')}
                  </span>
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="hidden text-canopy transition-transform duration-300 group-hover:scale-110 md:block"
                  />
                  <p className="font-display text-base font-medium">{step.name}</p>
                  <p className="text-sm text-graphite/55">{step.detail}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
