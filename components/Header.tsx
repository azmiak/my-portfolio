"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  id: string;
  label: string;
}

export function Header({ name, items }: { name: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // 1. Bottom of page activation for final section
          if (scrollY + windowHeight >= documentHeight - 60) {
            if (items.length > 0) {
              setActiveSection(items[items.length - 1].id);
              ticking = false;
              return;
            }
          }

          // 2. Threshold below sticky header (header height is 64px)
          const offsetThreshold = 140;
          let current = "";

          for (const item of items) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.getBoundingClientRect().top;
              if (top <= offsetThreshold) {
                current = item.id;
              }
            }
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 min-w-0 items-center truncate font-semibold text-fg hover:text-accent"
        >
          <span className="truncate">{name}</span>
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`inline-flex min-h-11 items-center rounded-sharp px-3 text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? "border border-line bg-surface font-semibold text-accent"
                          : "border border-transparent text-muted hover:bg-surface hover:text-fg"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-11 items-center rounded-sharp border border-line px-3 text-sm font-medium text-fg transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-canvas active:translate-y-px lg:hidden"
          >
            {open ? "Close menu" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-canvas lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2 md:px-8">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="border-b border-line last:border-b-0">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center text-lg transition-colors duration-150 ${
                      isActive
                        ? "border-l-2 border-accent-fill bg-surface/50 pl-3 font-semibold text-accent"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
