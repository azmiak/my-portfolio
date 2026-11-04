import { site } from "@/data/site";

const linkClass =
    "rounded-sm text-sm font-medium text-slate-300 underline-offset-4 hover:text-emerald-300 hover:underline active:text-emerald-400";

export default function Footer() {
    const year = 2026;

    return (
        <footer className="border-t border-slate-800 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
                <p className="text-sm text-slate-400">
                    © {year} {site.name}. All rights reserved.
                </p>

                <nav aria-label="Social links">
                    <ul className="flex items-center gap-6">
                        <li>
                            <a
                                href={site.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                GitHub
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={site.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                LinkedIn
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${site.contact.email}`} className={linkClass}>
                                Email
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}