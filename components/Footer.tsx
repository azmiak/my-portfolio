import { textLink } from "@/lib/ui";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          &copy; {new Date().getFullYear()} {name}
        </p>
        <a href="#top" className={textLink}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
