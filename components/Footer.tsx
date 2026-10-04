import { personal, contact } from "@/data/portfolio";

function ph(value: string) {
  return value.includes("[");
}

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      isEmail: true,
    },
  ];

  return (
    <footer className="border-t border-[#1f1f1f] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Identity */}
        <div>
          <p className="font-mono text-sm text-[#f0f0f0] tracking-[0.1em]">
            {personal.name}
          </p>
          <p className="font-mono text-xs text-[#6b7280] mt-1">
            Cybersecurity · CSE Student
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6" role="list">
            {links.map(({ label, href, isEmail }) => (
              <li key={label}>
                {ph(href) ? (
                  <span className="font-mono text-xs text-[#3a3a3a] italic">
                    {label}
                  </span>
                ) : (
                  <a
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="font-mono text-xs text-[#6b7280] hover:text-[#f0f0f0] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
                    aria-label={label}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Year */}
        <p className="font-mono text-xs text-[#3a3a3a]">© {year}</p>
      </div>
    </footer>
  );
}
