"use client";

import React from "react";
import {
  X,
  Download,
  Shield,
  BookOpen,
  Terminal,
  Award,
  Users,
  FolderGit2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const resumePdfPath = "/docs/Md-Shihab-Shahriar-Rashu-Cybersecurity-Resume.pdf";
  const resumeDownloadName = "Md-Shihab-Shahriar-Rashu-Cybersecurity-Resume.pdf";

  return (
    <div className="cv-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="cv-modal-card relative w-full max-w-3xl max-h-[92vh] overflow-y-auto overflow-x-hidden bg-neutral-900 border border-zinc-800 rounded-none p-5 sm:p-8 shadow-2xl text-gray-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Controls */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lime-300 font-mono text-xl font-bold">r_</span>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold font-sans">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs text-neutral-400 font-mono">
                Md. Shihab Shahriar Rashu · Cybersecurity Analyst
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-3">
            <a
              href={resumePdfPath}
              download={resumeDownloadName}
              className="px-4 py-2 bg-lime-300 text-neutral-950 font-semibold text-xs rounded-none hover:bg-lime-400 transition flex items-center gap-2 shadow-sm"
              title="Download official PDF resume file"
            >
              <Download className="size-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-gray-100 hover:bg-neutral-800 rounded-none transition"
              aria-label="Close CV modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div id="printable-cv" className="py-6 space-y-7 font-sans">
          {/* Identity Header */}
          <header className="border-b border-zinc-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-100">
              MD. SHIHAB SHAHRIAR RASHU
            </h1>
            <p className="text-sm font-medium text-lime-300 mt-1">
              Cybersecurity Researcher | Ethical Hacking &amp; Security Analysis
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-neutral-400 mt-3 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3 text-neutral-500" />
                Uttara, Dhaka, Bangladesh
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="size-3 text-neutral-500" />
                +8801600350566
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="size-3 text-neutral-500" />
                shihab.zn4@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-2">
              <a
                href="https://github.com/rushdv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-lime-300 underline"
              >
                github.com/rushdv
              </a>
              <span>·</span>
              <span className="text-neutral-400">linkedin.com/in/rushdv</span>
              <span>·</span>
              <span className="text-neutral-400">rashu0x.vercel.app</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-2">
              <Shield className="size-3.5" />
              <span>Professional Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Cybersecurity-focused BSc CSE student with hands-on experience in ethical
              hacking, penetration testing, malware analysis, and security monitoring.
              Practice daily on TryHackMe and Hack The Box, hold the C3SA certification from
              CyberWarfare Labs, and am preparing for HTB CDSA, CRTA, and BTF. Coordinated a
              batch at Hack To Live Academy. Seeking a Cybersecurity Internship or Job to apply
              and grow practical skills.
            </p>
          </section>

          {/* Certifications & Training */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-3">
              <Award className="size-3.5" />
              <span>Certifications &amp; Training</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-neutral-950 border border-lime-300/30 rounded-none flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">
                    Certified Cyber Security Analyst (C3SA)
                  </span>
                  <span className="text-[10px] font-mono text-lime-300 bg-lime-300/10 px-2 py-0.5">
                    CERTIFIED
                  </span>
                </div>
                <p className="font-mono text-neutral-400 text-[11px]">
                  CyberWarfare Labs · Completed Oct 2026
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-lime-300/30 rounded-none flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">
                    Cybersecurity &amp; Ethical Hacking
                  </span>
                  <span className="text-[10px] font-mono text-lime-300 bg-lime-300/10 px-2 py-0.5">
                    CERTIFIED
                  </span>
                </div>
                <p className="font-mono text-neutral-400 text-[11px]">
                  Arena Web Security · Verification: A56W2511S057
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">
                    Cybersecurity Fundamentals
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 bg-zinc-900 px-2 py-0.5">
                    COMPLETED
                  </span>
                </div>
                <p className="font-mono text-neutral-400 text-[11px]">
                  Hack To Live Academy · Batch Coordinator (Jun 2026)
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-200">
                    Ethical Hacking for Professionals (EHP)
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 bg-neutral-800 px-2 py-0.5">
                    IN PROGRESS
                  </span>
                </div>
                <p className="font-mono text-neutral-400 text-[11px]">
                  Byte Capsule · Mar 2026 – Present
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none md:col-span-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-200">
                    In Preparation: CDSA, CRTA, BTF
                  </span>
                  <span className="text-[10px] font-mono text-lime-300 bg-neutral-800 px-2 py-0.5">
                    EXAM TRACKS
                  </span>
                </div>
                <p className="font-mono text-neutral-400 text-[11px]">
                  HTB Certified Defensive Security Analyst (CDSA) · Certified Red Team Analyst
                  (CRTA) · Blue Team Foundations (BTF)
                </p>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-3">
              <FolderGit2 className="size-3.5" />
              <span>Projects</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <a
                    href="https://github.com/rushdv/malware-analysis-lab"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-200 hover:text-lime-300 transition inline-flex items-center gap-1 group"
                  >
                    <span>Malware Analysis Lab</span>
                    <ArrowUpRight className="size-3 text-neutral-400 group-hover:text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-[10px] font-mono text-lime-300">Analysis &amp; Triage</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Isolated lab environment for safely analyzing PE malware samples, inspecting
                  headers, section entropy, API imports, and extracting IOCs.
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <a
                    href="https://github.com/rushdv/NetScope-Live"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-200 hover:text-lime-300 transition inline-flex items-center gap-1 group"
                  >
                    <span>NetScope-Live</span>
                    <ArrowUpRight className="size-3 text-neutral-400 group-hover:text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-[10px] font-mono text-lime-300">Network Telemetry</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Real-time network monitoring and protocol packet analysis tool designed for
                  traffic observation and anomaly identification.
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <a
                    href="https://github.com/rushdv/encrypted-password-manager"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-200 hover:text-lime-300 transition inline-flex items-center gap-1 group"
                  >
                    <span>Encrypted Password Manager</span>
                    <ArrowUpRight className="size-3 text-neutral-400 group-hover:text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-[10px] font-mono text-lime-300">Applied Cryptography</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Secure local credential manager implementing encryption standards for
                  zero-knowledge password vault storage.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-3">
              <Terminal className="size-3.5" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <span className="text-neutral-400 font-mono block mb-1">Offensive Security:</span>
                <p className="text-gray-300 text-[11px]">
                  Ethical Hacking, Penetration Testing, Vulnerability Assessment, OWASP Top 10,
                  PTES / NIST 800-115 awareness
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <span className="text-neutral-400 font-mono block mb-1">Security Tools:</span>
                <p className="text-gray-300 text-[11px]">
                  Nmap, Metasploit, Burp Suite, Wireshark, Hydra, Ghidra, Kali Linux, BlackArch
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <span className="text-neutral-400 font-mono block mb-1">Practice Platforms:</span>
                <p className="text-gray-300 text-[11px]">
                  Hack The Box, TryHackMe, PortSwigger Web Security Academy
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <span className="text-neutral-400 font-mono block mb-1">Languages &amp; Core:</span>
                <p className="text-gray-300 text-[11px]">
                  Python, Bash, JavaScript, TypeScript, C, C++, Linux, Docker, Git
                </p>
              </div>
            </div>
          </section>

          {/* Leadership & Community */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-3">
              <Users className="size-3.5" />
              <span>Leadership &amp; Community</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-200">
                    Coordinator · Hack To Live Academy
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Community Role</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Coordinated and mentored a batch of cybersecurity learners through the
                  foundational security curriculum.
                </p>
              </div>

              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-200">
                    Joint Secretary (Programming) · NUBCC
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Club Leadership</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Northern University Bangladesh Computer Club leadership and programming team
                  coordination.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase tracking-wider mb-3">
              <BookOpen className="size-3.5" />
              <span>Education</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-200">
                    BSc in Computer Science &amp; Engineering
                  </span>
                  <span className="text-[10px] font-mono text-lime-300">Feb 2025 – Present</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Northern University Bangladesh, Dhaka · Focus on cybersecurity, secure coding,
                  networks, and algorithms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-200">HSC (Science)</span>
                    <span className="text-[10px] font-mono text-neutral-400">2021 – 2023</span>
                  </div>
                  <p className="text-neutral-500 text-[11px] mt-0.5">
                    RCCI Public School &amp; College, Rangpur
                  </p>
                </div>

                <div className="p-3 bg-neutral-950 border border-zinc-800 rounded-none">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-200">SSC (Science)</span>
                    <span className="text-[10px] font-mono text-neutral-400">2016 – 2021</span>
                  </div>
                  <p className="text-neutral-500 text-[11px] mt-0.5">
                    Domar ML High School, Nilphamari
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="border-t border-zinc-800 pt-3 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span>Languages: Bangla (Native) · Urdu (Working knowledge) · English (B1)</span>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="no-print pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 min-w-0">
            <span className="size-2 rounded-full bg-lime-300 shrink-0" />
            <span className="truncate">Official Document: Resume.pdf</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={resumePdfPath}
              download={resumeDownloadName}
              className="flex-1 sm:flex-none px-4 py-2 bg-lime-300 text-neutral-950 font-semibold text-xs rounded-none hover:bg-lime-400 transition flex items-center justify-center gap-2"
            >
              <Download className="size-3.5" />
              Download Official Resume PDF
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-zinc-800 text-gray-300 text-xs rounded-none hover:bg-neutral-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
