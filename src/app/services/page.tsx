"use client";

import React from "react";
import { Smartphone, Zap, ArrowRight, BarChart, MapPin, MessageCircle, Settings, Search, Globe, ChevronRight, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { icon: Smartphone, title: "Website Design", desc: "Fast, modern, mobile-first websites built to create trust and generate enquiries.", href: "/website-design" },
    { icon: Zap, title: "Website Redesign", desc: "Upgrade outdated websites into professional, lead-focused digital assets.", href: "/contact" },
    { icon: ArrowRight, title: "Landing Pages", desc: "High-converting landing pages for Meta Ads, Google Ads, and lead generation.", href: "/landing-pages" },
    { icon: Search, title: "SEO Services", desc: "On-page, technical, local SEO, and content structure to improve Google visibility.", href: "/seo" },
    { icon: MapPin, title: "Local SEO", desc: "Dominate local searches and attract customers right in your service area.", href: "/seo" },
    { icon: Globe, title: "Google Business Profile", desc: "Improve local presence and discoverability for service-area businesses.", href: "/seo" },
    { icon: Settings, title: "Technical SEO", desc: "Ensure your website has the right architecture and speed for Google.", href: "/seo" },
    { icon: BarChart, title: "On-Page SEO", desc: "Optimize content and structure for maximum search visibility.", href: "/seo" },
    { icon: MessageCircle, title: "WhatsApp Lead Setup", desc: "Clear WhatsApp CTAs and enquiry flows so prospects can reach you faster.", href: "/contact" }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Our Expertise
          </div>
          <BlurText 
            text="Services that improve your online presence" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            We provide comprehensive digital solutions tailored to help businesses build trust, increase Google visibility, and generate qualified leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="liquid-glass rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all group">
              <service.icon className="h-10 w-10 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-heading italic text-white mb-3">{service.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{service.desc}</p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-white hover:text-white/70 transition-colors"
              >
                Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-32 liquid-glass-strong rounded-3xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading italic text-white mb-6">Ready to scale your business?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Book a free strategy session today. We&apos;ll audit your current presence and show you exactly where the growth is.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Get Started <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
