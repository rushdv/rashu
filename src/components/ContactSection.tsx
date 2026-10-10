"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Copy, Check, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const targetEmail = "shihab.zn4@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form service failed");
      }
    } catch {
      // Graceful fallback to mailto so the sender's message is preserved
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus("sent");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-neutral-900 border-b border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
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
              <a
                href={`mailto:${targetEmail}`}
                className="text-xs font-mono text-gray-200 hover:text-lime-300 transition"
                title="Send email via mail client"
              >
                {targetEmail}
              </a>
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

          {/* Minimal Social Profiles */}
          <div className="flex items-center gap-5 pt-1 text-xs font-mono text-neutral-400">
            <a
              href="https://github.com/rushdv"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-300 transition flex items-center gap-1.5 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="size-3 text-neutral-500 group-hover:text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-zinc-800">/</span>
            <a
              href="https://www.linkedin.com/in/rushdv/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-300 transition flex items-center gap-1.5 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3 text-neutral-500 group-hover:text-lime-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
                Your message has been transmitted to <span className="text-lime-300 font-mono">{targetEmail}</span>. I will check my inbox and get back to you shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 bg-neutral-900 border border-zinc-800 text-xs font-mono text-lime-300 hover:border-lime-300 transition"
                >
                  Send another message
                </button>
              </div>
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
                    disabled={status === "sending"}
                    className="w-full h-12 px-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans disabled:opacity-50"
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
                    disabled={status === "sending"}
                    className="w-full h-12 px-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans disabled:opacity-50"
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
                  disabled={status === "sending"}
                  className="w-full p-4 bg-neutral-950 border border-zinc-800 focus:border-lime-300 rounded-none text-sm text-gray-200 placeholder:text-neutral-600 outline-none transition font-sans resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <a
                  href={`mailto:${targetEmail}?subject=Portfolio%20Inquiry`}
                  className="text-neutral-500 hover:text-lime-300 text-xs font-mono transition inline-flex items-center gap-1"
                >
                  <span>Open directly in email client</span>
                  <ArrowUpRight className="size-3" />
                </a>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-12 px-6 bg-lime-300 hover:bg-lime-400 text-neutral-950 font-semibold text-sm rounded-none flex items-center justify-center gap-3 transition shadow-lg shadow-lime-300/10 group disabled:opacity-70 cursor-pointer"
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
