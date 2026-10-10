"use client";

import React from "react";
import { GraduationCap, Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Tag */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <div className="text-lime-300 text-xs font-mono tracking-wider">
            01 / ABOUT
          </div>
          <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans leading-tight">
            A foundation.<br />
            A direction.
          </h2>
        </div>

        {/* Right Column: Narrative & Focus Cards */}
        <div className="lg:col-span-8 flex flex-col items-start gap-8">
          <p className="text-gray-200 text-xl sm:text-2xl font-normal font-sans leading-relaxed">
            I’m a CSE student with a focus on cybersecurity and ethical hacking. My journey connects structured training with hands-on project work.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Card 1: Academic Foundation */}
            <div className="p-6 bg-neutral-900/60 border border-zinc-800 rounded-none flex flex-col gap-3">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
                <GraduationCap className="size-4 text-lime-300" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <div className="text-gray-200 text-lg font-medium font-sans">
                Computer Science & Engineering
              </div>
              <div className="text-lime-300 text-xs font-mono">
                Currently studying
              </div>
            </div>

            {/* Card 2: Learning Approach */}
            <div className="p-6 bg-neutral-900/60 border border-zinc-800 rounded-none flex flex-col gap-3">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
                <Compass className="size-4 text-lime-300" />
                <span>LEARNING APPROACH</span>
              </div>
              <p className="text-neutral-300 text-sm font-sans leading-relaxed">
                Build the fundamentals. Explore through projects. Keep learning.
              </p>
              <div className="text-neutral-500 text-xs font-mono">
                Hands-on practice & lab exploration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
