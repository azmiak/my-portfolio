import Image from "next/image";
import type { Project } from "@/content/types";
import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

interface ProjectsProps {
  index: string;
  projects: Project[];
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.demoUrl && !project.repoUrl) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-x-6">
      {project.demoUrl && (
        <ExternalLink href={project.demoUrl} label={`Live demo of ${project.title}`}>
          Live demo
        </ExternalLink>
      )}
      {project.repoUrl && (
        <ExternalLink href={project.repoUrl} label={`Github repository of ${project.title}`}>
          Github
        </ExternalLink>
      )}
    </div>
  );
}

export function Projects({ index, projects }: ProjectsProps) {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <SectionHeading id="projects" index={index} title="Projects" />

        {/* The first project leads: larger, on a surface tone, with its stack listed. */}
        <article className="mt-12 grid gap-8 rounded-sharp border border-line bg-surface p-6 md:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {featured.year && <p className="font-mono text-sm text-muted">{featured.year}</p>}
            <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{featured.title}</h3>
            <p className="mt-4 max-w-prose text-lg">{featured.summary}</p>
            <ProjectLinks project={featured} />
          </div>
          <div className="lg:col-span-5">
            {featured.image && (
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                width={featured.image.width}
                height={featured.image.height}
                className="mb-6 block h-auto w-full rounded-sharp border border-line"
              />
            )}
            {featured.tech.length > 0 && (
              <ul aria-label={`Stack for ${featured.title}`}>
                {featured.tech.map((tech, i) => (
                  <li key={`${tech}-${i}`} className="border-b border-line py-2 font-mono text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>

        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <article
                key={`${project.title}-${i}`}
                className="flex flex-col rounded-sharp border border-line p-6"
              >
                {project.year && <p className="font-mono text-sm text-muted">{project.year}</p>}
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-muted">{project.summary}</p>
                {project.tech.length > 0 && (
                  <p className="mt-4 font-mono text-sm">{project.tech.join(" / ")}</p>
                )}
                <ProjectLinks project={project} />
                {project.image && (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="mt-6 block h-auto w-full rounded-sharp border border-line"
                  />
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
