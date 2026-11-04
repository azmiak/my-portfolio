
import { site } from "@/data/site";

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="border-t border-slate-800 py-20 md:py-28"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                    Contact
                </p>
                <h2
                    id="contact-heading"
                    className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Let&apos;s talk
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                    Have a question or an opportunity? Send a message below, or email me
                    directly at{" "}
                    <a
                        href={`mailto:${site.contact.email}`}
                        className="rounded-sm font-medium text-emerald-400 underline underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                    >
                        {site.contact.email}
                    </a>
                    .
                </p>

            </div>
        </section>
    );
}