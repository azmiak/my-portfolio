import type { ReactNode } from "react";
import { textLink } from "@/lib/ui";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  /** Longer accessible name that starts with the visible text. */
  label?: string;
  className?: string;
}

export function ExternalLink({ href, children, label, className }: ExternalLinkProps) {
  const isMail = href.startsWith("mailto:");
  const newTab = !isMail;

  return (
    <a
      href={href}
      className={className ?? textLink}
      aria-label={label ? (newTab ? `${label} (opens in a new tab)` : label) : undefined}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {newTab && !label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
