'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Free SEO Audit',
    desc: 'We analyze your current visibility gap — rankings, citations, GBP health, competitor gaps, and technical issues.',
    color: '#00D4FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Custom Strategy',
    desc: 'A 90-day roadmap built for your niche, location, and competitive landscape. No cookie-cutter plans.',
    color: '#FD5A05',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Full Execution',
    desc: 'We build, optimize, publish, and automate — while you focus on running your business.',
    color: '#00D4FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Rank & Scale',
    desc: 'Track real results with monthly reporting. Refine the strategy, compound the rankings, grow indefinitely.',
    color: '#FD5A05',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function ProcessSteps() {
  return (
    <section className="py-32 bg-[#060A14] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 bg-[#00D4FF]/[0.07] border border-[#00D4FF]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00D4FF]">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.07, ease: [0.32, 0.72, 0, 1] }}
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white"
          >
            From Invisible to Undeniable —<br className="hidden md:block" />
            <span className="text-gradient"> in 4 Steps</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Gradient connector (desktop) */}
          <div className="hidden md:block absolute top-[2.625rem] left-[calc(12.5%+36px)] right-[calc(12.5%+36px)] h-px bg-gradient-to-r from-[#00D4FF]/30 via-[#FD5A05]/30 to-[#00D4FF]/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle — double-bezel */}
                <div className="relative z-10 mb-6">
                  {/* Outer shell */}
                  <div
                    className="p-[1.5px] rounded-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}50, ${step.color}10)`,
                      boxShadow: `0 0 0 0 ${step.color}00`,
                    }}
                  >
                    {/* Inner core circle */}
                    <div
                      className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background: `${step.color}0D`,
                        boxShadow: `inset 0 1px 1px rgba(255,255,255,0.08), 0 0 0 0 ${step.color}20`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Number badge */}
                  <span
                    className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black z-10"
                    style={{ background: step.color, color: '#0A0F1E' }}
                  >
                    {step.num.slice(1)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5">{step.title}</h3>
                <p className="text-[#8A94B2] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA — button-in-button */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-center"
        >
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 bg-white hover:bg-[#F0F4FF] text-[#0A0F1E] font-bold pl-8 pr-3 h-14 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[0_4px_24px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_32px_rgba(255,255,255,0.18)] active:scale-[0.98]">
              Start With a Free Audit
              <span className="w-9 h-9 rounded-full bg-[#0A0F1E]/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H6M11.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
