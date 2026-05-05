'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Dumbbell, Scissors, Wrench, Zap, Heart, GraduationCap,
  Stethoscope, Scale, Home, Calculator, Bug, TreePine,
  Hammer, Thermometer, Dog, User, Landmark, Utensils, ArrowRight,
} from 'lucide-react';

const industries = [
  { name: 'Gyms & Fitness', icon: Dumbbell, slug: 'gyms' },
  { name: 'Salons & Spas', icon: Scissors, slug: 'salons' },
  { name: 'Plumbers', icon: Wrench, slug: 'plumbers' },
  { name: 'Electricians', icon: Zap, slug: 'electricians' },
  { name: 'Life Coaches', icon: Heart, slug: 'life-coaches' },
  { name: 'Business Coaches', icon: GraduationCap, slug: 'coaches' },
  { name: 'Doctors', icon: Stethoscope, slug: 'doctors' },
  { name: 'Dental Clinics', icon: Stethoscope, slug: 'dentists' },
  { name: 'Lawyers', icon: Scale, slug: 'lawyers' },
  { name: 'Real Estate', icon: Home, slug: 'real-estate' },
  { name: 'Accountants', icon: Calculator, slug: 'accountants' },
  { name: 'Pest Control', icon: Bug, slug: 'pest-control' },
  { name: 'Landscapers', icon: TreePine, slug: 'landscapers' },
  { name: 'Roofers', icon: Hammer, slug: 'roofers' },
  { name: 'HVAC', icon: Thermometer, slug: 'hvac' },
  { name: 'Vets', icon: Dog, slug: 'vets' },
  { name: 'Therapists', icon: User, slug: 'therapists' },
  { name: 'Financial Advisors', icon: Landmark, slug: 'financial-advisors' },
  { name: 'Restaurants', icon: Utensils, slug: 'restaurants' },
];

export function IndustryGrid() {
  return (
    <section className="py-28 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,212,255,0.04),transparent)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#FD5A05] mb-4"
          >
            Your Industry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white"
          >
            Built for Businesses That{' '}
            <span className="text-gradient">Serve Locally</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto"
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link
                key={i}
                href={`/industries/${ind.slug}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#8A94B2] hover:text-white hover:bg-[#00D4FF]/[0.08] hover:border-[#00D4FF]/30 transition-all duration-200 cursor-pointer group text-sm font-medium"
              >
                <Icon className="w-3.5 h-3.5 text-[#8A94B2] group-hover:text-[#00D4FF] transition-colors" />
                {ind.name}
              </Link>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#8A94B2] hover:text-[#00D4FF] transition-colors cursor-pointer group"
          >
            Don&apos;t see your niche? We cover 50+ industries
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
