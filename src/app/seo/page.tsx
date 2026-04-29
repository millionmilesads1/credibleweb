"use client";

import React from "react";
import { Search, TrendingUp, BarChart3, Globe, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function SeoPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Growth Service
          </div>
          <BlurText 
            text="Search Engine Optimization (SEO)" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Visibility is the currency of the digital age. We help your business rank higher on Google for the keywords that actually drive revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Search, title: "Keyword Strategy", desc: "Finding the exact phrases your customers are searching for right now." },
            { icon: BarChart3, title: "On-Page SEO", desc: "Optimizing your content, headings, and meta tags for search algorithms." },
            { icon: TrendingUp, title: "Local SEO", desc: "Dominating local search results and Google Maps in your service area." },
            { icon: Globe, title: "Technical SEO", desc: "Ensuring your site architecture and speed meet Google's highest standards." },
            { icon: CheckCircle2, title: "Content Audit", desc: "Refining your existing pages to perform better in search rankings." },
            { icon: ArrowUpRight, title: "Lead Generation", desc: "Driving organic traffic that actually converts into paying customers." }
          ].map((item, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all">
              <item.icon className="h-8 w-8 text-white mb-6" />
              <h3 className="font-heading italic text-white text-2xl mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="liquid-glass-strong rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Not ranking on page 1?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Let us perform a free SEO audit of your current website. We&apos;ll show you exactly why your competitors are outranking you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Get Free SEO Audit <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
