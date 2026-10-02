"use client";

import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
      aria-labelledby="hero-name"
    >
      {/* Metadata line */}
      <p className="font-mono text-[11px] text-[#6b7280] tracking-[0.2em] uppercase mb-10 animate-fade-in">
        {personal.meta}
      </p>

      {/* Name */}
      <h1
        id="hero-name"
        className="text-[clamp(3.5rem,12vw,7rem)] font-bold text-[#f0f0f0] tracking-tight leading-[0.95] mb-7 animate-fade-in-up"
      >
        {personal.name}
      </h1>

      {/* Tagline */}
      <p className="text-base sm:text-lg text-[#6b7280] max-w-xl leading-relaxed mb-10 animate-fade-in-up delay-100">
        {personal.tagline}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-16 animate-fade-in-up delay-200">
        <a
          href="#credentials"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("credentials")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="font-mono text-[11px] uppercase tracking-[0.15em] px-5 py-3 border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-[#0a0a0a] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          View Credentials
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="font-mono text-[11px] uppercase tracking-[0.15em] px-5 py-3 border border-[#1f1f1f] text-[#6b7280] hover:border-[#6b7280] hover:text-[#f0f0f0] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Contact
        </a>
      </div>

      {/* Education */}
      <div className="border-t border-[#1f1f1f] pt-6 animate-fade-in-up delay-300">
        <dl className="flex flex-wrap gap-x-10 gap-y-3">
          <div>
            <dt className="font-mono text-[10px] text-[#6b7280] uppercase tracking-[0.15em] mb-1">
              Degree
            </dt>
            <dd className="font-mono text-xs text-[#f0f0f0]">
              {personal.education.degree}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] text-[#6b7280] uppercase tracking-[0.15em] mb-1">
              Institution
            </dt>
            <dd className="font-mono text-xs text-[#f0f0f0]">
              {personal.education.institution}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
