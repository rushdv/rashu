import { projects, type Project } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function ph(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

const statusConfig: Record<
  Project["status"],
  { label: string; className: string }
> = {
  Completed: {
    label: "Completed",
    className: "text-[#5a9a72] border-[#1a3328]",
  },
  "In Progress": {
    label: "In Progress",
    className: "text-[#e8c77d] border-[#3a3020]",
  },
  Planned: {
    label: "Planned",
    className: "text-[#6b7280] border-[#1f1f1f]",
  },
};

function StatusBadge({ status }: { status: Project["status"] }) {
  const { label, className } = statusConfig[status];
  return (
    <span
      className={`font-mono text-[10px] px-2 py-0.5 border shrink-0 ${className}`}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const namePlaceholder = ph(project.name);
  const githubPlaceholder = ph(project.githubUrl);
  const domainPlaceholder = ph(project.domain);

  return (
    <article
      className="border border-[#1f1f1f] bg-[#111111] p-6 hover:border-[#2a2a2a] transition-colors duration-200 flex flex-col"
      aria-label={namePlaceholder ? "Project placeholder" : project.name}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3
          className={`font-semibold text-sm leading-snug ${
            namePlaceholder ? "text-[#3a3a3a] italic" : "text-[#f0f0f0]"
          }`}
        >
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      {/* Domain */}
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.15em] mb-3 ${
          domainPlaceholder ? "text-[#3a3a3a] italic" : "text-[#e8c77d]"
        }`}
      >
        {project.domain}
      </p>

      {/* Description */}
      <p
        className={`text-xs leading-relaxed flex-1 mb-4 ${
          ph(project.description) ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
        }`}
      >
        {project.description}
      </p>

      {/* Tools */}
      {project.tools.length > 0 && (
        <div
          className="flex flex-wrap gap-1.5 mb-4"
          aria-label="Tools and technologies"
        >
          {project.tools.map((tool) => (
            <span
              key={tool}
              className={`font-mono text-[10px] px-2 py-0.5 border ${
                ph(tool)
                  ? "border-[#1a1a1a] text-[#3a3a3a] italic"
                  : "border-[#1f1f1f] text-[#6b7280]"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex items-center gap-5 pt-4 border-t border-[#1f1f1f]">
        {githubPlaceholder ? (
          <span className="font-mono text-[10px] text-[#3a3a3a] italic">
            Repository pending
          </span>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[#e8c77d] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e8c77d]"
            aria-label={`View ${project.name} on GitHub (opens in new tab)`}
          >
            GitHub →
          </a>
        )}
        {project.demoUrl && !ph(project.demoUrl) && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[#6b7280] hover:text-[#f0f0f0] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e8c77d]"
            aria-label={`View ${project.name} demo (opens in new tab)`}
          >
            Demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="projects-heading"
    >
      <SectionHeader
        number="04"
        title="Projects"
        subtitle="Security tools, analysis environments, and research work. Add projects by editing /data/portfolio.ts."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
