"use client";

import React from "react";
import { CheckCircle2, Smartphone, Zap, Palette, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function WebsiteDesignPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Core Service
          </div>
          <BlurText 
            text="Professional Website Design & Redesign" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            We don&apos;t just build websites; we create digital assets that build trust and convert visitors into customers. Fast, responsive, and SEO-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading italic text-white tracking-tight">Our Design Philosophy</h2>
              <p className="text-white/60 text-base leading-relaxed">
                In today&apos;s market, your website is your primary salesperson. If it looks outdated or is hard to navigate on a phone, you&apos;re losing money every single day.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Mobile-First Responsive Design",
                "Conversion-Optimized Layouts",
                "Lightning Fast Loading Speeds",
                "Integrated WhatsApp Enquiry Flows",
                "Clean, Modern Minimalist Aesthetic",
                "Easy-to-Manage Content Structures"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-8 border border-white/5">
              <Smartphone className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Responsive</h3>
              <p className="text-sm text-white/50">Perfectly optimized for every screen size, from smartphones to desktops.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5">
              <Zap className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Fast</h3>
              <p className="text-sm text-white/50">Optimized code and image compression for near-instant load times.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5 sm:col-span-2">
              <Palette className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Modern</h3>
              <p className="text-sm text-white/50">Aesthetics that align with 2024 luxury and premium design standards.</p>
            </div>
          </div>
        </div>

        <div className="liquid-glass-strong rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Need a website that works?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Get a free quote for your project. We typically deliver initial concepts within 5-7 business days.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Request a Quote <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
