import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Container } from '@/components/ui/Container';

interface PageHeroProps {
  eyebrowIndex: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Shared sub-page hero — dark, blueprint-textured, shorter than the Home hero. */
export function PageHero({ eyebrowIndex, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-deepest pt-28 pb-20 text-mist">
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: '#1c3a29' }}
        aria-hidden
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Eyebrow index={eyebrowIndex}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="mt-6 max-w-lg text-base leading-relaxed text-mist/70"
        >
          {subtitle}
        </motion.p>
      </Container>
    </section>
  );
}
