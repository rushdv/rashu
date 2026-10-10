"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-start items-start border-b border-zinc-800">
      {/* Hero Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

        {/* Right Column: High-tech Telemetry HUD Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[460px] aspect-square p-6 bg-neutral-900/90 border border-zinc-800 rounded-lg flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur group">
            {/* Ambient Background Grid & Radar Visual */}
            <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
            
            {/* Radar Circular Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="size-64 rounded-full border border-zinc-800/80" />
              <div className="size-44 rounded-full border border-dashed border-zinc-700/60" />
              <div className="size-24 rounded-full border border-lime-300/20" />
              <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-lime-300/5 to-transparent animate-spin [animation-duration:10s]" />
            </div>

            {/* Top Bar of the Card */}
            <div className="relative z-10 w-full flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lime-300 animate-ping" />
                <span className="text-neutral-300 text-xs font-mono tracking-wider">
                  SYSTEMS / UNDER STUDY
                </span>
              </div>
              <ShieldCheck className="size-4 text-lime-300" />
            </div>

            {/* Center Interactive Telemetry Feed */}
            <div className="relative z-10 my-auto space-y-3 font-mono text-xs">
              <div className="p-3 bg-neutral-950/80 border border-zinc-800 rounded-sm space-y-1.5 text-neutral-400">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-lime-300 flex items-center gap-1.5">
                    <Activity className="size-3 text-lime-300" /> RECON_FEED
                  </span>
                  <span className="text-neutral-500">PORT 80/443: OPEN</span>
                </div>
                <div className="text-[10px] text-neutral-400 space-y-0.5 font-mono">
                  <p className="truncate"><span className="text-neutral-500">&gt;</span> NMAP: scan report for lab.mesh</p>
                  <p className="truncate"><span className="text-neutral-500">&gt;</span> WIRESHARK: captures active stream [pcap]</p>
                  <p className="truncate"><span className="text-neutral-500">&gt;</span> SIEM: index alert count: 0</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 bg-neutral-950/80 border border-zinc-800 rounded-sm">
                  <span className="text-neutral-500 block">HOST OS</span>
                  <span className="text-gray-200">Linux / Arch / Kali</span>
                </div>
                <div className="p-2 bg-neutral-950/80 border border-zinc-800 rounded-sm">
                  <span className="text-neutral-500 block">STATUS</span>
                  <span className="text-lime-300 font-semibold">Active Lab Mode</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar of the Card */}
            <div className="relative z-10 pt-4 border-t border-zinc-800/80 space-y-1 font-mono">
              <div className="text-lime-300 text-xs font-medium tracking-wider">
                OBSERVE. UNDERSTAND. PROTECT.
              </div>
              <div className="text-neutral-400 text-[11px]">
                A learning mindset, layer by layer.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker / Sub-hero Bar */}
      <div className="w-full border-t border-zinc-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-lime-300 font-bold">&gt;</span>
            <span>PERSONAL PORTFOLIO / CYBERSECURITY</span>
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
