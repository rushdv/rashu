"use client";

import React from "react";
import { Radar, Globe, Network, Shield, Binary, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Reconnaissance & Enumeration",
      icon: Radar,
      count: "7 ITEMS",
      skills: [
        "Nmap",
        "Amass",
        "Assetfinder",
        "Gobuster",
        "FFUF",
        "HTTP Probing",
        "Subdomain Enumeration",
      ],
    },
    {
      title: "Web Application Security",
      icon: Globe,
      count: "6 ITEMS",
      skills: [
        "Burp Suite",
        "OWASP Top 10",
        "PortSwigger Web Security Academy",
        "OWASP Juice Shop",
        "Session Management",
        "API Security",
      ],
    },
    {
      title: "Network & Infrastructure",
      icon: Network,
      count: "6 ITEMS",
      skills: [
        "Wireshark",
        "Tcpdump",
        "Netcat",
        "SMB Enumeration",
        "SSH Enumeration",
        "Traffic Analysis",
      ],
    },
    {
      title: "Defensive Security / SOC",
      icon: Shield,
      count: "7 ITEMS",
      skills: [
        "Splunk",
        "SIEM Concepts",
        "Log Analysis",
        "Volatility",
        "Incident Handling",
        "MITRE ATT&CK",
        "Cyber Kill Chain",
      ],
    },
    {
      title: "Malware Analysis",
      icon: Binary,
      count: "7 ITEMS",
      skills: [
        "Ghidra",
        "PE Studio",
        "Detect-It-Easy",
        "PE Header Analysis",
        "Entropy Analysis",
        "IOC Extraction",
        "Static Analysis",
      ],
    },
    {
      title: "Scripting & Automation",
      icon: Terminal,
      count: "3 ITEMS",
      skills: [
        "Python",
        "Bash",
        "Linux Shell Scripting",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full border-b border-zinc-800 bg-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4">
            <div className="text-lime-300 text-xs font-mono tracking-wider">
              04 / TOOLS &amp; SECURITY SKILLS
            </div>
            <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans">
              Tools &amp; Security Skills
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm font-sans leading-relaxed">
            A snapshot of the tools, frameworks, and security concepts currently in use across my learning and project work.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-neutral-950 border border-zinc-800 rounded-none flex flex-col justify-between gap-6 hover:border-zinc-700 transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-lime-300" />
                    <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-none text-neutral-400 text-[10px] font-mono tracking-wider">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="text-gray-200 text-lg font-medium font-sans">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="text-neutral-400 text-xs font-mono flex items-center gap-2 hover:text-gray-200 transition"
                    >
                      <span className="size-1 rounded-full bg-lime-300/60" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
