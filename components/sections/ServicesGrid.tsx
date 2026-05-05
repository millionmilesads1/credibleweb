'use client';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    color: '#00D4FF',
    title: 'Local SEO Domination',
    desc: 'Rank in the top 3 of Google Maps with hyper-targeted citation building, local link acquisition, and geo-specific on-page signals.',
    span: 'md:col-span-2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2C7.686 2 5 4.686 5 8c0 5 6 12 6 12s6-7 6-12c0-3.314-2.686-6-6-6z" stroke="#00D4FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="8" r="2" stroke="#00D4FF" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    num: '02',
    color: '#FD5A05',
    title: 'GBP Optimization',
    desc: 'Turn your Google Business Profile into a lead-generation machine with weekly posts, Q&A strategies, and category optimization.',
    span: 'md:col-span-1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L11 15.3l-5.2 2.7 1-5.8L2.6 8.1l5.8-.8z" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    color: '#00D4FF',
    title: 'AI-Powered Automation',
    desc: 'Automate reviews, lead responses, and appointment reminders. Custom AI workflows handle follow-ups instantly — 24/7.',
    span: 'md:col-span-1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="16" height="11" rx="2" stroke="#00D4FF" strokeWidth="1.25"/>
        <path d="M8 7V5a3 3 0 016 0v2" stroke="#00D4FF" strokeWidth="1.25" strokeLinecap="round"/>
        <circle cx="11" cy="12.5" r="1.5" fill="#00D4FF"/>
      </svg>
    ),
  },
  {
    num: '04',
    color: '#FD5A05',
    title: 'Content & Authority',
    desc: 'Data-driven location pages and topical cluster content that establishes true authority and earns lasting search rankings.',
    span: 'md:col-span-2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#FD5A05" strokeWidth="1.25"/>
        <path d="M7 8h8M7 12h5" stroke="#FD5A05" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <section className="py-32 bg-[#060A14] border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FD5A05]/[0.04] blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 bg-[#00D4FF]/[0.07] border border-[#00D4FF]/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00D4FF]">What We Build</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.07, ease: [0.32, 0.72, 0, 1] }}
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight"
          >
            A Full-Stack SEO System —{' '}
            <br className="hidden md:block" />
            <span className="text-gradient">Not Just Keywords</span>
          </motion.h2>
        </div>

        {/* Asymmetric Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.32, 0.72, 0, 1] }}
              className={`group cursor-default ${service.span}`}
            >
              {/* Outer shell — double-bezel */}
              <div
                className="h-full p-[1.5px] rounded-[1.75rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, ${service.color}18 100%)`,
                }}
              >
                {/* Inner core */}
                <div
                  className="h-full rounded-[calc(1.75rem-1.5px)] p-8 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #0D1323 0%, #0A1020 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Hover glow orb */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[calc(1.75rem-1.5px)] pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 25% 25%, ${service.color}0A, transparent 65%)` }}
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${service.color}60, transparent)` }}
                  />

                  <div className="relative z-10">
                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between mb-7">
                      <span
                        className="font-[family-name:var(--font-playfair)] font-bold text-6xl leading-none select-none transition-opacity duration-500 opacity-[0.15] group-hover:opacity-[0.35]"
                        style={{ color: service.color }}
                      >
                        {service.num}
                      </span>
                      {/* Icon double-bezel pill */}
                      <div
                        className="p-[1px] rounded-xl transition-all duration-500"
                        style={{ background: `linear-gradient(135deg, ${service.color}30, ${service.color}08)` }}
                      >
                        <div
                          className="p-3 rounded-[calc(0.75rem-1px)]"
                          style={{
                            background: `${service.color}0E`,
                            boxShadow: `inset 0 1px 1px rgba(255,255,255,0.06)`,
                          }}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">{service.title}</h3>
                    <p className="text-[#8A94B2] leading-relaxed text-sm">{service.desc}</p>

                    {/* Arrow hint on hover */}
                    <div
                      className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
