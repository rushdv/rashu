import {
  certifications,
  courses,
  type Certification,
  type Course,
} from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

function ph(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function CertCard({ cert }: { cert: Certification }) {
  const linkPlaceholder = ph(cert.credentialUrl);
  const yearPlaceholder = ph(cert.year);

  return (
    <article
      className="border border-[#1f1f1f] bg-[#111111] p-5 hover:border-[#2a2a2a] transition-colors duration-200 flex flex-col"
      aria-label={`${cert.name} — ${cert.issuer}`}
    >
      {/* Name + year */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-[#f0f0f0] text-base leading-snug">
          {cert.name}
        </h3>
        <span
          className={`font-mono text-xs shrink-0 mt-0.5 ${
            yearPlaceholder ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
          }`}
        >
          {cert.year}
        </span>
      </div>

      {/* Issuer */}
      <p className="font-mono text-xs text-[#10b981] font-medium uppercase tracking-[0.15em] mb-3">
        {cert.issuer}
      </p>

      {/* Description */}
      <p className="text-[15px] text-[#6b7280] leading-relaxed flex-1 mb-4">
        {cert.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#1f1f1f]">
        {linkPlaceholder ? (
          <span className="font-mono text-xs text-[#3a3a3a] italic">
            Credential link pending
          </span>
        ) : (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#10b981] font-medium hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981]"
            aria-label={`View ${cert.name} credential (opens in new tab)`}
          >
            View Credential →
          </a>
        )}
        {cert.credentialId && (
          <span
            className={`font-mono text-xs ${
              ph(cert.credentialId) ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
            }`}
          >
            {ph(cert.credentialId) ? "ID pending" : `ID: ${cert.credentialId}`}
          </span>
        )}
      </div>
    </article>
  );
}

function CourseItem({ course }: { course: Course }) {
  const namePlaceholder = ph(course.name);

  return (
    <li className="pl-4 border-l border-[#1f1f1f] py-2">
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
        <h3
          className={`font-semibold text-base ${
            namePlaceholder ? "text-[#3a3a3a] italic" : "text-[#f0f0f0]"
          }`}
        >
          {course.name}
        </h3>
        {course.year && (
          <span
            className={`font-mono text-xs shrink-0 ${
              ph(course.year) ? "text-[#3a3a3a] italic" : "text-[#6b7280]"
            }`}
          >
            {course.year}
          </span>
        )}
      </div>
      {course.note && (
        <p className="text-[15px] text-[#6b7280] leading-relaxed mt-1">
          {course.note}
        </p>
      )}
    </li>
  );
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="py-20 px-6 max-w-5xl mx-auto"
      aria-labelledby="credentials-heading"
    >
      <SectionHeader
        number="02"
        title="Credentials"
        subtitle="Professional certifications and training courses."
      />

      {/* Certifications */}
      <div className="mb-14">
        <p className="font-mono text-[11px] text-[#6b7280] uppercase tracking-[0.15em] mb-6">
          Certifications
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>

      {/* Courses */}
      <div>
        <p className="font-mono text-[11px] text-[#6b7280] uppercase tracking-[0.15em] mb-6">
          Training &amp; Courses
        </p>
        <ul className="space-y-6" role="list">
          {courses.map((course, i) => (
            <CourseItem key={i} course={course} />
          ))}
        </ul>
      </div>
    </section>
  );
}
