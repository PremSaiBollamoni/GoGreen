import { Mail, MapPin, Globe } from 'lucide-react';
import { COMPANY } from '@/constants/company';

const INFO = [
  { icon: MapPin, label: 'Address', value: `${COMPANY.address.line1}, ${COMPANY.address.line2}` },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Globe, label: 'Web', value: COMPANY.web, href: `https://${COMPANY.web}` },
] as const;

export function ContactInfo() {
  return (
    <div>
      <p className="spec-label">Direct Contact</p>
      <ul className="mt-4 divide-y divide-line border-t border-line">
        {INFO.map((item) => (
          <li key={item.label} className="group flex items-start gap-3 py-5">
            <item.icon
              size={17}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-canopy transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-graphite/45">{item.label}</p>
              {'href' in item ? (
                <a href={item.href} className="mt-1 block text-sm font-medium hover:text-canopy">
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="facet-field relative mt-8 flex h-56 items-center justify-center border border-line" style={{ color: 'var(--color-line)' }}>
        <div className="relative flex flex-col items-center gap-2 bg-paper/90 px-4 py-3">
          <MapPin size={20} strokeWidth={1.5} className="text-forest" />
          <p className="text-center text-xs text-graphite/60">
            Centurion University Campus
            <br />
            Vizianagaram, Andhra Pradesh
          </p>
        </div>
      </div>
    </div>
  );
}
