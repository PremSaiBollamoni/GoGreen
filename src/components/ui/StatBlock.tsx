interface StatBlockProps {
  value: string;
  label: string;
  detail?: string;
  tone?: 'light' | 'dark';
}

export function StatBlock({ value, label, detail, tone = 'light' }: StatBlockProps) {
  const ruleColor = tone === 'dark' ? 'border-mist/20' : 'border-graphite/15';
  const detailColor = tone === 'dark' ? 'text-mist/55' : 'text-graphite/55';
  return (
    <div className={`border-t pt-4 ${ruleColor}`}>
      <p className="font-mono text-3xl font-medium tracking-tight md:text-4xl">{value}</p>
      <p className="mt-2 font-display text-sm font-medium">{label}</p>
      {detail && <p className={`mt-1 text-xs ${detailColor}`}>{detail}</p>}
    </div>
  );
}
