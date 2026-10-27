import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect } from "react";

const NAME = "Shresth";
const NAME2 = "Raj.";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const orb1X = useTransform(sx, (v) => v * 40);
  const orb1Y = useTransform(sy, (v) => v * 40);
  const orb2X = useTransform(sx, (v) => v * -30);
  const orb2Y = useTransform(sy, (v) => v * -30);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-40 -right-20 w-96 h-96 bg-primary/20 blur-3xl blob"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-0 -left-20 w-96 h-96 bg-accent/20 blur-3xl blob"
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
       <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-border bg-surface/60 text-xs font-mono text-muted-foreground mb-8 shimmer backdrop-blur"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            <span className="relative w-2 h-2 rounded-full bg-primary" />
          </span>
          Available for work
          <span className="text-border">|</span>
          <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> India</span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter">
          <span className="sr-only">Shresth Raj — Full-Stack Developer</span>
          <span aria-hidden="true" className="block overflow-hidden">
            {NAME.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="reveal-letter"
              >
                {c}
              </motion.span>
            ))}
          </span>
          <span aria-hidden="true" className="block overflow-hidden">
            {NAME2.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="reveal-letter text-gradient"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>
        <p aria-hidden="true" className="mt-3 text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Full-Stack Developer
        </p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          Full-stack developer crafting fast, scalable web apps with{" "}
          <span className="text-foreground font-medium">Java, Spring Boot</span>{" "}
          on the back and{" "}
          <span className="text-foreground font-medium">React</span> on the front.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-primary"
          >
            View Projects
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
          <div className="flex items-center gap-2">
            {[
              { Icon: Github, href: "https://github.com/rajshres11", label: "GitHub Profile" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/shresth-raj01", label: "LinkedIn Profile" },
              { Icon: Mail, href: "mailto:shresthraj1012001@gmail.com", label: "Send Email" },
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 rounded-full border border-border bg-surface/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-[-40px] right-4 hidden md:flex flex-col items-center gap-2 text-[10px] font-mono text-muted-foreground"
        >
          <span className="rotate-90 origin-center mt-6">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
       </div>

       {/* Floating code chip — desktop only */}
       <motion.aside
         initial={{ opacity: 0, y: 30, rotate: -2 }}
         animate={{ opacity: 1, y: 0, rotate: 2 }}
         transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
         className="hidden lg:block relative w-[320px] float"
         aria-hidden="true"
       >
         <div className="absolute -inset-2 ring-conic opacity-50 rounded-3xl" />
         <div className="relative rounded-3xl border border-border bg-surface/80 backdrop-blur-xl p-5 card-edge overflow-hidden">
           <div className="flex items-center gap-2 mb-4">
             <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
             <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
             <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
             <span className="ml-auto font-mono text-[10px] text-muted-foreground">developer.ts</span>
           </div>
           <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre">
             <span className="text-accent">const</span>{" "}
             <span className="text-primary">dev</span> = {"{"}
             {"\n  name: "}<span className="text-foreground">'Shresth Raj'</span>,
             {"\n  stack: ['Java', 'Spring',"}
             {"\n          'React', 'MySQL'],"}
             {"\n  focus: "}<span className="text-foreground">'shipping fast'</span>,
             {"\n  status: "}<span className="text-primary">'open to work'</span>,
             {"\n"}{"}"};
           </pre>
           <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
             <Sparkles className="w-3 h-3 text-primary" />
             crafted with care
           </div>
         </div>
       </motion.aside>
      </div>
    </section>
  );
}
