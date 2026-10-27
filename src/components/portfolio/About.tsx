import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <p className="font-mono text-xs text-primary mb-2">/ 01 — about</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building things <br /> that work.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a Computer Science engineer who likes turning ideas into clean,
            functional software. My focus is on robust Java backends with Spring
            Boot, paired with modern React frontends.
          </p>
          <p>
            From REST APIs and Hibernate-powered data layers to pixel-aware UIs
            built with Tailwind — I enjoy owning the full stack and shipping
            things that scale.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { k: 1, s: "+", v: "Years coding" },
              { k: 10, s: "+", v: "Projects" },
              { k: 15, s: "+", v: "Technologies" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition-colors"
              >
                <div className="text-3xl font-bold text-primary">
                  <CountUp to={s.k} suffix={s.s} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
