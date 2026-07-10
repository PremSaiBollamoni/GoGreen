interface EyebrowProps {
  index?: string;
  children: string;
}

/** Spec-sheet style section label — a mono tag, not a decorative badge. */
export function Eyebrow({ index, children }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-canopy">
      {index && <span className="text-gold">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
