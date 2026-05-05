type Props = {
  number?: string;
  label: string;
  className?: string;
};

export function SectionEyebrow({ number, label, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {number ? (
        <span className="mono text-[color:var(--color-ink)]">{number}</span>
      ) : null}
      <span aria-hidden className="h-px w-6 bg-[color:var(--color-rule)]" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
