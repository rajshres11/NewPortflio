import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    year: "2024",
    degree: "B.Tech, Computer Science Engineering",
    school: "IILM CET, Greater Noida — AKTU, Lucknow",
    score: "68%",
    note: "Built a strong foundation in core CS, algorithms, and software engineering.",
  },
  {
    year: "2019",
    degree: "Intermediate (Science)",
    school: "BBOSE, Patna",
    score: "71%",
    note: "Focused on advanced science subjects, preparing for engineering.",
  },
  {
    year: "2016",
    degree: "Matriculation",
    school: "St. Xavier's Jr/Sr School, Muzaffarpur — CBSE",
    score: "88%",
    note: "Established core academic skills and strong fundamentals.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-primary mb-2">/ 05 — education</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic path.</h2>
        </motion.div>

        <div className="relative border-l border-border ml-3 space-y-10">
          {edu.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-primary" />
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-sm text-primary">{e.year}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                  {e.score}
                </span>
              </div>
              <h3 className="text-xl font-bold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
              <p className="text-sm text-muted-foreground/80 mt-3 max-w-2xl">{e.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
