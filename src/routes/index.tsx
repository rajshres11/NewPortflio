import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress, CursorGlow } from "@/components/portfolio/ScrollFx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shresth Raj — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shresth Raj — full-stack developer specializing in Java, Spring Boot, React, and modern web apps.",
      },
      { property: "og:title", content: "Shresth Raj — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Shresth Raj — Java, Spring Boot, React projects and selected work.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shresth Raj",
          jobTitle: "Full-Stack Developer",
          sameAs: [
            "https://github.com/rajshres11",
            "https://www.linkedin.com/in/shresth-raj01",
          ],
          knowsAbout: [
            "Java", "Spring Boot", "Hibernate", "JDBC",
            "React", "JavaScript", "TypeScript", "MySQL", "REST APIs",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
