import type { EducationEntry } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

interface EducationProps {
  index: string;
  entries: EducationEntry[];
}

export function Education({ index, entries }: EducationProps) {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <SectionHeading id="education" index={index} title="Education" />

        <div className="mt-12">
          {entries.map((entry, i) => (
            <article
              key={`${entry.school}-${i}`}
              className="grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <p className="font-mono text-sm text-muted md:col-span-3">{entry.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-semibold tracking-tight">{entry.degree}</h3>
                <p className="mt-1 text-lg">
                  {entry.school}
                  {entry.location ? <span className="text-muted">{`, ${entry.location}`}</span> : null}
                </p>
                {entry.details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-muted marker:text-accent">
                    {entry.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
