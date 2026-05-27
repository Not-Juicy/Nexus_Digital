import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function CountUp({ value, suffix = '', decimals = 0, duration = 2000 }: { value: number; suffix?: string; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(progress * value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}
