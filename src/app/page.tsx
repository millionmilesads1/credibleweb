"use client";

import React from "react";
import { ArrowUpRight, Zap, Palette, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import { HlsVideo } from "@/components/ui/hls-video";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-visible" style={{ height: '1000px' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 w-full h-auto object-contain z-0"
          style={{ top: '20%' }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          poster="/images/hero_bg.jpeg"
        />
        <div className="absolute inset-0 bg-black/5 z-0" />
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-b from-transparent to-black z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 mx-auto w-full h-full" style={{ paddingTop: '150px' }}>
          
          <div className="liquid-glass rounded-full px-1 py-1 mb-8 inline-flex items-center gap-3">
            <div className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</div>
            <span className="text-xs font-medium text-white font-body pr-3">Introducing AI-powered web design.</span>
          </div>

          <BlurText 
            text="Websites, SEO & Digital Marketing Built for Trust, Visibility & Leads" 
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-5xl tracking-[-2px] md:tracking-[-4px] justify-center"
            delay={0.1}
          />

          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-sm md:text-base text-white font-body font-light leading-tight max-w-2xl"
          >
            CredibleWeb helps businesses create fast, modern websites, improve Google visibility, and generate more calls, WhatsApp enquiries, bookings, and qualified leads.
          </motion.p>

          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Link href="/contact" className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 font-medium text-white transition-transform hover:scale-105">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="mt-auto pb-12 pt-16 flex flex-col items-center">
            <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white font-body mb-8">
              Trusted by the teams behind
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80">
              <span className="text-2xl md:text-3xl font-heading italic text-white">Stripe</span>
              <span className="text-2xl md:text-3xl font-heading italic text-white">Vercel</span>
              <span className="text-2xl md:text-3xl font-heading italic text-white">Linear</span>
              <span className="text-2xl md:text-3xl font-heading italic text-white">Notion</span>
              <span className="text-2xl md:text-3xl font-heading italic text-white">Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. START SECTION (Process) */}
      <section id="how-it-works" className="relative w-full min-h-[500px] flex items-center justify-center py-32 bg-black">
        <HlsVideo 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
            You dream it. We ship it.
          </h2>
          <p className="text-white/60 font-body font-light text-sm md:text-base mb-10">
            Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
          </p>
          <Link href="/contact" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </section>

      {/* 3. FEATURES CHESS (Work/Capabilities) */}
      <section id="capabilities" className="relative w-full py-24 bg-black px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-32">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading italic text-white">Designed to convert. Built to perform.</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed">
                Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
              </p>
              <Link href="/services" className="liquid-glass-strong inline-flex rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105 mt-2">
                Learn more
              </Link>
            </div>
            <div className="flex-1 w-full liquid-glass rounded-2xl overflow-hidden p-2">
              <img src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" alt="Feature preview" className="w-full h-auto rounded-xl" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-heading italic text-white">It gets smarter. Automatically.</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed">
                Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
              </p>
              <Link href="/services" className="liquid-glass-strong inline-flex rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105 mt-2">
                See how it works
              </Link>
            </div>
            <div className="flex-1 w-full liquid-glass rounded-2xl overflow-hidden p-2">
              <img src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" alt="Feature preview" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="relative w-full py-24 bg-black px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Days, Not Months
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast. Because waiting isn&apos;t a strategy." },
            { icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable." },
            { icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance. Results you can measure." },
            { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included." }
          ].map((feature, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col items-start text-left">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 font-body">{feature.title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="relative w-full py-32 bg-black px-6">
        <HlsVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'saturate(0)' }}
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">200+</div>
              <div className="text-white/60 font-body font-light text-sm">Sites launched</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">98%</div>
              <div className="text-white/60 font-body font-light text-sm">Client satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">3.2x</div>
              <div className="text-white/60 font-body font-light text-sm">More conversions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">5 days</div>
              <div className="text-white/60 font-body font-light text-sm">Average delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="relative w-full py-24 bg-black px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "A complete rebuild in five days. The result outperformed everything we&apos;d spent months building before.", name: "Sarah Chen", role: "CEO, Luminary" },
            { quote: "Conversions up 4x. That&apos;s not a typo. The design just works differently when it&apos;s built on real data.", name: "Marcus Webb", role: "Head of Growth, Arcline" },
            { quote: "They didn&apos;t just design our site. They defined our brand. World-class doesn&apos;t begin to cover it.", name: "Elena Voss", role: "Brand Director, Helix" }
          ].map((item, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-white/80 font-body font-light text-sm italic mb-8 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <div className="text-white font-body font-medium text-sm">{item.name}</div>
                <div className="text-white/50 font-body font-light text-xs">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA + FOOTER (Pricing) */}
      <section id="pricing" className="relative w-full pt-32 pb-8 bg-black flex flex-col justify-between">
        <HlsVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 mt-16 mb-32">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-6">
            Your next website starts here.
          </h2>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-10">
            Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="liquid-glass-strong rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-105">
              Book a Call
            </Link>
            <Link href="/pricing" className="bg-white text-black rounded-full px-6 py-3 font-medium transition-transform hover:scale-105">
              View Pricing
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 mt-auto">
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/40 text-xs font-body">
              © {new Date().getFullYear()} CredibleWeb. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-white/40 text-xs font-body">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
