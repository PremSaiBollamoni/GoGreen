import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
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
import { StatBlock } from '@/components/ui/StatBlock';
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

export function ManufacturingPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="04" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <Reveal>
            <Eyebrow index="04">Manufacturing</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Eleven stages, from raw steel to dispatch crate.
            </h2>
            <p className="mt-5 max-w-md text-graphite/60">
              Every dome frame moves through the same fixed sequence on our
              Vizianagaram floor — cut, pressed, bent, inspected and crated to
              export spec.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-x-10 gap-y-6 lg:justify-end">
            <StatBlock value="11" label="Process Stages" />
            <StatBlock value="8" label="Machine Types" />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {MANUFACTURING_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <Reveal key={step.order} delay={i * 0.03}>
                <div className="group border-t-2 border-forest pt-4 transition-[padding] duration-300 hover:pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold">
                      {String(step.order).padStart(2, '0')}
                    </span>
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-canopy/70 transition-colors group-hover:text-canopy"
                    />
                  </div>
                  <p className="mt-3 font-display text-sm font-medium">{step.name}</p>
                  <p className="mt-1 text-xs leading-snug text-graphite/50">{step.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/manufacturing"
            className="mt-12 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-forest hover:text-canopy"
          >
            Full process <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
