import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { TEAM_PREVIEW } from '@/constants/team';

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part))
    .map((part) => part[0])
    .join('');
}

export function TeamPreview() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-line-dark bg-deepest py-28 text-mist">
      <SectionNumeral value="08" tone="dark" />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow index="08">Our Team</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Development-sector depth, engineering discipline.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/our-team"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-sprout hover:text-mist"
            >
              Full profiles <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TEAM_PREVIEW.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 0.08}
              className="border-t border-mist/15 pt-6 md:min-h-[300px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sprout/40 font-display text-lg text-sprout">
                {initials(person.name)}
              </div>
              <p className="mt-6 font-display text-lg font-medium">{person.name}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-sprout">
                {person.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mist/60">{person.summary}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
