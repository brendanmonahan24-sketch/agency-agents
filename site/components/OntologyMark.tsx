type Props = {
  size?: number;
  className?: string;
  withLabel?: boolean;
};

export function OntologyMark({ size = 28, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        opacity="0.55"
      >
        <line x1="32" y1="14" x2="18" y2="34" />
        <line x1="32" y1="14" x2="46" y2="34" />
        <line x1="18" y1="34" x2="11" y2="50" />
        <line x1="18" y1="34" x2="25" y2="50" />
        <line x1="46" y1="34" x2="39" y2="50" />
        <line x1="46" y1="34" x2="53" y2="50" />
      </g>
      <g fill="currentColor">
        <circle cx="32" cy="14" r="3.2" />
        <circle cx="18" cy="34" r="2.6" />
        <circle cx="46" cy="34" r="2.6" />
        <circle cx="11" cy="50" r="2" />
        <circle cx="25" cy="50" r="2" />
        <circle cx="39" cy="50" r="2" />
        <circle cx="53" cy="50" r="2" />
      </g>
    </svg>
  );
}

export function OntologyWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <OntologyMark size={22} />
      <span
        className="display"
        style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
      >
        Hypernym
      </span>
    </span>
  );
}
