"use client";

import React from "react";
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20 overflow-hidden font-body font-light">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white mb-8 inline-block">
            Connect With Us
          </div>
          <BlurText 
            text="Let&apos;s build something credible together" 
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.9] tracking-tight mb-8"
            delay={0.1}
          />
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Have a project in mind? Or just want to audit your current website? Drop us a message, and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="liquid-glass rounded-2xl p-8 border border-white/5">
                <Mail className="h-8 w-8 text-white mb-6" />
                <h3 className="font-heading italic text-white text-2xl mb-2">Email Us</h3>
                <a href="mailto:hello@credibleweb.in" className="text-white/50 hover:text-white transition-colors text-sm break-all">hello@credibleweb.in</a>
              </div>
              <div className="liquid-glass rounded-2xl p-8 border border-white/5">
                <Phone className="h-8 w-8 text-white mb-6" />
                <h3 className="font-heading italic text-white text-2xl mb-2">Call Us</h3>
                <a href="tel:+919870360630" className="text-white/50 hover:text-white transition-colors text-sm">+91 98703 60630</a>
              </div>
              <div className="liquid-glass rounded-2xl p-8 border border-white/5">
                <MessageSquare className="h-8 w-8 text-white mb-6" />
                <h3 className="font-heading italic text-white text-2xl mb-2">WhatsApp</h3>
                <a href="https://wa.me/919870360630" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Chat Now</a>
              </div>
              <div className="liquid-glass rounded-2xl p-8 border border-white/5">
                <MapPin className="h-8 w-8 text-white mb-6" />
                <h3 className="font-heading italic text-white text-2xl mb-2">Location</h3>
                <p className="text-white/50 text-sm">Delhi NCR, India (Global Support)</p>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-2xl border border-white/5">
              <h3 className="font-heading italic text-white text-2xl mb-4">Direct WhatsApp Support</h3>
              <p className="text-white/50 text-sm mb-6">The fastest way to get a response is via WhatsApp. Our team is available from 10 AM to 8 PM IST.</p>
              <a 
                href="https://wa.me/919870360630?text=Hi%20CredibleWeb%2C%20I%20want%20a%20Free%20Website%20Growth%20Review%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white rounded-full px-6 py-3 text-sm font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Chat on WhatsApp <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form Placeholder / Styling */}
          <div className="liquid-glass p-10 rounded-3xl border border-white/5">
            <h3 className="font-heading italic text-white text-3xl mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all" placeholder="+91 98703 60630" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-widest">Project Details</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all resize-none" placeholder="Tell us about your business goals..."></textarea>
              </div>
              <button className="w-full bg-white text-black rounded-xl py-4 font-medium hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
