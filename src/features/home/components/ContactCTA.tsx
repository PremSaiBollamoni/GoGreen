import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/constants/company';

export function ContactCTA() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-mist py-28">
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: 'var(--color-line)' }}
        aria-hidden
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="spec-label">Get in Touch</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Growing infrastructure engineered for your climate, exported to
            your market.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary">Start an Enquiry</Button>
            </Link>
            <a href={`mailto:${COMPANY.email}`}>
              <Button variant="outline" showArrow={false}>
                {COMPANY.email}
              </Button>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 flex max-w-lg flex-col items-center gap-4 border-t border-line pt-8 text-sm text-graphite/60 sm:flex-row sm:justify-center sm:gap-10">
            <span className="flex items-center gap-2">
              <MapPin size={15} strokeWidth={1.5} className="text-canopy" />
              {COMPANY.address.line1}, {COMPANY.address.line2}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={15} strokeWidth={1.5} className="text-canopy" />
              {COMPANY.email}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
