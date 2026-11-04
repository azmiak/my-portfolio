import Image from "next/image";
import { site } from "@/data/site";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="border-t border-slate-800 bg-slate-900/40 py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                    Projects
                </p>
                <h2
                    id="projects-heading"
                    className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Selected work
                </h2>

                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {site.projects.map((project) => (
                        <li key={project.title} className="flex">
                            <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                                <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate-300">
                                        {project.description}
                                    </p>

                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:scale-105 active:scale-95 hover:bg-emerald-500 active:bg-emerald-600"
                                        >
                                            GitHub
                                            <span className="sr-only">
                                                {" "}
                                                repository for {project.title} (opens in a new tab)
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}