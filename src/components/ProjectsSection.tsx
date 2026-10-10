"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Binary, Network, KeyRound } from "lucide-react";
import { ProjectData } from "./ProjectModal";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "malware-analysis-lab",
    category: "MALWARE ANALYSIS",
    title: "Malware Analysis Lab",
    subtitle: "A lab project centered on the study and analysis of malware.",
    description: "An isolated sandbox and static analysis pipeline designed to dissect suspicious binaries, extract IOCs, and examine PE header structure.",
    overview: "This project established an isolated static analysis environment using Ghidra, PE Studio, and Detect-It-Easy. It enables safe unpacking, entropy calculation, hashing, string extraction, and import address table (IAT) inspection to identify malicious capabilities without running code unsafely.",
    tools: ["Ghidra", "PE Studio", "Detect-It-Easy", "Python", "Volatility", "Linux VM"],
    keyFeatures: [
      "PE Header parsing and compile timestamp analysis",
      "Entropy visualization to identify packed or encrypted payloads",
      "Detection of suspicious API calls (e.g., VirtualAlloc, WriteProcessMemory)",
      "Automated extraction of network indicators (IPs, domains, hashes)",
    ],
    githubUrl: "https://github.com/rushdv/malware-analysis-lab",
    image: "/projects/malware-analysis-lab.png",
  },
  {
    id: "netscope-live",
    category: "NETWORK EXPLORATION",
    title: "NetScope-Live",
    subtitle: "A project exploring networks through a live-view perspective.",
    description: "A real-time packet capturing and traffic inspection tool built to visualize network flows, flag unencrypted credentials, and analyze protocol anomalies.",
    overview: "NetScope-Live monitors local network traffic in real-time, breaking down TCP/UDP conversations, identifying port scans, and surfacing suspicious beaconing behavior. It provides clear telemetry on active endpoints and protocol distributions.",
    tools: ["Python", "Scapy", "Wireshark", "Tcpdump", "Netcat", "Bash"],
    keyFeatures: [
      "Live packet parsing across ARP, DNS, HTTP, and ICMP protocols",
      "Heuristic detection for port scanning and ARP spoofing attempts",
      "Session reconstruction for inspecting payload signatures",
      "Exportable PCAP logs and structured JSON telemetry",
    ],
    githubUrl: "https://github.com/rushdv/NetScope-Live",
    image: "/projects/netscope-live.png",
  },
  {
    id: "encrypted-password-manager",
    category: "PASSWORD SECURITY",
    title: "Encrypted Password Manager",
    subtitle: "A project focused on password management and encryption concepts.",
    description: "A secure credential storage vault implementing AES-256-GCM encryption, Argon2id key derivation, and entropy enforcement.",
    overview: "Designed to explore cryptographic primitives and defense against brute-force attacks, this tool manages credentials using zero-knowledge client encryption, master password key stretching, and secure memory erasure practices.",
    tools: ["Python", "Cryptography", "Argon2", "AES-256-GCM", "SQLite"],
    keyFeatures: [
      "Authenticated encryption using AES-256 in GCM mode",
      "Key derivation hardened via Argon2id with salt generation",
      "Clipboard auto-clearing and protection against memory dumping",
      "Password entropy scoring and breach risk indicators",
    ],
    githubUrl: "https://github.com/rushdv/encrypted-password-manager",
    image: "/projects/encrypted-password-manager.png",
  },
];

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full border-b border-zinc-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-24 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4">
            <div className="text-lime-300 text-xs font-mono tracking-wider">
              05 / SELECTED WORK
            </div>
            <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans">
              Learning, made tangible.
            </h2>
          </div>
          <p className="max-w-xs text-neutral-400 text-sm font-sans leading-relaxed">
            Three completed projects exploring different sides of cybersecurity.
          </p>
        </div>

        {/* 3 Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => {
            const Icons = [Binary, Network, KeyRound];
            const CardIcon = Icons[idx % Icons.length];

            return (
              <div
                key={project.id}
                className="bg-neutral-900 border border-zinc-800 rounded-none flex flex-col justify-between overflow-hidden group hover:border-lime-300/40 transition"
              >
                {/* Visual Header / Graphic Preview */}
                <div className="relative h-56 bg-neutral-950 overflow-hidden border-b border-zinc-800">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                      {/* Subtle Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-neutral-950/70 pointer-events-none" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                  )}

                  {/* Header Badge & Icon */}
                  <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 bg-neutral-950/85 backdrop-blur-md border border-zinc-800/80 text-neutral-300 text-[10px] font-mono tracking-wider flex items-center gap-1.5 shadow-sm">
                      <span className="size-1.5 bg-lime-400 rounded-full animate-pulse" />
                      COMPLETED PROJECT
                    </span>
                    <div className="p-1.5 bg-neutral-950/85 backdrop-blur-md border border-zinc-800/80 text-lime-300">
                      <CardIcon className="size-4 opacity-90" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                  <div className="space-y-3">
                    <div className="text-lime-300 text-xs font-mono tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-gray-100 text-2xl font-medium font-sans leading-snug group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-zinc-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-2 text-gray-200 group-hover:text-lime-300 transition text-xs font-medium font-sans"
                    >
                      <span>View project</span>
                      <div className="size-5 flex items-center justify-center rounded-none border border-zinc-800 group-hover:border-lime-300 transition">
                        <ArrowUpRight className="size-3 text-lime-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="View GitHub Repository"
                        className="px-2.5 py-1 text-neutral-400 hover:text-lime-300 border border-zinc-800 hover:border-lime-300/60 bg-neutral-950 transition flex items-center gap-1.5 text-[11px] font-mono"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
