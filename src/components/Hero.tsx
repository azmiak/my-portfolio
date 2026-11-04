import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
        >
            <Image
                src={site.heroImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="-z-10 object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-slate-950/40"
            />

            <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                    Hello, I&apos;m
                </p>
                <h1
                    id="hero-heading"
                    className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
                >
                    {site.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl lg:text-2xl">
                    {site.role}
                </p>
                <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
                    {site.heroIntro}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-emerald-500 active:bg-emerald-600 hover:scale-105 active:scale-95"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-6 py-3 text-base font-semibold text-white transition-all hover:border-emerald-400 hover:text-emerald-400 active:border-emerald-300 active:text-emerald-300 hover:scale-105 active:scale-95"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}