// ============================================================
// data/portfolio.ts
// Central source of truth for all portfolio content.
// Update this file to modify any section of the website.
// ============================================================

export const personal = {
  name: "Rashu",
  title: "Junior Penetration Tester & Security Analyst",
  tagline:
    "Computer Science student focused on penetration testing, security analysis, and practical security research.",
  meta: "CSE Student · Penetration Testing · Security Analysis",
  education: {
    degree: "BSc in Computer Science & Engineering",
  },
};

export const about = [
  "I'm a Computer Science & Engineering student with a focused interest in offensive and defensive security. My work centres on penetration testing techniques, SOC workflows, and malware analysis — areas I develop through structured lab practice rather than simulated exercises.",
  "Most of my learning happens hands-on: working through machines and challenges on Hack The Box, completing structured paths on TryHackMe, and building analysis tooling independently. I prefer evidence-based learning over passive study.",
  "I'm currently developing practical skills across web application security, network enumeration, incident handling, and malware analysis. My goal is to build a consistent, documented body of work that reflects genuine technical progress.",
];

// ─── Credentials ────────────────────────────────────────────

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  description: string;
  credentialUrl: string; // replace [CREDENTIAL_URL] with actual URL when available
  credentialId?: string; // replace [CREDENTIAL_ID] with actual ID when available
};

export const certifications: Certification[] = [
  {
    name: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarFare Labs",
    year: "[YEAR]",
    description:
      "Practical red team assessment certification covering Active Directory enumeration, lateral movement, and post-exploitation techniques in lab environments.",
    credentialUrl: "[CREDENTIAL_URL]",
    credentialId: "[CREDENTIAL_ID]",
  },
  {
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    year: "[YEAR]",
    description:
      "Certification validating skills in SOC operations, incident handling, log analysis, and SIEM-based detection workflows.",
    credentialUrl: "[CREDENTIAL_URL]",
    credentialId: "[CREDENTIAL_ID]",
  },
];

export type Course = {
  name: string;
  year?: string;
  note?: string;
};

export const courses: Course[] = [
  {
    name: "Ethical Hacking for Professionals",
    year: "[YEAR]",
    note: "Structured training covering penetration testing methodology, enumeration, and exploitation techniques.",
  },
  {
    name: "Cybersecurity Fundamentals",
    year: "[YEAR]",
    note: "Foundational cybersecurity concepts including networking, security principles, and threat modelling. Contributed to course coordination activities.",
  },
  {
    name: "[AWS SECURITY COURSE NAME — TO BE PROVIDED]",
    year: "[YEAR]",
    note: "Cloud security training covering AWS security services and configurations. Update with exact course name.",
  },
];

// ─── Security Labs ───────────────────────────────────────────

export type LabStat = {
  label: string;
  value: string;
};

export type Lab = {
  platform: string;
  profileUrl: string;
  stats: LabStat[];
  note?: string;
};

export const labs: Lab[] = [
  {
    platform: "Hack The Box",
    profileUrl: "https://app.hackthebox.com/profile/[HTB_USERNAME]",
    stats: [
      { label: "Rank", value: "[RANK]" },
      { label: "Machines Rooted", value: "[COUNT]" },
      { label: "Challenges Completed", value: "[COUNT]" },
    ],
    note: "Primary practice platform for network enumeration, privilege escalation, and Active Directory attack paths.",
  },
  {
    platform: "TryHackMe",
    profileUrl: "https://tryhackme.com/p/[THM_USERNAME]",
    stats: [
      { label: "Rank", value: "[RANK]" },
      { label: "Rooms Completed", value: "[COUNT]" },
    ],
    note: "Structured learning paths covering SOC fundamentals, web application security, and Linux security.",
  },
  {
    platform: "CyberWarFare Labs",
    profileUrl: "https://cyberwarfare.live/[USERNAME]",
    stats: [{ label: "Labs Completed", value: "[COUNT]" }],
    note: "Red team lab environment used for CRTA preparation and Active Directory attack simulation.",
  },
];

// ─── Projects ────────────────────────────────────────────────

export type Project = {
  name: string;
  description: string;
  domain: string;
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  status: "Completed" | "In Progress" | "Planned";
};

export const projects: Project[] = [
  {
    name: "Malware Analysis Lab",
    description:
      "A local malware analysis environment with tooling for static analysis of PE binaries. Covers PE header parsing, section entropy analysis, imported API inspection, hash verification, and IOC extraction. Designed to support systematic triage of unknown samples.",
    domain: "Malware Analysis",
    tools: ["Python", "PE Studio", "Ghidra", "CyberChef", "Detect-It-Easy"],
    githubUrl: "https://github.com/rushdv/malware-analysis-lab",
    status: "In Progress",
  },
  {
    name: "Security Reconnaissance Toolkit",
    description:
      "[PROJECT DESCRIPTION — describe the scanning or reconnaissance functionality. Include tools integrated, scope, and intended use case.]",
    domain: "Reconnaissance & Enumeration",
    tools: ["Python", "Nmap", "Amass", "[ADD TOOLS]"],
    githubUrl: "[GITHUB_URL]",
    status: "Planned",
  },
  {
    name: "[PROJECT NAME]",
    description:
      "[PROJECT DESCRIPTION — describe the project scope, security domain, and what was built or investigated.]",
    domain: "[SECURITY DOMAIN]",
    tools: ["[TOOL]", "[TOOL]"],
    githubUrl: "[GITHUB_URL]",
    status: "Planned",
  },
];

// ─── Writeups ────────────────────────────────────────────────

export type Writeup = {
  title: string;
  platform: string;
  date: string;
  category: string;
  tags: string[];
  url: string;
};

export const writeups: Writeup[] = [
  {
    title: "Web Authentication Lab",
    platform: "PortSwigger Web Security Academy",
    date: "[DATE]",
    category: "Web Security",
    tags: ["Authentication", "Web Security", "Session Management"],
    url: "[WRITEUP_URL]",
  },
  {
    title: "[MACHINE / CHALLENGE NAME]",
    platform: "Hack The Box",
    date: "[DATE]",
    category: "Network Penetration Testing",
    tags: ["Enumeration", "Privilege Escalation", "[TAG]"],
    url: "[WRITEUP_URL]",
  },
  {
    title: "[ROOM / PATH NAME]",
    platform: "TryHackMe",
    date: "[DATE]",
    category: "SOC / Blue Team",
    tags: ["Incident Response", "Log Analysis", "[TAG]"],
    url: "[WRITEUP_URL]",
  },
];

// ─── Skills ─────────────────────────────────────────────────

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Reconnaissance & Enumeration",
    items: ["Nmap", "Amass", "Assetfinder", "HTTP probing", "Gobuster", "FFUF"],
  },
  {
    category: "Web Application Security",
    items: [
      "Burp Suite",
      "OWASP Top 10",
      "PortSwigger Web Security Academy",
      "OWASP Juice Shop",
      "OWASP WebGoat",
    ],
  },
  {
    category: "Network & Infrastructure",
    items: [
      "Wireshark",
      "Nmap",
      "SMB enumeration",
      "SSH enumeration",
      "Network traffic analysis",
    ],
  },
  {
    category: "Defensive Security / SOC",
    items: [
      "Incident handling",
      "Windows security",
      "SIEM concepts",
      "Log analysis",
      "MITRE ATT&CK",
      "Cyber Kill Chain",
    ],
  },
  {
    category: "Malware Analysis",
    items: [
      "PE analysis",
      "Static analysis",
      "IOC extraction",
      "Entropy analysis",
      "Python-based analysis tooling",
    ],
  },
  {
    category: "Scripting & Automation",
    items: ["Python", "Bash", "Linux shell scripting"],
  },
];

// ─── Current Focus ───────────────────────────────────────────

export const currentFocus = [
  "Penetration Testing",
  "Web Application Security",
  "SOC / Defensive Security",
  "Malware Analysis",
  "Linux Security",
  "Security Automation",
];

// ─── Contact ─────────────────────────────────────────────────

export const contact = {
  email: "[EMAIL@EXAMPLE.COM]",
  linkedin: "https://linkedin.com/in/[USERNAME]",
  github: "https://github.com/rushdv",
  tryhackme: "https://tryhackme.com/p/[THM_USERNAME]",
  hackthebox: "https://app.hackthebox.com/profile/[HTB_USERNAME]",
};
