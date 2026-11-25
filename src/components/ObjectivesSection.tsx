"use client";

import React from "react";
import { Target } from "lucide-react";

export default function ObjectivesSection() {
  const upcomingRoadmap = [
    {
      code: "CDSA",
      name: "Certified Defensive Security Analyst",
      provider: "Hack The Box",
      status: "IN PREPARATION",
      domain: "Defensive Operations",
      focus: "SOC telemetry, SIEM monitoring, log triage, incident response, and threat hunting.",
    },
    {
      code: "CRTA",
      name: "Certified Red Team Analyst",
      provider: "Cyber Warfare Labs",
      status: "IN PREPARATION",
      domain: "Offensive Operations",
      focus: "Active Directory security, lateral movement, privilege escalation, and internal infrastructure testing.",
    },
  ];

  return (
    <section id="objectives" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4">
            <span className="text-lime-300 text-xs font-mono tracking-widest uppercase">
              Roadmap
            </span>
            <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans">
              Certification Roadmap
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm font-sans leading-relaxed">
            Active examination tracks currently in preparation to deepen technical offensive and defensive capabilities.
          </p>
        </div>

        {/* 2-Card Clean Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingRoadmap.map((target, idx) => (
            <div
              key={idx}
              className="p-8 bg-neutral-900 border border-zinc-800 rounded-none flex flex-col justify-between gap-8 hover:border-zinc-700 transition group"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-4xl sm:text-5xl font-medium font-sans tracking-tight text-gray-100 group-hover:text-white transition">
                    {target.code}
                  </span>
                  <div className="text-xs font-mono text-neutral-400">
                    {target.provider}
                  </div>
                </div>

                <div className="px-3 py-1 bg-neutral-950 border border-zinc-800 rounded-none inline-flex items-center gap-2">
                  <Target className="size-3.5 text-lime-300" />
                  <span className="text-[10px] font-mono tracking-wider text-lime-300 font-semibold">
                    {target.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-200 text-base font-medium font-sans">
                    {target.name}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {target.domain}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                  {target.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
