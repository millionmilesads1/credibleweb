"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-4xl">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Our Story
          </div>
          <BlurText 
            text="A practical team focused on your Digital Growth" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            We aren&apos;t a massive agency selling empty promises. CredibleWeb is a dedicated team of developers, SEO specialists, and strategists who believe your website should actually work for your business.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-heading italic text-white tracking-tight">Why we started CredibleWeb</h2>
            <div className="space-y-6 text-white/60 text-base leading-relaxed">
              <p>
                Too many businesses settle for websites that look like digital brochures but do nothing to generate enquiries. They spend money on designs that don&apos;t load fast, lack proper SEO structure, and make it difficult for prospects to contact them.
              </p>
              <p>
                We saw a gap for a practical, business-focused approach to web design and digital marketing. 
              </p>
              <p className="text-white font-medium italic">
                At CredibleWeb, we help businesses improve online trust, visibility, and enquiries through modern websites, structured SEO, and conversion-focused landing pages.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-8 border border-white/5">
              <ShieldCheck className="h-10 w-10 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-3">Built on Trust</h3>
              <p className="text-sm text-white/50 leading-relaxed">We design professional interfaces that make your business look credible instantly.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5">
              <TrendingUp className="h-10 w-10 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-3">Focused on Visibility</h3>
              <p className="text-sm text-white/50 leading-relaxed">Our code and structures are optimized to help you rank higher on Google.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5 sm:col-span-2">
              <Users className="h-10 w-10 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-3">Designed for Leads</h3>
              <p className="text-sm text-white/50 leading-relaxed">From clear WhatsApp flows to strategic lead forms, our goal is to get your phone ringing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="liquid-glass-strong rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Let&apos;s improve your digital presence</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Ready for a website that actually generates leads and builds trust? Let&apos;s start with a free review.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Get Free Growth Review <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
