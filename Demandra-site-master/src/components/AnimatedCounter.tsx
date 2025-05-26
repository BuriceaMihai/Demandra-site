import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.h2 ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </motion.h2>
  );
};

export default AnimatedCounter;
