"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Factory, Cog, ShieldCheck } from "lucide-react";

const metrics = [
  { icon: Factory, value: 15000, suffix: "+", label: "Monthly Production Capacity" },
  { icon: Cog, value: 20, suffix: "+", label: "Industrial Machines" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Quality Inspection" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const MetricItem = ({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
}: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="relative text-center"
    >
      {/* glow background */}
      <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary to-indigo-600 rounded-full -z-10"></div>

      {/* icon */}
      <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-indigo-600 text-white shadow-lg">
        <Icon className="h-7 w-7" />
      </div>

      {/* number */}
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
        {count.toLocaleString()}
        {suffix}
      </div>

      {/* label */}
      <p className="mt-4 text-sm md:text-base font-medium text-muted-foreground tracking-wide">
        {label}
      </p>

      {/* divider */}
      <div className="mt-8 h-[2px] w-16 mx-auto bg-gradient-to-r from-primary to-indigo-600 rounded-full"></div>
    </motion.div>
  );
};

const MetricCounters = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">

      {/* decorative background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/10 to-indigo-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient-gold">Scale & Precision</span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg">
            Our infrastructure enables consistent production,
            strict quality control, and large-scale garment
            manufacturing for global brands.
          </p>

        </div>

        {/* metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {metrics.map((metric, i) => (
            <MetricItem key={metric.label} {...metric} delay={i * 0.2} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default MetricCounters;