import { contact } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function ph(value: string) {
  return value.startsWith("[") && value.endsWith("]") || value.includes("[");
}

type LinkEntry = {
  label: string;
  display: string;
  href: string;
  isEmail?: boolean;
};

export default function Contact() {
  const links: LinkEntry[] = [
    {
      label: "Email",
      display: contact.email,
      href: `mailto:${contact.email}`,
      isEmail: true,
    },
    {
      label: "LinkedIn",
      display: contact.linkedin.replace("https://", ""),
      href: contact.linkedin,
    },
    {
      label: "GitHub",
      display: contact.github.replace("https://", ""),
      href: contact.github,
    },
    {
      label: "TryHackMe",
      display: contact.tryhackme.replace("https://", ""),
      href: contact.tryhackme,
    },
    {
      label: "Hack The Box",
      display: "app.hackthebox.com/profile/…",
      href: contact.hackthebox,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <SectionHeader number="08" title="Contact" />
      <p className="text-sm text-[#6b7280] mb-10 max-w-xl leading-relaxed">
        Available for security internships, part-time roles, and collaborative
        projects.
      </p>
      <ul className="space-y-4" role="list">
        {links.map(({ label, display, href, isEmail }) => {
          const isPlaceholder = ph(display) || ph(href);
          return (
            <li key={label} className="flex items-baseline gap-6 flex-wrap">
              <span className="font-mono text-[10px] text-[#6b7280] uppercase tracking-[0.15em] w-24 shrink-0">
                {label}
              </span>
              {isPlaceholder ? (
                <span className="font-mono text-xs text-[#3a3a3a] italic">
                  {display}
                </span>
              ) : (
                <a
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="font-mono text-xs text-[#f0f0f0] hover:text-[#e8c77d] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e8c77d]"
                  aria-label={`${label}: ${display}`}
                >
                  {display}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
