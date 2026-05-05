'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const EASE = [0.32, 0.72, 0, 1] as [number, number, number, number];

const SIZE = 148;
const STROKE = 10;
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRC = 2 * Math.PI * RADIUS;

const stats = [
  {
    value: 312, suffix: '%', decimals: 0,
    label: 'Average organic traffic increase',
    accent: '#00D4FF', progress: 0.78,
  },
  {
    value: 87, suffix: '%', decimals: 0,
    label: 'Clients reach Page 1 in 90 days',
    accent: '#FD5A05', progress: 0.87,
  },
  {
    value: 120, suffix: '+', decimals: 0,
    label: 'Local businesses served nationwide',
    accent: '#00D4FF', progress: 0.72,
  },
  {
    value: 4.9, suffix: '/5', decimals: 1,
    label: 'Average client satisfaction score',
    accent: '#FD5A05', progress: 0.98,
  },
];

function useCountUp(target: number, duration: number, inView: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const totalMs = duration * 1000;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / totalMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((target * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, decimals]);
  return count;
}

function RingCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCountUp(stat.value, 1.9, inView, stat.decimals);
  const targetOffset = CIRC * (1 - stat.progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: EASE }}
      className="flex flex-col items-center text-center group cursor-default"
    >
      {/* Ring + number */}
      <div className="relative mb-5">
        {/* Outer glow ring on hover */}
        <motion.div
          className="absolute -inset-3 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(circle, ${stat.accent}18 0%, transparent 65%)` }}
        />

        <svg width={SIZE} height={SIZE} style={{ transform: 'rotate(-90deg)' }} aria-hidden="true">
          <defs>
            <filter id={`rglow-${index}`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id={`rgrad-${index}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={stat.accent} stopOpacity="1" />
              <stop offset="100%" stopColor={stat.accent} stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* Background track */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={STROKE}
          />
          {/* Faint secondary ring */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={RADIUS - STROKE - 4}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth={1}
          />

          {/* Progress arc */}
          <motion.circle
            cx={SIZE / 2} cy={SIZE / 2} r={RADIUS}
            fill="none"
            stroke={`url(#rgrad-${index})`}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={inView ? { strokeDashoffset: targetOffset } : { strokeDashoffset: CIRC }}
            transition={{ duration: 2.0, delay: index * 0.13 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            filter={`url(#rglow-${index})`}
          />

          {/* Endpoint dot */}
          {inView && (
            <motion.circle
              r={STROKE / 2 + 1}
              fill={stat.accent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.13 + 0.3, duration: 0.3 }}
              style={{ filter: `drop-shadow(0 0 4px ${stat.accent})` }}
            />
          )}
        </svg>

        {/* Center number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span
            className="font-[family-name:var(--font-playfair)] font-black leading-none"
            style={{
              fontSize: '1.75rem',
              color: stat.accent,
              textShadow: `0 0 28px ${stat.accent}80`,
            }}
          >
            {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.floor(count)}
            {stat.suffix}
          </span>
        </div>
      </div>

      <p className="text-[#8A94B2] text-sm leading-snug max-w-[9.5rem]">{stat.label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-28 bg-[#060A14] border-y border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/[0.025] via-transparent to-[#FD5A05]/[0.025]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(0,212,255,0.025),transparent)]" />

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-64 h-px bg-gradient-to-r from-[#00D4FF]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-px bg-gradient-to-l from-[#FD5A05]/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#8A94B2] mb-16"
        >
          Numbers That Actually Mean Something
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <RingCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
