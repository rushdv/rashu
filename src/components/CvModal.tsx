"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumePdfPath = "/docs/Md-Shihab-Shahriar-Rashu-Cybersecurity-Resume.pdf";
  const resumeDownloadName = "Md-Shihab-Shahriar-Rashu-Cybersecurity-Resume.pdf";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] bg-neutral-900 border border-zinc-800 rounded-none flex flex-col shadow-2xl overflow-hidden text-gray-200"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-950 border-b border-zinc-800 gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-8 bg-neutral-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <FileText className="size-4 text-lime-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-semibold font-sans text-gray-100 truncate">
                  Md. Shihab Shahriar Rashu — Curriculum Vitae
                </h2>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-lime-300 shrink-0">
                  PDF PREVIEW
                </span>
              </div>
              <p className="text-[11px] font-mono text-neutral-400 truncate">
                Official Resume · 2 Pages · Updated Oct 2026
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-zinc-800 text-gray-200 text-xs font-mono rounded-none transition flex items-center gap-1.5"
              title="Open PDF in a new browser tab"
            >
              <ExternalLink className="size-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href={resumePdfPath}
              download={resumeDownloadName}
              className="px-3.5 py-1.5 bg-lime-300 hover:bg-lime-400 text-neutral-950 text-xs font-semibold rounded-none transition flex items-center gap-1.5 shadow-sm"
              title="Download official PDF file"
            >
              <Download className="size-3.5" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-gray-100 hover:bg-neutral-800 rounded-none transition"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Body */}
        <div className="flex-1 w-full bg-neutral-950 relative overflow-hidden flex flex-col">
          <object
            data={`${resumePdfPath}#toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full border-0 bg-neutral-950"
          >
            {/* Fallback for environments where inline PDF rendering is restricted */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="size-16 rounded-full bg-neutral-900 border border-zinc-800 flex items-center justify-center">
                <FileText className="size-8 text-lime-300" />
              </div>
              <div className="space-y-1 max-w-md">
                <h3 className="text-lg font-semibold text-gray-100">
                  Official Cybersecurity Resume (PDF)
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  Your browser or device does not support inline PDF viewing. You can open or download the document below.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-neutral-900 border border-zinc-800 hover:border-lime-300/40 text-xs font-mono text-gray-200 transition flex items-center gap-2"
                >
                  <ExternalLink className="size-3.5" />
                  Open in New Tab
                </a>
                <a
                  href={resumePdfPath}
                  download={resumeDownloadName}
                  className="px-4 py-2 bg-lime-300 hover:bg-lime-400 text-neutral-950 text-xs font-semibold transition flex items-center gap-2"
                >
                  <Download className="size-3.5" />
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-950 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-neutral-400 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="truncate">{resumeDownloadName}</span>
          </div>
          <span className="shrink-0 text-neutral-500">Press ESC or click backdrop to close</span>
        </div>
      </div>
    </div>
  );
}
