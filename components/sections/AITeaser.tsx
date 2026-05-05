'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const automations = [
  {
    label: 'Lead Nurture Sequences',
    detail: 'Auto-respond to new leads in < 2 min',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 4h12M2 4v8a1 1 0 001 1h10a1 1 0 001-1V4M2 4l6 5 6-5" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Review Request Automation',
    detail: 'Send review requests after every job',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L8 9.2l-3.2 1.5.6-3.5L3 4.7l3.5-.5z" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Appointment Booking',
    detail: 'AI handles booking & reminders 24/7',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#FD5A05" strokeWidth="1.25"/>
        <path d="M5 2v2M11 2v2M2 7h12" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'No-Show Reduction',
    detail: 'Automated confirmation + reminders',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="#FD5A05" strokeWidth="1.25"/>
        <path d="M5.5 8l2 2 3-3" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function AITeaser() {
  return (
    <section className="py-32 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(253,90,5,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-20">

          {/* Left — copy */}
          <div className="flex-1 max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2 bg-[#FD5A05]/[0.09] border border-[#FD5A05]/25 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FD5A05]">AI Automation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -16, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.32, 0.72, 0, 1] }}
              className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
            >
              Stop Doing Manual Work.{' '}
              <span className="text-[#FD5A05]">Let AI Run Your Growth Engine.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
              className="text-lg text-[#8A94B2] leading-relaxed mb-8"
            >
              Local businesses waste hundreds of hours a month on lead follow-ups, appointment reminders, and review requests. Our custom AI workflows handle all of it — instantly.
            </motion.p>

            {/* Button-in-button CTA */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              <Link href="/ai-automation">
                <button className="group flex items-center gap-2 bg-[#FD5A05] hover:bg-[#e85004] text-white font-bold pl-7 pr-3 h-12 rounded-full cursor-pointer shadow-[0_0_25px_rgba(253,90,5,0.3)] hover:shadow-[0_0_45px_rgba(253,90,5,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  Explore AI Automation
                  <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 shrink-0">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right — terminal card with double-bezel */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="flex-1 w-full max-w-md"
          >
            {/* Outer shell */}
            <div
              className="p-[1.5px] rounded-[1.75rem]"
              style={{
                background: 'linear-gradient(135deg, rgba(253,90,5,0.35) 0%, rgba(253,90,5,0.08) 50%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 0 60px rgba(253,90,5,0.12)',
              }}
            >
              {/* Inner core */}
              <div
                className="rounded-[calc(1.75rem-1.5px)] overflow-hidden"
                style={{
                  background: '#090D1A',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
                }}
              >
                {/* Terminal header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]"
                  style={{ background: 'rgba(13,16,32,0.9)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-[#8A94B2] font-mono">automation-dashboard</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Automation rows */}
                <div className="p-5 space-y-3">
                  {automations.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#FD5A05]/30 hover:bg-[#FD5A05]/[0.04] transition-all duration-300 cursor-default group"
                    >
                      {/* Icon double-bezel */}
                      <div className="p-[1px] rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(253,90,5,0.35), rgba(253,90,5,0.08))' }}>
                        <div className="w-9 h-9 rounded-[calc(0.5rem-1px)] flex items-center justify-center"
                          style={{ background: 'rgba(253,90,5,0.12)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)' }}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">{item.label}</p>
                        <p className="text-[#8A94B2] text-xs truncate">{item.detail}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-xs text-green-400 font-medium">ON</span>
                      </div>
                    </motion.div>
                  ))}

                  <div className="pt-2 px-1 flex items-center gap-2 text-xs font-mono text-[#8A94B2]/50">
                    <span className="text-[#FD5A05]/70">$</span>
                    <span>running 4 workflows — 0 errors</span>
                    <span className="w-2 h-4 bg-[#FD5A05]/50 animate-pulse ml-0.5 inline-block" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
