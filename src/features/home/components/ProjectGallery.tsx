import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import domeInAu from '@/assets/gallery/dome-in-au.jpeg';
import trellisAutomation from '@/assets/gallery/trellis-automation.jpeg';

const SLIDES = [
  {
    image: domeInAu,
    caption: 'A GoGreen dome installed on-site in Australia, under the Advent Group partnership.',
  },
  {
    image: trellisAutomation,
    caption: 'IoT-based dome automation and the modular rotary ecological trellis system in the field.',
  },
] as const;

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? '100%' : '-100%' }),
  center: { x: 0 },
  exit: (dir: number) => ({ x: dir >= 0 ? '-100%' : '100%' }),
};

export function ProjectGallery() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);

  function next() {
    setSlide(([i]) => [(i + 1) % SLIDES.length, 1]);
  }

  function prev() {
    setSlide(([i]) => [(i - 1 + SLIDES.length) % SLIDES.length, -1]);
  }

  function goTo(i: number) {
    setSlide(([current]) => [i, i > current ? 1 : -1]);
  }

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="01" tone="dark" />
      <Container className="relative">
        <Reveal>
          <Eyebrow index="01">From the Field</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Built here, deployed everywhere.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-mist/10 bg-forest/20 sm:aspect-[2/1]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={SLIDES[index].image}
                alt={SLIDES[index].caption}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deepest/90 to-transparent p-6 sm:p-8">
              <p className="max-w-xl text-sm leading-relaxed text-mist/85">
                {SLIDES[index].caption}
              </p>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-mist/25 bg-deepest/60 text-mist transition-colors hover:border-sprout hover:text-sprout"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-mist/25 bg-deepest/60 text-mist transition-colors hover:border-sprout hover:text-sprout"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-sprout' : 'w-1.5 bg-mist/25'}`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
