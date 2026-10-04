import { labs, type Lab } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function ph(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function LabBlock({ lab }: { lab: Lab }) {
  const profilePlaceholder = ph(lab.profileUrl);

  return (
    <article
      className="border border-[#1f1f1f] bg-[#111111] p-5 hover:border-[#2a2a2a] transition-colors duration-200"
      aria-label={`${lab.platform} practice profile`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5 flex-wrap">
        <h3 className="font-semibold text-[#f0f0f0] text-[15px]">{lab.platform}</h3>
        {profilePlaceholder ? (
          <span className="font-mono text-xs text-[#3a3a3a] italic">
            Profile link pending
          </span>
        ) : (
          <a
            href={lab.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#10b981] font-medium hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
            aria-label={`View ${lab.platform} profile (opens in new tab)`}
          >
            View Profile →
          </a>
        )}
      </div>

      {/* Stats */}
      <dl className="space-y-2.5 mb-4">
        {lab.stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <dt className="font-mono text-xs text-[#6b7280] uppercase tracking-[0.12em] shrink-0 w-36">
              {stat.label}
            </dt>
            <dd
              className={`font-mono text-sm ${
                ph(stat.value) ? "text-[#3a3a3a] italic" : "text-[#f0f0f0]"
              }`}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {lab.note && (
        <p className="text-sm text-[#6b7280] leading-relaxed border-t border-[#1f1f1f] pt-4">
          {lab.note}
        </p>
      )}
    </article>
  );
}

export default function Labs() {
  return (
    <section
      id="labs"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="labs-heading"
    >
      <SectionHeader
        number="03"
        title="Security Labs & Practice"
        subtitle="Hands-on practice through structured lab environments. Placeholder values will be updated as progress is documented."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {labs.map((lab) => (
          <LabBlock key={lab.platform} lab={lab} />
        ))}
      </div>

      <p className="font-mono text-xs text-[#3a3a3a] mt-6">
        * Bracketed values are placeholders. Update /data/portfolio.ts with actual statistics.
      </p>
    </section>
  );
}
