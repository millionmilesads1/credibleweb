'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Jenkins',
    business: 'Jenkins Dental',
    city: 'Austin, TX',
    initials: 'SJ',
    quote:
      'We were barely getting 2 new patients a month from Google. After 3 months with CredibleWeb, we\'re booked out 4 weeks in advance.',
    accent: '#00D4FF',
  },
  {
    name: 'Mike Thompson',
    business: 'Thompson Plumbing',
    city: 'Denver, CO',
    initials: 'MT',
    quote:
      'The AI automation they set up for our emergency calls changed my life. I don\'t miss leads anymore, and the SEO is driving solid traffic.',
    accent: '#FD5A05',
  },
  {
    name: 'Elena Rodriguez',
    business: 'Glow Salon',
    city: 'Miami, FL',
    initials: 'ER',
    quote:
      'Finally an agency that actually shows you the ROI. Our map pack rankings went from #14 to #2 in less than 60 days.',
    accent: '#00D4FF',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(253,90,5,0.06),transparent)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#FD5A05] mb-4"
          >
            Client Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white"
          >
            Real Businesses. Real Rankings.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col p-8 rounded-2xl bg-[#0F1629] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${t.accent}08, transparent 70%)` }}
              />

              {/* Opening quote mark */}
              <svg
                className="w-10 h-10 mb-5 opacity-20"
                fill={t.accent}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              {/* Quote */}
              <p className="text-white/80 italic leading-relaxed mb-8 flex-1 text-base">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: `${t.accent}20`, color: t.accent, border: `1px solid ${t.accent}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#8A94B2] text-xs">
                    {t.business} · {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
