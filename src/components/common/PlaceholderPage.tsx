import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Standing in for pages scheduled in the next build phase. */
export function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <section className="min-h-[70vh] border-t border-line bg-paper pt-40 pb-28">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-lg text-graphite/60">{description}</p>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-gold">
          In Development
        </p>
      </Container>
    </section>
  );
}
