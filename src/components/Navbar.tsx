"use client";

import React, { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCv: () => void;
}

export default function Navbar({ onOpenCv }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-zinc-800 transition-colors">
      <div className="max-w-[1440px] mx-auto h-20 md:h-24 px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-lime-300 text-2xl font-semibold font-mono tracking-tighter group-hover:text-lime-400 transition">
            r_
          </span>
          <span className="text-gray-200 text-xl font-semibold font-sans tracking-tight">
            rashu
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#about"
            className="text-neutral-400 hover:text-gray-200 text-xs font-medium font-sans transition"
          >
            About
          </a>
          <a
            href="#training"
            className="text-neutral-400 hover:text-gray-200 text-xs font-medium font-sans transition"
          >
            Training
          </a>
          <a
            href="#objectives"
            className="text-neutral-400 hover:text-gray-200 text-xs font-medium font-sans transition"
          >
            Objectives
          </a>
          <a
            href="#skills"
            className="text-neutral-400 hover:text-gray-200 text-xs font-medium font-sans transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-neutral-400 hover:text-gray-200 text-xs font-medium font-sans transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="h-11 px-5 border border-zinc-800 hover:border-zinc-700 bg-neutral-950/50 hover:bg-neutral-900 rounded-none flex items-center gap-3 transition group"
          >
            <span className="text-gray-200 text-xs font-semibold font-sans">
              Let’s connect
            </span>
            <ArrowUpRight className="size-3.5 text-lime-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>

        {/* Right Action (Download CV) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCv}
            className="h-11 px-5 border border-zinc-800 hover:border-lime-300/60 bg-neutral-950/50 hover:bg-neutral-900 rounded-none flex items-center gap-3 transition group"
          >
            <span className="text-gray-200 text-xs font-semibold font-sans">
              Download CV
            </span>
            <Download className="size-3.5 text-lime-300 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenCv}
            className="sm:hidden p-2 text-lime-300 border border-zinc-800 rounded-none"
            aria-label="Download CV"
          >
            <Download className="size-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-gray-200 border border-zinc-800 rounded-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3 font-sans text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              01 / About
            </a>
            <a
              href="#training"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              02 / Training
            </a>
            <a
              href="#objectives"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              03 / Next Learning Objectives
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              04 / Tools & Security Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              05 / Selected Work
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-300 transition py-1"
            >
              06 / Contact
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-2.5 bg-neutral-950 border border-zinc-800 text-xs font-semibold text-gray-200 rounded-none flex items-center justify-center gap-2"
            >
              <Download className="size-3.5 text-lime-300" />
              Download CV
            </button>

            <div className="pt-2 flex items-center justify-center gap-5 text-xs font-mono text-neutral-400">
              <a
                href="https://github.com/rushdv"
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime-300 transition"
              >
                GitHub ↗
              </a>
              <span className="text-zinc-800">/</span>
              <a
                href="https://www.linkedin.com/in/rushdv/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime-300 transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
