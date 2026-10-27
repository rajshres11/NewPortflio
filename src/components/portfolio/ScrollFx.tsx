import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary z-[60]"
    />
  );
}

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-[1] mix-blend-screen opacity-60"
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,oklch(0.88_0.20_130/0.18),transparent_60%)]" />
    </motion.div>
  );
}
