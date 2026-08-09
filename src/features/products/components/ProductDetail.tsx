import { Link } from 'react-router-dom';
import { Hexagon, RefreshCw, Cpu, ArrowUpRight, Check, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import type { PRODUCTS } from '@/constants/products';

const ICONS: Record<string, LucideIcon> = {
  hexagon: Hexagon,
  'refresh-cw': RefreshCw,
  cpu: Cpu,
};

interface ProductDetailProps {
  product: (typeof PRODUCTS)[number];
  index: number;
}

export function ProductDetail({ product, index }: ProductDetailProps) {
  const Icon = ICONS[product.icon];
  const dark = index % 2 === 1;
  const checkColor = dark ? 'text-sprout' : 'text-canopy';

  return (
    <section
      className={`relative flex min-h-screen flex-col justify-center overflow-hidden border-t py-28 ${dark ? 'border-line-dark bg-deepest text-mist' : 'border-line bg-paper'}`}
    >
      <SectionNumeral value={String(index + 1).padStart(2, '0')} tone={dark ? 'dark' : 'light'} />
      {dark && (
        <div
          className="facet-field pointer-events-none absolute inset-0"
          style={{ color: '#1c3a29' }}
          aria-hidden
        />
      )}
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
          <Reveal>
            <div
              className={`relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-sm border ${dark ? 'border-mist/15' : 'border-line'}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm ${dark ? 'border-mist/25 bg-deepest/60' : 'border-line bg-paper/80'}`}
              >
                <Icon size={22} strokeWidth={1.5} className={dark ? 'text-sprout' : 'text-canopy'} />
              </div>
            </div>
            <p className="mt-7 font-mono text-xs tracking-[0.14em] text-gold">{product.code}</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              {product.name}
            </h2>
            <p className={`mt-5 max-w-sm leading-relaxed ${dark ? 'text-mist/60' : 'text-graphite/60'}`}>
              {product.description}
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button
                variant={dark ? 'outline' : 'primary'}
                className={dark ? 'border-mist/25 text-mist hover:border-sprout hover:text-sprout' : ''}
              >
                Request Specifications
              </Button>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="spec-label">Specifications</p>
            <ul className={`mt-4 divide-y border-t ${dark ? 'divide-mist/10 border-mist/10' : 'divide-line border-line'}`}>
              {product.specs.map((spec, i) => (
                <Reveal key={spec} delay={0.1 + i * 0.04}>
                  <li className="group flex items-center gap-3 py-4">
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className={`shrink-0 ${checkColor} transition-transform duration-300 group-hover:scale-125`}
                    />
                    <span className="text-sm font-medium">{spec}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/manufacturing"
              className={`mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] ${dark ? 'text-sprout hover:text-mist' : 'text-forest hover:text-canopy'}`}
            >
              See how it's made <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
