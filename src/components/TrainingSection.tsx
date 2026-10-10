"use client";

import React from "react";
import { CheckCircle2, Clock, ArrowUpRight, Award } from "lucide-react";

export default function TrainingSection() {
  const trainingItems = [
    {
      title: "Certified Cyber Security Analyst (C3SA)",
      institution: "Cyber Warfare Labs",
      status: "CERTIFIED",
      statusColor: "text-lime-300",
      dotColor: "bg-lime-300",
      bgColor: "bg-neutral-800",
      completed: true,
      hasCert: true,
      certificateUrl: "/certificates/c3sa-cyberwarfare-labs.pdf",
      note: "Earned Credential · Issued Oct 2026",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      institution: "Arena Web Security",
      status: "CERTIFIED",
      statusColor: "text-lime-300",
      dotColor: "bg-lime-300",
      bgColor: "bg-neutral-800",
      completed: true,
      hasCert: true,
      certificateUrl: "/certificates/arena-web-security-certification.pdf",
      note: "Verification ID: A56W2511S057",
    },
    {
      title: "Cybersecurity Fundamentals",
      institution: "Hack To Live Academy",
      status: "COMPLETED",
      statusColor: "text-neutral-400",
      dotColor: "bg-neutral-400",
      bgColor: "bg-zinc-900",
      completed: true,
      hasCert: false,
      note: "Networking & Security Core · Batch Coordination",
    },
    {
      title: "Ethical Hacking for Professionals",
      institution: "ByteCapsule",
      status: "IN PROGRESS",
      statusColor: "text-amber-300",
      dotColor: "bg-amber-300",
      bgColor: "bg-neutral-800",
      completed: false,
      hasCert: false,
      note: "Advanced Penetration Testing & Methodology",
    },
  ];

  return (
    <section id="training" className="w-full border-b border-zinc-800 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6">
          <div className="text-lime-300 text-xs font-mono tracking-wider">
            02 / TRAINING &amp; CREDENTIALS
          </div>
          <h2 className="text-gray-100 text-4xl sm:text-5xl font-medium font-sans leading-tight">
            From fundamentals<br />
            to practice.
          </h2>
          <p className="text-neutral-400 text-base font-sans leading-relaxed">
            Completed coursework, earned certifications, and ongoing professional training shaping my cybersecurity path.
          </p>
        </div>

        {/* Right Column: Training List */}
        <div className="lg:col-span-8 flex flex-col w-full">
          {trainingItems.map((item, index) => (
            <div
              key={index}
              className="py-7 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-neutral-900/80 transition px-2 rounded-none"
            >
              <div className="flex items-start sm:items-center gap-5">
                <div
                  className={`size-10 ${item.bgColor} border border-zinc-800/80 rounded-none flex items-center justify-center shrink-0 mt-1 sm:mt-0`}
                >
                  {item.hasCert ? (
                    <Award className="size-4 text-lime-300" />
                  ) : item.completed ? (
                    <CheckCircle2 className="size-4 text-neutral-400" />
                  ) : (
                    <Clock className="size-4 text-amber-300 animate-spin [animation-duration:8s]" />
                  )}
                </div>
                <div>
                  <h3 className="text-gray-100 text-xl sm:text-2xl font-medium font-sans group-hover:text-white transition">
                    {item.title}
                  </h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1 text-xs font-mono">
                    <span className="text-neutral-400">{item.institution}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-neutral-500">{item.note}</span>
                  </div>

                  {item.certificateUrl && (
                    <div className="mt-2">
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-300 hover:text-lime-400 hover:underline transition"
                      >
                        <span>View Certificate PDF</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`self-start sm:self-auto px-3 py-1.5 ${item.bgColor} border border-zinc-800/60 rounded-none flex items-center gap-2 shrink-0`}
              >
                <span className={`size-1.5 ${item.dotColor} rounded-full`} />
                <span className={`text-[11px] font-mono ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}

          {/* Footnote */}
          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-2">
            <p className="text-neutral-500 text-xs font-mono">
              {"//"} Certificates are cryptographically signed and verifiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
