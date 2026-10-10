"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-start items-start border-b border-zinc-800">
      {/* Hero Main Content */}
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-7">
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-neutral-400 text-xl sm:text-2xl font-sans">
              I’m Rashu.
            </h2>
            <h1 className="text-gray-100 text-4xl sm:text-6xl lg:text-7xl font-semibold font-sans tracking-tight leading-[1.1] sm:leading-[1.15]">
              Learning to<br />
              <span className="text-gray-100">think securely.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-xl text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
            Studying computer science. Exploring cybersecurity. Building practical projects while developing a deeper understanding of how systems can be protected.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="h-12 px-5 bg-lime-300 hover:bg-lime-400 text-neutral-900 text-sm font-semibold font-sans rounded-none border border-lime-300 flex items-center gap-3 transition shadow-lg shadow-lime-300/10 group"
            >
              <span>Explore my projects</span>
              <ArrowUpRight className="size-4 text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#training"
              className="h-12 px-5 bg-neutral-950 hover:bg-neutral-900 text-gray-200 text-sm font-semibold font-sans rounded-none border border-zinc-800 hover:border-zinc-700 flex items-center gap-3 transition group"
            >
              <span>My learning journey</span>
              <ArrowDown className="size-4 text-lime-300 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Cybersecurity Visual Focus (No Card, No Borders, Seamlessly Blended) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] lg:max-w-[560px] aspect-square flex items-center justify-center">
            {/* Glowing Cyber Shield */}
            <div
              className="relative w-full h-full"
              style={{
                maskImage: "radial-gradient(circle at center, black 55%, transparent 92%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 55%, transparent 92%)",
              }}
            >
              <Image
                src="/hero-cyber-shield-v2.png"
                alt="Cybersecurity Shield"
                fill
                priority
                unoptimized
                className="object-contain object-center scale-105 sm:scale-110 select-none pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker / Sub-hero Bar */}
      <div className="w-full border-t border-zinc-800 bg-neutral-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between text-xs font-mono text-neutral-400">
          <div>
            PERSONAL PORTFOLIO / CYBERSECURITY
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 text-neutral-400 hover:text-lime-300 transition group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="size-3.5 text-lime-300 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
