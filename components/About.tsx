import type { About as AboutContent } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  index: string;
  about: AboutContent;
}

export function About({ index, about }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
          <SectionHeading id="about" index={index} title="About" />
        </div>

        <div className="md:col-span-8">
          <div className="max-w-prose space-y-5 text-lg leading-relaxed">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {about.facts.length > 0 && (
            <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
