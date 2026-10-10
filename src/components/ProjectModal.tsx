"use client";

import Image from "next/image";
import { X, ExternalLink, Terminal, Shield, CheckCircle2 } from "lucide-react";

export interface ProjectData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  tools: string[];
  keyFeatures: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-zinc-800 rounded-none p-6 md:p-8 shadow-2xl text-gray-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium text-lime-300 bg-neutral-950 border border-zinc-800 px-2.5 py-1 rounded-none">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 bg-zinc-900 px-2 py-0.5 rounded-none">
                COMPLETED PROJECT
              </span>
            </div>
            <h2 className="text-2xl font-bold font-sans text-gray-100">{project.title}</h2>
            <p className="text-xs font-mono text-neutral-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-gray-200 hover:bg-neutral-800 rounded-none transition"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="py-6 space-y-6">
          {project.image && (
            <div className="relative w-full h-52 sm:h-64 bg-neutral-950 border border-zinc-800 overflow-hidden rounded-none">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          )}
          <div>
            <h3 className="text-xs font-mono text-lime-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Shield className="size-3.5" /> Project Overview
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono text-lime-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Terminal className="size-3.5" /> Key Architecture & Methodology
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                  <CheckCircle2 className="size-4 text-lime-300 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono text-lime-300 uppercase tracking-wider mb-2">
              Tools & Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 bg-neutral-950 border border-zinc-800 rounded-none text-neutral-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-neutral-950 border border-zinc-800 hover:border-lime-300/50 text-xs font-medium text-gray-200 rounded-none transition flex items-center gap-2"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-neutral-950 border border-zinc-800 hover:border-lime-300/50 text-xs font-medium text-gray-200 rounded-none transition flex items-center gap-2"
              >
                <ExternalLink className="size-3.5" />
                Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-lime-300 hover:bg-lime-400 text-neutral-950 text-xs font-semibold rounded-none transition"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
