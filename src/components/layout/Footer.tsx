import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '@/constants/company';
import gogreenIcon from '@/assets/logos/gogreen-icon.png';

export function Footer() {
  return (
    <footer className="bg-deepest text-mist">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 xl:px-16">
        <div className="grid gap-12 border-b border-mist/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={gogreenIcon} alt="" className="h-8 w-auto" />
              <span className="font-display text-sm font-semibold">{COMPANY.shortName}</span>
            </div>
            <p className="mt-4 max-w-xs font-display text-lg leading-snug text-mist/80">
              {COMPANY.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm text-mist/50">
              {COMPANY.status}, incubated within {COMPANY.incubator}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-mist/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-mist/70 hover:text-sprout">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-mist/40">Contact</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-mist/70">
              <p>{COMPANY.address.line1}</p>
              <p>{COMPANY.address.line2}</p>
              <p className="pt-2">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-sprout">
                  {COMPANY.email}
                </a>
              </p>
              <p>{COMPANY.web}</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 font-mono text-xs text-mist/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.legalName}</p>
          <p>Engineered at Centurion University, Vizianagaram, India</p>
        </div>
      </div>
    </footer>
  );
}
