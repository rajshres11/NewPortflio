import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const items = [
  { Icon: Mail, label: "shresthraj1012001@gmail.com", href: "mailto:shresthraj1012001@gmail.com" },
  { Icon: Phone, label: "+91 77177 80210", href: "tel:+917717780210" },
  { Icon: Github, label: "github.com/rajshres11", href: "https://github.com/rajshres11" },
  { Icon: Linkedin, label: "linkedin.com/in/shresth-raj01", href: "https://www.linkedin.com/in/shresth-raj01" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-primary mb-4"
        >
          / 06 — contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Let's build <br />
          <span className="text-gradient">something great.</span>
        </motion.h2>
        <motion.a
          href="mailto:shresthraj1012001@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-transform"
        >
          <Mail className="w-4 h-4" />
          Get in touch
        </motion.a>

        <div className="mt-16 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {items.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface/40 hover:border-primary hover:bg-surface transition-all text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm truncate">{label}</span>
            </a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-xs text-muted-foreground font-mono flex justify-between flex-wrap gap-2">
          <span>© 2026 Shresth Raj</span>
          <span>Built with React + Framer Motion</span>
        </footer>
      </div>
    </section>
  );
}
