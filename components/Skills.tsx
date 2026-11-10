import type { SkillGroup } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

interface SkillsProps {
  index: string;
  groups: SkillGroup[];
}

export function Skills({ index, groups }: SkillsProps) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <SectionHeading id="skills" index={index} title="Skills" />

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <div key={`${group.group}-${i}`}>
              <h3 className="border-b-2 border-fg pb-2 text-lg font-semibold">{group.group}</h3>
              <ul>
                {group.items.map((item, j) => (
                  <li key={`${item}-${j}`} className="border-b border-line py-2.5 font-mono text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
