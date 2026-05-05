'use client';
import { motion } from 'framer-motion';

const painPoints = [
  {
    num: '01',
    title: "Your competitors rank. You don't.",
    description: "Every day you aren't on Page 1, another local customer calls the business that is. That's revenue you'll never recover.",
    accent: '#00D4FF',
  },
  {
    num: '02',
    title: "You're bleeding money on ads with no foundation.",
    description: "Paid ads stop the moment you stop paying. Organic traffic compounds forever — but only if you build it right.",
    accent: '#FD5A05',
  },
  {
    num: '03',
    title: "Google doesn't trust your website — yet.",
    description: "Without proper signals, citations, and reviews, you're invisible to search engines no matter how good your service is.",
    accent: '#ff5555',
  },
];

const stats = [
  { label: 'Never scroll past Page 1', val: '75%' },
  { label: 'Use maps to find local business', val: '64%' },
  { label: 'Call within 24 hrs of search', val: '78%' },
];

export function ProblemSection() {
  return (
    <section className="py-32 bg-[#060A14] overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2 bg-red-500/[0.09] border border-red-500/25 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-400">The Hard Truth</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -16, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
              className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6"
            >
              Your Website Is Invisible.{' '}
              <span className="text-red-400">Invisibility Kills Businesses.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
              className="text-lg text-[#8A94B2] mb-12 max-w-lg leading-relaxed"
            >
              Most agencies charge high retainers for &quot;exposure&quot; with zero ROI. We focus on the only two metrics that matter: Rankings and Revenue.
            </motion.p>

            <div className="flex flex-col gap-8">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="flex gap-5 items-start group"
                >
                  <span
                    className="font-[family-name:var(--font-playfair)] font-bold text-4xl leading-none shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ color: point.accent }}
                  >
                    {point.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{point.title}</h3>
                    <p className="text-[#8A94B2] text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stat card with double-bezel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute inset-4 bg-gradient-to-br from-[#00D4FF]/12 to-[#FD5A05]/12 rounded-3xl blur-2xl pointer-events-none" />

            {/* Outer shell */}
            <div className="relative w-full max-w-sm p-[1.5px] rounded-[2rem] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-[#00D4FF]/20">
              {/* Inner core */}
              <div
                className="rounded-[calc(2rem-1.5px)] p-10 text-center space-y-6"
                style={{
                  background: 'linear-gradient(145deg, #0E1525 0%, #0B1220 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08)',
                }}
              >
                {/* Big number */}
                <div>
                  <p className="text-[6rem] font-black font-[family-name:var(--font-playfair)] leading-none text-gradient">80%</p>
                  <p className="text-white font-semibold text-base mt-3 leading-snug">
                    of local search clicks go to<br />the <span className="text-[#00D4FF]">Top 3 results</span> on Google
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.07] pt-5 space-y-3">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-sm">
                      <span className="text-[#8A94B2]">{s.label}</span>
                      {/* Mini stat pill */}
                      <span
                        className="text-white font-bold text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]"
                      >
                        {s.val}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#8A94B2]/50">Source: Google Consumer Insights</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
