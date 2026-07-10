import { ArrowDownToLine, Factory, Ship } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';

const FLOW = [
  {
    icon: ArrowDownToLine,
    tag: 'IN',
    title: 'Import',
    detail: 'Specialty steel, aluminium and agri-plastic sourced from Advent Group, Australia.',
  },
  {
    icon: Factory,
    tag: 'MAKE',
    title: 'Fabricate',
    detail: 'Cut, pressed, bent and assembled at our Vizianagaram unit, India.',
  },
  {
    icon: Ship,
    tag: 'OUT',
    title: 'Export',
    detail: 'Crated and shipped to ten-plus destination markets under buyback agreement.',
  },
] as const;

export function TradeFlow() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <SectionNumeral value="03" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="03">Trade Flow</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Raw material in, finished infrastructure out.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FLOW.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.08}
              className="group border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest/50 hover:shadow-[0_16px_40px_-24px_rgba(18,59,38,0.35)] md:min-h-[220px]"
            >
              <step.icon
                size={26}
                strokeWidth={1.5}
                className="text-canopy transition-transform duration-300 group-hover:-translate-y-1"
              />
              <p className="mt-7 font-mono text-xs tracking-[0.14em] text-gold">{step.tag}</p>
              <h3 className="mt-3 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/60">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
