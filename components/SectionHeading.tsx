interface SectionHeadingProps {
  id: string;
  index: string;
  title: string;
}

/*
  Identity motif: a 40px accent rule above a mono index number, then the title.
  The same short green line recurs on the hero and the portrait plate.
*/
export function SectionHeading({ id, index, title }: SectionHeadingProps) {
  return (
    <div>
      <span aria-hidden="true" className="block h-0.5 w-10 bg-accent-fill" />
      <p aria-hidden="true" className="mt-4 font-mono text-sm text-accent">
        {index}
      </p>
      <h2 id={`${id}-title`} className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
