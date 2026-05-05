'use client';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

export function CTABanner() {
  return (
    <section className="py-32 bg-[#060A14] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/[0.06] via-transparent to-[#FD5A05]/[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,212,255,0.05),transparent)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/[0.07] border border-[#00D4FF]/20 rounded-full px-4 py-1.5 mb-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00D4FF]">Get Started — Free</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-5">
            Ready to Stop<br />
            <span className="text-gradient">Being Invisible?</span>
          </h2>

          <p className="text-xl text-[#8A94B2] mb-10 max-w-xl mx-auto leading-relaxed">
            Get a free, no-fluff SEO audit delivered in 48 hours. No commitment, no sales pitch — just clarity on where you stand.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 mb-10 text-sm text-[#8A94B2]">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="#00D4FF" strokeWidth="1.25"/>
                <path d="M5 8l2 2 4-4" stroke="#00D4FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Delivered in 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2L3 5v4c0 3 2.5 5 5 6 2.5-1 5-3 5-6V5L8 2z" stroke="#00D4FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No commitment required</span>
            </div>
          </div>

          {/* Double-bezel form card */}
          {/* Outer shell — gradient border effect */}
          <div
            className="p-[1.5px] rounded-[2rem]"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.25) 0%, rgba(255,255,255,0.06) 50%, rgba(253,90,5,0.2) 100%)',
            }}
          >
            {/* Inner core */}
            <div
              className="rounded-[calc(2rem-1.5px)] p-7 md:p-9"
              style={{
                background: 'linear-gradient(145deg, #080D1C 0%, #060A14 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <Input
                  placeholder="Your name"
                  className="bg-white/[0.05] border-white/[0.09] text-white placeholder:text-[#8A94B2]/55 h-12 rounded-xl focus:border-[#00D4FF]/50 transition-colors duration-300"
                />
                <Input
                  placeholder="Work email"
                  type="email"
                  className="bg-white/[0.05] border-white/[0.09] text-white placeholder:text-[#8A94B2]/55 h-12 rounded-xl focus:border-[#00D4FF]/50 transition-colors duration-300"
                />
              </div>
              <Input
                placeholder="Your business type (e.g. Dental Clinic, Plumber)"
                className="bg-white/[0.05] border-white/[0.09] text-white placeholder:text-[#8A94B2]/55 h-12 rounded-xl focus:border-[#00D4FF]/50 transition-colors duration-300 mb-4 w-full"
              />

              {/* Button-in-button submit */}
              <button
                className="w-full group flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#00bfe8] text-[#0A0F1E] font-bold h-14 rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_55px_rgba(0,212,255,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer active:scale-[0.99]"
              >
                Get My Free SEO Audit
                <span className="w-8 h-8 rounded-lg bg-[#0A0F1E]/15 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 shrink-0">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 11L11 2M11 2H5.5M11 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#8A94B2]/45">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  );
}
