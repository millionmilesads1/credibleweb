'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const EASE = [0.32, 0.72, 0, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.75, delay, ease: EASE },
});

const floatingBadges = [
  {
    value: '+312%',
    label: 'Organic Traffic',
    sub: 'in 6 months',
    color: '#00D4FF',
    style: { top: '32%', left: '3%' },
    float: 'float-a',
    delay: '0s',
  },
  {
    value: '#1',
    label: 'Local Map Pack',
    sub: '94% success rate',
    color: '#FFD700',
    style: { top: '28%', right: '3%' },
    float: 'float-b',
    delay: '1.2s',
  },
  {
    value: '87%',
    label: 'Page 1 Rank',
    sub: 'within 90 days',
    color: '#FD5A05',
    style: { bottom: '28%', left: '3%' },
    float: 'float-c',
    delay: '0.6s',
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,212,255,0.09),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0A0F1E] to-transparent" />

        {/* Animated orbs */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)',
            top: '-15%',
            left: '-12%',
            animation: 'float-a 11s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(253,90,5,0.07) 0%, transparent 65%)',
            bottom: '-8%',
            right: '-8%',
            animation: 'float-b 9s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 65%)',
            top: '40%',
            left: '60%',
            animation: 'float-c 13s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
        {/* Pulsing center glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating metric badges — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.2, duration: 0.7, ease: EASE }}
            className="absolute"
            style={badge.style}
          >
            <div
              style={{ animation: `${badge.float} ${9 + i * 2}s ease-in-out infinite`, animationDelay: badge.delay }}
            >
              {/* Double-bezel badge */}
              <div
                className="p-[1px] rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${badge.color}40 0%, ${badge.color}10 100%)`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)`,
                }}
              >
                <div
                  className="rounded-[calc(1rem-1px)] px-4 py-3 backdrop-blur-xl"
                  style={{
                    background: `linear-gradient(145deg, rgba(13,19,35,0.95) 0%, rgba(9,13,26,0.95) 100%)`,
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    className="font-[family-name:var(--font-playfair)] font-black text-xl leading-none"
                    style={{ color: badge.color, textShadow: `0 0 20px ${badge.color}80` }}
                  >
                    {badge.value}
                  </p>
                  <p className="text-white/80 text-xs font-semibold mt-1">{badge.label}</p>
                  <p className="text-[#8A94B2] text-[10px] font-mono mt-0.5">{badge.sub}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow pill */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 bg-[#00D4FF]/[0.08] border border-[#00D4FF]/25 rounded-full px-5 py-2 text-sm text-[#00D4FF] font-semibold mb-8 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            AI-Powered Local SEO Agency
            <ChevronRight className="w-3.5 h-3.5 opacity-60" strokeWidth={1.5} />
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.1)} className="text-[clamp(2.8rem,7.5vw,6rem)] font-bold font-[family-name:var(--font-playfair)] tracking-tight leading-[1.05] text-white mb-6">
            Your Competitors Are{' '}
            <br className="hidden md:block" />
            Already On Page&nbsp;1.
            <br />
            <span className="text-gradient">You Should Be Too.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-[#8A94B2] max-w-2xl mx-auto leading-relaxed mb-10">
            CredibleWeb builds AI-powered Local SEO systems that get service businesses found, trusted, and chosen — without paid ads.
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#00bfe8] text-[#0A0F1E] font-bold text-base pl-7 pr-3 h-14 rounded-full shadow-[0_0_30px_rgba(0,212,255,0.35)] hover:shadow-[0_0_55px_rgba(0,212,255,0.55)] transition-all duration-600 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer active:scale-[0.98]">
                Get My Free SEO Audit
                <span className="w-9 h-9 rounded-full bg-[#0A0F1E]/15 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </Link>

            <Link href="/case-studies">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 border border-white/[0.14] text-white/80 hover:text-white hover:bg-white/[0.05] hover:border-white/25 font-semibold text-base px-8 h-14 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                See Client Results
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
              </button>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-14"
          >
            <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.09] to-white/[0.04]">
              <div className="rounded-[calc(1rem-1px)] bg-[#0A0F1E]/80 px-8 py-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#00D4FF" aria-hidden="true" className="mx-[1px]">
                          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.2l4-.6z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-semibold text-sm">4.9/5</span>
                    <span className="text-[#8A94B2] text-sm">client rating</span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-white/15" />
                  <span className="text-[#8A94B2] text-sm">
                    <span className="text-white font-semibold">120+</span> businesses served
                  </span>
                  <div className="hidden sm:block w-px h-5 bg-white/15" />
                  <span className="text-[#8A94B2] text-sm">
                    <span className="text-white font-semibold">87%</span> reach Page 1 in 90 days
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
