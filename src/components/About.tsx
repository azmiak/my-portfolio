import Image from "next/image";
import { site } from "@/data/site";

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
                    <div className="mx-auto w-full max-w-xs md:max-w-none">
                        <Image
                            src={site.photo}
                            alt={`Portrait of ${site.name}`}
                            width={800}
                            height={800}
                            sizes="(min-width: 768px) 33vw, 320px"
                            className="h-[500px] w-full rounded-2xl border border-slate-800 object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                            About me
                        </p>
                        <h2
                            id="about-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            A little about me
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                            {site.bio}
                        </p>

                        <h3 className="mt-10 text-lg font-semibold text-white">
                            Education
                        </h3>
                        <p className="mt-2 text-slate-200">{site.education.degree}</p>
                        <p className="text-slate-400">
                            {site.education.university} · {site.education.graduationYear}
                        </p>

                        <h3 className="mt-10 text-lg font-semibold text-white">Skills</h3>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {site.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-slate-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="/doc/CV ATS Azmi AK.pdf"
                                download="CV_Azmi_AK.pdf"
                                className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-emerald-500 active:bg-emerald-600 hover:scale-105 active:scale-95"
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}