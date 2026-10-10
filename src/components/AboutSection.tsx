"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Tag */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <div className="text-lime-300 text-xs font-mono tracking-wider">
            01 / ABOUT
          </div>
          <h2 className="text-gray-200 text-4xl sm:text-5xl font-medium font-sans leading-[1.15]">
            A foundation.<br />
            A direction.
          </h2>
        </div>

        {/* Right Column: Narrative & Typography Details */}
        <div className="lg:col-span-8 flex flex-col items-start gap-9">
          <p className="text-gray-200 text-2xl sm:text-[26px] font-normal font-sans leading-relaxed sm:leading-9 max-w-3xl">
            I’m a CSE student with a focus on cybersecurity and ethical hacking. My journey connects structured training with hands-on project work.
          </p>

          <div className="w-full flex flex-col md:flex-row items-start gap-8 md:gap-10 pt-2">
            {/* Academic Foundation */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-neutral-400 text-xs font-mono uppercase tracking-wider">
                ACADEMIC FOUNDATION
              </div>
              <div className="text-gray-200 text-base font-normal font-sans leading-6">
                Computer Science &amp; Engineering
              </div>
              <div className="text-lime-300 text-xs font-mono">
                Currently studying
              </div>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="hidden md:block w-px h-20 bg-zinc-800 self-center" />

            {/* Learning Approach */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-neutral-400 text-xs font-mono uppercase tracking-wider">
                LEARNING APPROACH
              </div>
              <div className="text-neutral-400 text-base font-normal font-sans leading-6">
                Build the fundamentals. Explore through projects.<br className="hidden sm:inline" />
                Keep learning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
