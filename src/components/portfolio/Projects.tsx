import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import influencerShot from "@/assets/influencer-marketing.png";
import resumeShot from "@/assets/resume-builder.png";
import learnhallShot from "@/assets/learnhall-preview.png";

type Project = {
  title: string;
  desc: string;
  long: string;
  href: string;
  repo?: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  n: string;
  accent: string;
  thumb?: string;
};

const projects: Project[] = [
  {
    title: "Influencer Marketing Platform",
    desc: "A modern platform connecting brands with influencers. Built with React and deployed on Vercel.",
    long: "A discovery + collaboration platform that lets brands find creators, review their reach, and kick off campaigns. Includes a creator directory, profile pages, and a campaign brief flow — all responsive and animation-rich.",
    href: "https://influencer-marketing-kappa.vercel.app/",
    repo: "https://github.com/rajshres11",
    tags: ["React", "Tailwind", "Vercel"],
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: [
      "Creator directory with search & filters",
      "Animated, responsive marketing pages",
      "Deployed on Vercel with zero-config CI",
    ],
    n: "01",
    accent: "from-primary/40 via-accent/30 to-transparent",
    thumb: influencerShot,
  },
  {
    title: "Resume Builder",
    desc: "Interactive resume builder with live preview, custom templates and instant export.",
    long: "An in-browser resume builder with live preview, switchable templates, and clean PDF export. Forms are validated on the fly and the layout adapts to mobile so users can edit on any device.",
    href: "https://resumebuilding-4klw.vercel.app/",
    repo: "https://github.com/rajshres11",
    tags: ["React", "JavaScript", "CSS"],
    stack: ["React", "JavaScript", "CSS Modules", "html2pdf.js", "Vercel"],
    highlights: [
      "Real-time preview while editing",
      "Multiple template layouts",
      "One-click PDF export",
    ],
    n: "02",
    accent: "from-accent/40 via-primary/30 to-transparent",
    thumb: resumeShot,
  },
  {
    title: "LearnHall Study Platform",
    desc: "Server down? Contact admin.",
    long: "LearnHall brings a course catalogue, lessons, and enrollment tracking together in one study experience. Learners can explore courses, enroll, follow lesson content, and keep track of their progress.",
    href: "https://learnhall-study.vercel.app/",
    tags: ["Spring Boot", "Spring Security", "MySQL", "Vercel"],
    stack: ["React", "Spring Boot", "Spring Security", "JWT", "MySQL", "Vercel", "Render", "ngrok", "Swagger"],
    highlights: [
      "Browse focused courses and enroll to learn",
      "Follow course lessons in one place",
      "Track active and completed enrollments",
    ],
    n: "03",
    accent: "from-primary/30 via-accent/40 to-transparent",
    thumb: learnhallShot,
  },
];

function ProjectMock({ title, href, accent, thumb }: { title: string; href: string; accent: string; thumb?: string }) {
  const host = href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="relative aspect-[16/10] w-full rounded-2xl border border-border overflow-hidden bg-background">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      {!thumb && <div className="absolute inset-0 grid-bg opacity-30" />}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60 backdrop-blur">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        <div className="ml-3 flex-1 truncate rounded-md bg-surface/60 border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground">
          {host}
        </div>
      </div>
      {thumb ? (
        <img
          src={thumb}
          alt={`${title} screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top pt-10"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 pt-10">
          <h4 className="font-display font-bold text-2xl md:text-4xl text-center tracking-tight text-gradient">
            {title}
          </h4>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-xs text-primary mb-2">/ 03 — selected work</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Things I've built.
            </h2>
          </div>
          <a
            href="https://github.com/rajshres11"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            More on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="card-edge group relative p-8 rounded-3xl border border-border bg-surface/40 backdrop-blur overflow-hidden text-left hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View details for ${p.title}`}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      LIVE
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
                {p.thumb && (
                  <div className="mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-background">
                    <img
                      src={p.thumb}
                      alt={`${p.title} preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-border group-hover:border-primary/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View details →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-background/70 backdrop-blur-md"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-border bg-surface/95 backdrop-blur-xl shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-border bg-background/70 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-5 sm:p-7">
                <ProjectMock title={active.title} href={active.href} accent={active.accent} thumb={active.thumb} />
              </div>

              <div className="px-5 sm:px-7 pb-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-muted-foreground">{active.n}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    LIVE
                  </span>
                </div>
                <h3 id="project-modal-title" className="text-3xl md:text-4xl font-bold tracking-tight">
                  {active.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{active.long}</p>

                <div className="mt-6">
                  <p className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">Highlights</p>
                  <ul className="space-y-2">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium glow-primary hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit live site
                  </a>
                  {active.repo && (
                    <a
                      href={active.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background/50 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
