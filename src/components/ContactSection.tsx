"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Copy, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shihab.zn4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-neutral-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start gap-7">
          <div className="text-lime-300 text-xs font-mono tracking-wider">
            06 / CONTACT
          </div>
          <h2 className="text-gray-100 text-4xl sm:text-6xl font-medium font-sans leading-tight">
            Good conversations<br />
            start with hello.
          </h2>
          <p className="max-w-md text-neutral-400 text-base font-sans leading-relaxed">
            Have a question about a project, want to discuss threat intelligence, or collaborate on security challenges? Let’s connect.
          </p>

          <div className="pt-4 flex items-center gap-3">
            <span className="text-lime-300 text-base font-mono">&gt;_</span>
            <span className="text-neutral-400 text-xs font-mono">
              Always learning. One conversation at a time.
            </span>
          </div>

          {/* Quick Direct Channel Box */}
          <div className="p-4 bg-neutral-950 border border-zinc-800 rounded-none w-full max-w-sm mt-2 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                DIRECT SECURE CHANNEL
              </span>
              <span className="text-xs font-mono text-gray-200">
                shihab.zn4@gmail.com
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 text-neutral-400 hover:text-lime-300 hover:bg-neutral-900 rounded-none transition"
              title="Copy email to clipboard"
            >
              {copied ? (
                <Check className="size-4 text-lime-300" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 w-full">
          {status === "sent" ? (
            <div className="p-8 bg-neutral-950 border border-lime-300/40 rounded-none space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-lime-300 font-mono text-xs uppercase">
                <CheckCircle2 className="size-5" />
                <span>PACKET TRANSMITTED</span>
              </div>
              <h3 className="text-xl font-sans font-semibold text-gray-100">
                Thank you for reaching out!
              </h3>
              <p className="text-sm font-sans text-neutral-400 leading-relaxed">
                Your message has been safely received. I will check my inbox and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-neutral-400 text-xs font-mono block">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full h-12 px-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-neutral-400 text-xs font-mono block">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email address"
                    className="w-full h-12 px-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-neutral-400 text-xs font-mono block">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What would you like to talk about?"
                  className="w-full p-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans resize-none"
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="text-neutral-500 text-[10px] font-mono tracking-wider">
                  LET’S START A CONVERSATION
                </span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-12 px-6 bg-lime-300 hover:bg-lime-400 text-neutral-950 font-semibold text-sm rounded-none flex items-center justify-center gap-3 transition shadow-lg shadow-lime-300/10 group disabled:opacity-70"
                >
                  <span>{status === "sending" ? "Transmitting..." : "Send message"}</span>
                  <Send className="size-4 text-neutral-900 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
