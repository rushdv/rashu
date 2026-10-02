interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="font-mono text-[11px] text-[#10b981] tracking-[0.15em] select-none tabular-nums"
          aria-hidden="true"
        >
          {number}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0] tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm text-[#6b7280] leading-relaxed mb-4 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-px bg-[#1f1f1f]" aria-hidden="true" />
    </div>
  );
}
