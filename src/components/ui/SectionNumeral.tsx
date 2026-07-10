interface SectionNumeralProps {
  value: string;
  tone?: 'light' | 'dark';
}

/** Large watermark numeral — a spec-sheet page marker, not decoration for its own sake. */
export function SectionNumeral({ value, tone = 'light' }: SectionNumeralProps) {
  const color = tone === 'dark' ? 'text-mist/[0.05]' : 'text-graphite/[0.05]';
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -right-4 -top-10 select-none font-display text-[16rem] font-medium leading-none md:text-[22rem] ${color}`}
    >
      {value}
    </span>
  );
}
