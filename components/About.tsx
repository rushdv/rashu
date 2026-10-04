import { about } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="about-heading"
    >
      <SectionHeader number="01" title="About" />
      <div className="max-w-3xl space-y-5">
        {about.map((paragraph, index) => (
          <p key={index} className="text-[#6b7280] text-[15px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
