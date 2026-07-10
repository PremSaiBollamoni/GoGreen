import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { LEADERSHIP_FULL } from '@/constants/leadershipFull';

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part))
    .map((part) => part[0])
    .join('');
}

export function LeadershipProfiles() {
  return (
    <>
      {LEADERSHIP_FULL.map((person, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={person.name}
            className={`relative flex min-h-screen flex-col justify-center overflow-hidden border-t py-28 ${dark ? 'border-line-dark bg-deepest text-mist' : 'border-line bg-paper'}`}
          >
            <SectionNumeral value={String(i + 1).padStart(2, '0')} tone={dark ? 'dark' : 'light'} />
            {dark && (
              <div
                className="facet-field pointer-events-none absolute inset-0"
                style={{ color: '#1c3a29' }}
                aria-hidden
              />
            )}
            <Container className="relative">
              <Reveal>
                <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16">
                  <div>
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full border font-display text-2xl ${dark ? 'border-sprout/40 text-sprout' : 'border-forest/30 text-forest'}`}
                    >
                      {initials(person.name)}
                    </div>
                    <p className="mt-6 font-display text-2xl font-medium">{person.name}</p>
                    <p
                      className={`mt-1 font-mono text-xs uppercase tracking-[0.1em] ${dark ? 'text-sprout' : 'text-canopy'}`}
                    >
                      {person.role}
                    </p>
                  </div>
                  <div className="space-y-5">
                    {person.bio.map((paragraph, j) => (
                      <Reveal key={j} delay={0.1 + j * 0.06}>
                        <p
                          className={`max-w-2xl leading-relaxed ${dark ? 'text-mist/65' : 'text-graphite/65'}`}
                        >
                          {paragraph}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}
    </>
  );
}
