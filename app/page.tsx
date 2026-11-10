import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PageBackground } from "@/components/PageBackground";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  const {
    person,
    about,
    education,
    skills,
    projects,
    experience,
    certificates,
    contact,
  } = portfolio;

  // A section appears, and gets a nav entry, only when its content exists.
  const sections = [
    { id: "about", label: "About", show: about.paragraphs.length > 0 },
    { id: "education", label: "Education", show: education.length > 0 },
    { id: "skills", label: "Skills", show: skills.length > 0 },
    { id: "projects", label: "Projects", show: projects.length > 0 },
    {
      id: "experience",
      label: "Experience",
      show: experience.length + certificates.length > 0,
    },
    { id: "contact", label: "Contact", show: true },
  ].filter((section) => section.show);

  const indexOf = (id: string) =>
    String(sections.findIndex((section) => section.id === id) + 1).padStart(2, "0");

  const has = (id: string) => sections.some((section) => section.id === id);

  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Header name={person.name} items={sections.map(({ id, label }) => ({ id, label }))} />
      <main id="main" tabIndex={-1} className="relative z-10">
        <Hero person={person} hasProjects={has("projects")} email={contact.email} />
        {has("about") && <About index={indexOf("about")} about={about} />}
        {has("education") && <Education index={indexOf("education")} entries={education} />}
        {has("skills") && <Skills index={indexOf("skills")} groups={skills} />}
        {has("projects") && <Projects index={indexOf("projects")} projects={projects} />}
        {has("experience") && (
          <Experience
            index={indexOf("experience")}
            experience={experience}
            certificates={certificates}
          />
        )}
        <Contact index={indexOf("contact")} contact={contact} />
      </main>
      <Footer name={person.name} />
    </div>
  );
}
