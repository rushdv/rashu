import { skills, type SkillGroup } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function SkillBlock({ group }: { group: SkillGroup }) {
  return (
    <div className="border border-[#1f1f1f] bg-[#111111] p-5">
      <h3 className="font-mono text-[11px] font-semibold text-[#10b981] uppercase tracking-[0.15em] mb-4">
        {group.category}
      </h3>
      <ul className="space-y-2.5" role="list">
        {group.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-[#6b7280]">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50 shrink-0"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <SectionHeader
        number="06"
        title="Tools & Security Skills"
        subtitle="Organised by security workflow. No percentage ratings — proficiency develops continuously through practice."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <SkillBlock key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
