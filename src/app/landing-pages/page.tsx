"use client";

import React from "react";
import { Zap, Target, MousePointer2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function LandingPagesPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Conversion Service
          </div>
          <BlurText 
            text="High-Converting Landing Pages" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Stop wasting ad spend on pages that don&apos;t convert. We build dedicated landing pages designed for one thing: getting you leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-heading italic text-white tracking-tight">The "Single Purpose" Approach</h2>
            <p className="text-white/60 text-base leading-relaxed">
              A landing page isn&apos;t a website. It&apos;s a focused path from a click to a customer. We remove distractions and guide your prospects toward the action you want them to take.
            </p>
            <div className="space-y-4">
              {[
                "Optimized for Meta & Google Ads",
                "Single Clear Call-to-Action (CTA)",
                "Social Proof & Trust Integration",
                "Frictionless Lead Capture Forms",
                "Direct-to-WhatsApp Integration",
                "Mobile-Optimized for Ad Traffic"
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
              <Target className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Targeted</h3>
              <p className="text-sm text-white/50">Designed specifically for the audience of your ad campaigns.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5">
              <Zap className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Fast</h3>
              <p className="text-sm text-white/50">Sub-second load times to prevent bounce rate from ad clicks.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-8 border border-white/5 sm:col-span-2">
              <MousePointer2 className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-2">Conversion</h3>
              <p className="text-sm text-white/50">Every element tested for maximum click-through and enquiry rates.</p>
            </div>
          </div>
        </div>

        <div className="liquid-glass-strong rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Running ads but no leads?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Let us audit your current landing page. We&apos;ll tell you exactly where the friction is and how to fix it.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Audit My Landing Page <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
