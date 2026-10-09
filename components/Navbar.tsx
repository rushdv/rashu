"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Credentials", href: "credentials" },
  { label: "Labs", href: "labs" },
  { label: "Projects", href: "projects" },
  { label: "Writeups", href: "writeups" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm tracking-[0.2em] uppercase text-[#f0f0f0] hover:text-[#10b981] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
          aria-label="Scroll to top"
        >
          {personal.name}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-mono text-xs uppercase tracking-[0.15em] text-[#6b7280] hover:text-[#f0f0f0] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-[5px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 border-t border-[#1f1f1f] bg-[#0a0a0a] ${
          menuOpen ? "max-h-80" : "max-h-0 border-t-transparent"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-5 flex flex-col gap-5" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b7280] hover:text-[#f0f0f0] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981] w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
