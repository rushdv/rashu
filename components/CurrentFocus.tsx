import { currentFocus } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function CurrentFocus() {
  return (
    <section
      id="focus"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="focus-heading"
    >
      <SectionHeader number="07" title="Current Learning Focus" />
      <p className="text-[15px] text-[#6b7280] mb-8 max-w-xl leading-relaxed">
        Active areas of study and practice — not claimed professional expertise.
      </p>
      <ul
        className="flex flex-wrap gap-3"
        role="list"
        aria-label="Current learning focus areas"
      >
        {currentFocus.map((area) => (
          <li key={area}>
            <span className="block font-mono text-sm font-medium px-4 py-2.5 border border-[#1f1f1f] text-[#6b7280] hover:border-[#10b981] hover:text-[#10b981] transition-colors duration-200 cursor-default">
              {area}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
