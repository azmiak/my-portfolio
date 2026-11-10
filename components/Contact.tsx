import type { Contact as ContactContent } from "@/content/types";
import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

interface ContactProps {
  index: string;
  contact: ContactContent;
}

export function Contact({ index, contact }: ContactProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <SectionHeading id="contact" index={index} title="Contact" />

        <div className="mt-12 rounded-sharp border border-line bg-surface p-6 md:p-12">
          <p className="max-w-prose text-lg text-muted">{contact.note}</p>
          <p className="mt-6">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block min-h-11 rounded-sharp px-1 -mx-1 text-2xl font-semibold text-accent underline underline-offset-8 transition-colors duration-150 [overflow-wrap:anywhere] hover:bg-accent-fill hover:text-on-accent hover:no-underline md:text-4xl"
            >
              {contact.email}
            </a>
          </p>

          {contact.socials.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-x-8 border-t border-line pt-6">
              {contact.socials.map((social) => (
                <li key={social.href}>
                  <ExternalLink href={social.href}>{social.label}</ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
