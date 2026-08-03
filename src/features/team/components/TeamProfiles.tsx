import { Reveal } from '@/components/animations/Reveal';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionNumeral } from '@/components/ui/SectionNumeral';
import { TEAM_GROUPS } from '@/constants/team';

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => /^[A-Z]/.test(part))
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
}

export function TeamProfiles() {
  return (
    <>
      {TEAM_GROUPS.map((group, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={group.title}
            className={`relative overflow-hidden border-t py-24 ${dark ? 'border-line-dark bg-deepest text-mist' : 'border-line bg-paper'}`}
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
                <Eyebrow index={String(i + 1).padStart(2, '0')}>{group.title}</Eyebrow>
              </Reveal>

              <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
                {group.members.map((person, j) => (
                  <Reveal key={person.name} delay={0.05 + (j % 2) * 0.06}>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border font-display text-lg ${dark ? 'border-sprout/40 text-sprout' : 'border-forest/30 text-forest'}`}
                    >
                      {initials(person.name)}
                    </div>
                    <p className="mt-5 font-display text-xl font-medium">{person.name}</p>
                    <p
                      className={`mt-1 font-mono text-xs uppercase tracking-[0.1em] ${dark ? 'text-sprout' : 'text-canopy'}`}
                    >
                      {person.role}
                    </p>
                    {person.bio && (
                      <p
                        className={`mt-4 max-w-xl leading-relaxed ${dark ? 'text-mist/65' : 'text-graphite/65'}`}
                      >
                        {person.bio}
                      </p>
                    )}
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
