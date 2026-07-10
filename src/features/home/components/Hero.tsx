import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { StatBlock } from '@/components/ui/StatBlock';
import { Container } from '@/components/ui/Container';
import { COMPANY } from '@/constants/company';
import { HERO_STATS } from '@/constants/stats';
import { GeodesicDome } from './GeodesicDome';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-deepest pt-28 pb-20 text-mist md:pt-32">
      <div
        className="facet-field pointer-events-none absolute inset-0"
        style={{ color: '#1c3a29' }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Eyebrow index="EOU · 2026">{COMPANY.status}</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="mt-6 max-w-xl font-display text-5xl font-medium leading-[1.03] tracking-tight md:text-6xl"
            >
              {COMPANY.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
              className="mt-6 max-w-md text-base leading-relaxed text-mist/70"
            >
              Patented geodesic dome greenhouses and automated rotating trellis
              systems, engineered at Centurion University and exported to
              growers across the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/technology">
                <Button variant="primary">Explore the Technology</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-mist/25 text-mist hover:border-sprout hover:text-sprout">
                  Enquire
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="flex justify-center lg:justify-end"
          >
            <GeodesicDome />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} tone="dark" {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
