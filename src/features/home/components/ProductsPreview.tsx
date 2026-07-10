import { Link } from 'react-router-dom';
import { ArrowUpRight, Hexagon, RefreshCw, Cpu, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { PRODUCTS } from '@/constants/products';

const ICONS: Record<string, LucideIcon> = {
  hexagon: Hexagon,
  'refresh-cw': RefreshCw,
  cpu: Cpu,
};

export function ProductsPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="03" tone="dark" />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow index="03">Products</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Three systems. One growing environment.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/products"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-sprout hover:text-mist"
            >
              Full specifications <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = ICONS[product.icon];
            return (
              <Reveal key={product.code} delay={i * 0.08}>
                <Link
                  to="/products"
                  className="group flex h-full flex-col border border-mist/15 p-8 transition-colors hover:border-sprout/60 md:min-h-[360px]"
                >
                  <Icon size={26} strokeWidth={1.5} className="text-sprout" />
                  <p className="mt-8 font-mono text-xs tracking-[0.14em] text-gold">
                    {product.code}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/60">
                    {product.description}
                  </p>
                  <ul className="mt-auto space-y-1.5 border-t border-mist/10 pt-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="font-mono text-xs text-mist/45">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
