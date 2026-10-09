"use client";
// components/HeroTerminal.tsx
// Live "pentest session" terminal for the hero's right side.
// Types commands, prints scan output, roots the (lab) box, then loops.
// Accent: set --accent in globals.css (default #00e5a0).

import { useEffect, useState } from "react";

type Line = { kind: "cmd" | "out"; text: string; tone?: "dim" | "port" | "hit" | "win" };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "nmap -sV -sC 10.10.11.42" },
  { kind: "out", text: "PORT     STATE  SERVICE  VERSION", tone: "dim" },
  { kind: "out", text: "22/tcp   open   ssh      OpenSSH 8.9", tone: "port" },
  { kind: "out", text: "80/tcp   open   http     nginx 1.18", tone: "port" },
  { kind: "out", text: "445/tcp  open   smb      Samba 4.15", tone: "port" },
  { kind: "cmd", text: "ffuf -u http://10.10.11.42/FUZZ -w common.txt" },
  { kind: "out", text: "[+] /admin    [Status: 301]", tone: "hit" },
  { kind: "out", text: "[+] /backup   [Status: 200]", tone: "hit" },
  { kind: "cmd", text: "id" },
  { kind: "out", text: "uid=0(root) gid=0(root)", tone: "win" },
  { kind: "out", text: "[✓] lab machine rooted", tone: "win" },
];

const TONE: Record<string, string> = {
  dim: "text-white/40",
  port: "text-cyan-300",
  hit: "text-amber-300",
  win: "text-[color:var(--accent,#00e5a0)]",
};

export default function HeroTerminal({ className = "w-full max-w-[540px] mx-autoaaah" }: { className?: string }) {
  const [line, setLine] = useState(0); // lines fully shown
  const [chars, setChars] = useState(0); // chars typed on current cmd line

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLine(SCRIPT.length);
      return;
    }
    let t: ReturnType<typeof setTimeout>;
    const step = (l: number, c: number) => {
      if (l >= SCRIPT.length) {
        t = setTimeout(() => { setLine(0); setChars(0); step(0, 0); }, 4500);
        return;
      }
      const cur = SCRIPT[l];
      if (cur.kind === "cmd" && c < cur.text.length) {
        setChars(c + 1);
        t = setTimeout(() => step(l, c + 1), 28 + Math.random() * 40);
      } else {
        t = setTimeout(() => { setLine(l + 1); setChars(0); step(l + 1, 0); }, cur.kind === "cmd" ? 450 : 170);
      }
    };
    step(0, 0);
    return () => clearTimeout(t);
  }, []);

  const typing = line < SCRIPT.length && SCRIPT[line].kind === "cmd";
  const prompt = (
    <span className="text-[color:var(--accent,#00e5a0)]">rashu@kali<span className="text-white/40">:~$ </span></span>
  );

  return (
    <div className={`relative ${className}`} style={{ perspective: 1200 }}>
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle at 60% 40%, var(--accent,#00e5a0), transparent 65%)" }}
      />
      <div
        className="overflow-hidden rounded-xl border border-white/10 bg-[#080d0c]/95 shadow-2xl"
        style={{ transform: "rotateY(-7deg) rotateX(2deg)", boxShadow: "0 0 0 1px rgba(0,229,160,.12), 0 30px 80px -20px rgba(0,0,0,.8)" }}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-white/40">rashu@kali — ~/labs/htb</span>
        </div>

        {/* body */}
        <div
          className="relative px-5 py-4 font-mono text-[13px] leading-6 text-white/85"
          style={{ minHeight: 330 }}
          aria-label="Animated terminal showing a penetration testing session on a lab machine"
        >
          {SCRIPT.slice(0, line).map((l, i) =>
            l.kind === "cmd" ? (
              <div key={i}>{prompt}{l.text}</div>
            ) : (
              <div key={i} className={`whitespace-pre ${TONE[l.tone ?? "dim"]}`}>{l.text}</div>
            )
          )}
          {typing && (
            <div>
              {prompt}
              {SCRIPT[line].text.slice(0, chars)}
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[color:var(--accent,#00e5a0)]" />
            </div>
          )}
          {!typing && (
            <div>
              {prompt}
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[color:var(--accent,#00e5a0)]" />
            </div>
          )}
          {/* faint scanlines */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ background: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)" }}
          />
        </div>
      </div>
    </div>
  );
}
