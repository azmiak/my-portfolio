import type { Certificate, RoleEntry } from "@/content/types";
import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  index: string;
  experience: RoleEntry[];
  certificates: Certificate[];
}

function RoleGroup({ title, entries }: { title: string; entries: RoleEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <div>
      <h3 className="border-b-2 border-fg pb-2 text-xl font-semibold">{title}</h3>
      <ul>
        {entries.map((entry, i) => (
          <li key={`${entry.role}-${i}`} className="border-b border-line py-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h4 className="text-lg font-semibold">{entry.role}</h4>
              <p className="font-mono text-sm text-muted">{entry.period}</p>
            </div>
            <p className="mt-1">{entry.organization}</p>
            {entry.points.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-accent">
                {entry.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience({ index, experience, certificates }: ExperienceProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <SectionHeading id="experience" index={index} title="Experience" />

        <div className="mt-12 grid gap-16 lg:grid-cols-1">
          <RoleGroup title="Work experience" entries={experience} />
        </div>

        {certificates.length > 0 && (
          <div className="mt-16">
            <h3 className="border-b-2 border-fg pb-2 text-xl font-semibold">Certificates</h3>
            <ul className="grid sm:grid-cols-2 sm:gap-x-10">
              {certificates.map((certificate, i) => (
                <li key={`${certificate.title}-${i}`} className="border-b border-line py-4">
                  <p className="font-medium">
                    {certificate.url ? (
                      <ExternalLink href={certificate.url} label={`${certificate.title} credential`}>
                        {certificate.title}
                      </ExternalLink>
                    ) : (
                      certificate.title
                    )}
                  </p>
                  <p className="mt-1 font-mono text-sm text-muted">
                    {certificate.issuer}, {certificate.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
