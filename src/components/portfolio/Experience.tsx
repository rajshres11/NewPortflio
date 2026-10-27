import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Java Full Stack Trainer",
    org: "Parul University",
    location: "Vadodara",
    period: "Jun 2026 – Present",
    tags: ["Java", "Teaching", "Mentorship"],
    current: true,
  },
  {
    role: "Java Full Stack Intern",
    org: "JSpider — BTM Bangalore",
    location: "Bangalore",
    period: "Jan 2026 – May 2026",
    tags: ["Java", "MySQL", "JDBC", "Spring", "Spring Boot"],
    current: false,
  },
  {
    role: "Backend Developer (Freelance)",
    org: "PropertyManager UAE",
    location: "Remote",
    period: "Jul 2025 – Nov 2025",
    tags: ["Spring Boot", "MySQL", "REST APIs"],
    current: false,
  },
  {
    role: "React Developer Intern",
    org: "The Entrepreneurship Network",
    location: "Remote",
    period: "Jun 2024 – Sept 2024",
    tags: ["React", "JavaScript", "Frontend"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-primary mb-2">/ 04 — experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Where I've worked.</h2>
        </motion.div>

        <div className="relative space-y-6">
          <div className="timeline-line hidden md:block" aria-hidden="true" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-edge group relative p-6 md:p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{exp.role}</div>
                    <div className="text-sm text-muted-foreground">{exp.org}</div>
                  </div>
                </div>

                <div className="flex-1 md:text-center">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {exp.period}
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end md:w-auto">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-border group-hover:border-primary/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
