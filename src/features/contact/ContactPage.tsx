import { PageHero } from '@/components/common/PageHero';
import { ContactSection } from './components/ContactSection';

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrowIndex="CONTACT"
        eyebrow="Contact"
        title="Start a conversation about your growing environment."
        subtitle="Business enquiries, career applications, or a question about a specific market — reach us directly or send it through the form."
      />
      <ContactSection />
    </>
  );
}
