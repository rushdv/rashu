"use client";

import React from "react";
import { Target, Award, ArrowUpRight } from "lucide-react";

export default function ObjectivesSection() {
  const objectives = [
    {
      code: "C3SA",
      name: "Certified Cyber Security Analyst",
      provider: "Cyber Warfare Labs",
      status: "CERTIFIED ✓",
      isCertified: true,
      focus: "Threat Intelligence, Detection Engineering & Analysis",
      certificateUrl: "/certificates/c3sa-cyberwarfare-labs.pdf",
    },
    {
      code: "CDSA",
      name: "Certified Defensive Security Analyst",
      provider: "Hack The Box",
      status: "EXAM PREPARATION",
      isCertified: false,
      focus: "SOC, SIEM, Incident Response & Threat Hunting",
    },
    {
      code: "CRTA",
      name: "Certified Red Team Analyst",
      provider: "Cyber Warfare Labs",
      status: "EXAM PREPARATION",
      isCertified: false,
      focus: "Active Directory, Privilege Escalation & Lateral Movement",
    },
    {
      code: "BTF",
      name: "Blue Team Fundamentals",
      provider: "Cyber Warfare Labs",
      status: "EXAM PREPARATION",
      isCertified: false,
      focus: "Defensive Operations, Log Forensics & Telemetry",
    },
  ];

  return (
    <section id="objectives" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4">
            <div className="text-lime-300 text-xs font-mono tracking-wider">
              03 / CERTIFICATIONS &amp; OBJECTIVES
            </div>
            <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans">
              Preparing for what’s next.
            </h2>
          </div>
          <p className="max-w-xs text-neutral-400 text-sm font-sans leading-relaxed">
            Active examination tracks and earned credentials validating defensive and offensive capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className={`p-6 bg-neutral-900/60 border rounded-none flex flex-col justify-between gap-6 transition group ${
                obj.isCertified
                  ? "border-lime-300/40 bg-neutral-900 shadow-lg shadow-lime-300/5"
                  : "border-zinc-800 hover:border-zinc-700 hover:bg-neutral-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-3xl sm:text-4xl font-medium font-sans tracking-tight transition ${
                    obj.isCertified ? "text-lime-300" : "text-gray-100 group-hover:text-white"
                  }`}
                >
                  {obj.code}
                </span>
                {obj.isCertified ? (
                  <Award className="size-5 text-lime-300" />
                ) : (
                  <Target className="size-5 text-neutral-500 group-hover:text-lime-300 transition" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-neutral-400 text-xs font-mono">
                    {obj.provider}
                  </div>
                  <div className="text-neutral-300 text-xs font-sans mt-1">
                    {obj.name}
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div
                    className={`px-2.5 py-1.5 border rounded-none inline-flex items-center gap-2 ${
                      obj.isCertified
                        ? "bg-lime-300/10 border-lime-300/30 text-lime-300"
                        : "bg-neutral-800/90 border-zinc-800 text-lime-300"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${
                        obj.isCertified ? "bg-lime-300" : "bg-lime-300 animate-ping"
                      }`}
                    />
                    <span className="text-[10px] font-mono tracking-wider font-semibold">
                      {obj.status}
                    </span>
                  </div>

                  {obj.certificateUrl && (
                    <a
                      href={obj.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-lime-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>PDF</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
