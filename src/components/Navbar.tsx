"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur">
            <nav
                aria-label="Primary"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
            >
                <a
                    href="#home"
                    className={`rounded-md text-base font-semibold text-white hover:scale-105 active:scale-95 hover:text-emerald-400 active:text-emerald-500 ${focusRing}`}
                >
                    My Portfolio
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {site.nav.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`rounded-md px-3 py-2 text-sm font-medium text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline active:text-emerald-500 ${focusRing}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-200 active:scale-95 active:text-emerald-500 md:hidden ${focusRing}`}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((value) => !value)}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="h-6 w-6"
                    >
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </nav>

            <div
                id="mobile-menu"
                hidden={!open}
                className="border-t border-slate-800 md:hidden"
            >
                <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
                    {site.nav.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`block rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white ${focusRing}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}