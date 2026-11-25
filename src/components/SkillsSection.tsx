"use client";

import React from "react";
import { Radar, Globe, Network, Shield, Binary, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Reconnaissance & Enumeration",
      icon: Radar,
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
      title: "Defensive Security & SOC",
      icon: Shield,
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
      title: "Scripting & Systems",
      icon: Terminal,
      skills: [
        "Python",
        "Bash",
        "Linux Shell Scripting",
        "Kali Linux",
        "Docker Basics",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full border-b border-zinc-800 bg-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4">
            <span className="text-lime-300 text-xs font-mono tracking-widest uppercase">
              Tooling
            </span>
            <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans">
              Technical Skills &amp; Stack
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm font-sans leading-relaxed">
            Hands-on tools, frameworks, and practical security domains applied across labs and defensive workflows.
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
                    <div className="size-9 bg-neutral-900 border border-zinc-800 flex items-center justify-center">
                      <Icon className="size-4 text-lime-300" />
                    </div>
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
