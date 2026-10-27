import { motion } from "framer-motion";

// simpleicons.org slugs — served as colored SVG from cdn.simpleicons.org
const iconSlug: Record<string, string> = {
  "Java": "openjdk",
  "Spring Boot": "springboot",
  "Spring": "spring",
  "Spring Security": "springsecurity",
  "Hibernate": "hibernate",
  "JDBC": "databricks",
  "JWT": "jsonwebtokens",
  "REST APIs": "fastapi",
  "Maven": "apachemaven",
  "React": "react",
  "JavaScript": "javascript",
  "HTML": "html5",
  "CSS": "css",
  "Tailwind CSS": "tailwindcss",
  "MySQL": "mysql",
  "PostgreSQL": "postgresql",
  "Git": "git",
  "GitHub": "github",
  "Vercel": "vercel",
  "Render": "render",
  "VS Code": "vscodium",
  "IntelliJ": "intellijidea",
  "Eclipse": "eclipseide",
  "DSA": "leetcode",
};

const groups = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "Maven",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Render", "VS Code", "IntelliJ", "Eclipse", "Codex", "DSA"],
  },
];

const marqueeItems = [
  "Java", "Spring Boot", "Spring Security", "Hibernate", "React", "MySQL", "REST API",
  "Tailwind", "Git", "JavaScript", "Oracle", "Maven", "DSA",
];

function SkillChip({ name }: { name: string }) {
  const slug = iconSlug[name];
  return (
    <span className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-sm bg-background border border-border hover:border-primary hover:text-primary transition-colors cursor-default">
      {slug ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0">
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-4 h-4"
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.display = "none";
            }}
          />
        </span>
      ) : (
        <span className="w-2 h-2 rounded-full bg-primary ml-1.5" />
      )}
      {name}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-primary mb-2">/ 02 — skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The toolkit.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-edge p-7 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/40 transition-colors"
            >
              <h3 className="text-sm font-mono text-muted-foreground mb-5 uppercase tracking-wider">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <SkillChip key={s} name={s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border py-6 -mx-6">
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((s, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-6xl font-bold text-muted-foreground/40 hover:text-primary transition-colors"
            >
              {s} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
