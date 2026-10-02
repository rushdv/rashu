import { writeups, type Writeup } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function ph(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function WriteupEntry({ writeup }: { writeup: Writeup }) {
  const titlePh = ph(writeup.title);
  const urlPh = ph(writeup.url);
  const datePh = ph(writeup.date);

  return (
    <li className="py-5 border-b border-[#1f1f1f] last:border-b-0">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold text-sm leading-snug mb-0.5 ${
              titlePh ? "text-[#3a3a3a] italic" : "text-[#f0f0f0]"
            }`}
          >
            {writeup.title}
          </h3>
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
              ph(writeup.platform) ? "text-[#3a3a3a] italic" : "text-[#e8c77d]"
            }`}
          >
            {writeup.platform}
          </p>
        </div>
        {urlPh ? (
          <span className="font-mono text-[10px] text-[#3a3a3a] italic shrink-0">
            Coming soon
          </span>
        ) : (
          <a
            href={writeup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[#e8c77d] hover:underline shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e8c77d]"
            aria-label={`Read writeup: ${writeup.title} (opens in new tab)`}
          >
            Read →
          </a>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Category */}
        <span
          className={`font-mono text-[10px] ${
            ph(writeup.category) ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
          }`}
        >
          {writeup.category}
        </span>

        <span className="text-[#2a2a2a] font-mono text-[10px]" aria-hidden="true">
          ·
        </span>

        {/* Date */}
        <span
          className={`font-mono text-[10px] ${
            datePh ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
          }`}
        >
          {writeup.date}
        </span>

        {/* Tags */}
        {writeup.tags.length > 0 && (
          <>
            <span className="text-[#2a2a2a] font-mono text-[10px]" aria-hidden="true">
              ·
            </span>
            <div
              className="flex flex-wrap gap-1.5"
              aria-label={`Tags: ${writeup.tags.join(", ")}`}
            >
              {writeup.tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[10px] px-1.5 py-px border ${
                    ph(tag)
                      ? "border-[#1a1a1a] text-[#3a3a3a] italic"
                      : "border-[#1f1f1f] text-[#6b7280]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default function Writeups() {
  return (
    <section
      id="writeups"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="writeups-heading"
    >
      <SectionHeader
        number="05"
        title="Writeups &amp; Research Notes"
        subtitle="Security research notes, machine writeups, and lab documentation."
      />
      <ul role="list" className="border-t border-[#1f1f1f]">
        {writeups.map((writeup, i) => (
          <WriteupEntry key={i} writeup={writeup} />
        ))}
      </ul>
    </section>
  );
}
