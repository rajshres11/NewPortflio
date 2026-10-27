import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => `${Math.round(n)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(v, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, v]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
