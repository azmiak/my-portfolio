import Image from "next/image";
import type { Person } from "@/content/types";
import { btnPrimary, btnSecondary } from "@/lib/ui";

interface HeroProps {
  person: Person;
  hasProjects: boolean;
  email: string;
}

export function Hero({ person, hasProjects, email }: HeroProps) {
  const { photo } = person;
  const photoIsSvg = photo.src.endsWith(".svg");

  return (
    <section id="top" aria-labelledby="hero-title" className="py-14 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-12 md:items-center md:px-8">
        <div className="md:col-span-7">
          <span aria-hidden="true" className="mb-6 block h-0.5 w-10 bg-accent-fill" />
          <h1
            id="hero-title"
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
          >
            {person.name}
          </h1>
          <p className="mt-6 text-xl font-medium md:text-2xl">{person.role}</p>
          <p className="mt-4 max-w-xl text-lg text-muted">{person.headline}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {hasProjects && (
              <a href="#projects" className={btnPrimary}>
                View projects
              </a>
            )}
            <a href={`mailto:${email}`} className={hasProjects ? btnSecondary : btnPrimary}>
              Send an email
            </a>
          </div>

          {person.availability && (
            <p className="mt-8 font-mono text-sm text-muted">{person.availability}</p>
          )}
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto w-full max-w-[16rem] md:max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-sharp bg-accent-fill"
            />
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="eager"
              fetchPriority="high"
              unoptimized={photoIsSvg}
              className="relative block h-auto w-full rounded-sharp border border-line bg-surface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
