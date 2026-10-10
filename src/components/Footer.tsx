"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-neutral-950 border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-4">
          <span className="text-gray-200 text-xl font-semibold font-sans tracking-tight">
            rashu
          </span>
          <span className="text-neutral-500 text-[10px] font-mono tracking-wider">
            CSE STUDENT / CYBERSECURITY PORTFOLIO
          </span>
        </div>

        {/* Back To Top Action */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-neutral-400 hover:text-lime-300 transition group text-xs font-mono"
        >
          <span>BACK TO TOP</span>
          <div className="size-6 rounded-none border border-zinc-800 group-hover:border-lime-300 flex items-center justify-center transition">
            <ArrowUp className="size-3 text-lime-300 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
