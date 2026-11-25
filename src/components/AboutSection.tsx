"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Tag */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <span className="text-lime-300 text-xs font-mono tracking-widest uppercase">
            About
          </span>
          <h2 className="text-gray-200 text-4xl sm:text-5xl font-medium font-sans leading-[1.15]">
            Background &amp;<br />
            Focus
          </h2>
        </div>

        {/* Right Column: Narrative & Details */}
        <div className="lg:col-span-8 flex flex-col items-start gap-8">
          <p className="text-gray-200 text-xl sm:text-2xl font-normal font-sans leading-relaxed max-w-3xl">
            Computer science undergraduate developing core competencies across defensive analysis, network telemetry, and vulnerability assessments.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* Academic Base */}
            <div className="p-5 bg-neutral-900 border border-zinc-800 flex flex-col gap-2">
              <span className="text-neutral-500 text-[11px] font-mono uppercase tracking-wider">
                Academic Base
              </span>
              <span className="text-gray-200 text-sm font-sans font-medium">
                BSc in Computer Science &amp; Engineering
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Undergraduate Student
              </span>
            </div>

            {/* Practical Security Focus */}
            <div className="p-5 bg-neutral-900 border border-zinc-800 flex flex-col gap-2">
              <span className="text-neutral-500 text-[11px] font-mono uppercase tracking-wider">
                Hands-on Labs
              </span>
              <span className="text-gray-200 text-sm font-sans font-medium">
                TryHackMe &amp; Hack The Box
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Daily lab practice &amp; CTF challenges
              </span>
            </div>

            {/* Core Methodology */}
            <div className="p-5 bg-neutral-900 border border-zinc-800 flex flex-col gap-2">
              <span className="text-neutral-500 text-[11px] font-mono uppercase tracking-wider">
                Applied Focus
              </span>
              <span className="text-gray-200 text-sm font-sans font-medium">
                Offensive &amp; Defensive Security
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Malware triage &amp; network analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
