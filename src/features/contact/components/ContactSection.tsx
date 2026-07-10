import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line bg-paper py-28">
      <SectionNumeral value="01" />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
