"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <div className="flex items-center pointer-events-auto">
        <Link href="/" className="text-white text-2xl font-bold italic font-heading tracking-tight">
          CredibleWeb
        </Link>
      </div>
      
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 pointer-events-auto">
        <Link href="/" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Home</Link>
        <Link href="/services" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Services</Link>
        <Link href="/work" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Work</Link>
        <Link href="/process" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Process</Link>
        <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Pricing</Link>
        <Link href="/contact" className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm flex items-center font-medium ml-2 transition-transform hover:scale-105">
          Get Started <ArrowUpRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      <div className="md:hidden pointer-events-auto">
        <button
          className="p-2 liquid-glass rounded-full text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 liquid-glass rounded-2xl p-4 flex flex-col gap-2 pointer-events-auto md:hidden border border-white/10">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-white font-body hover:bg-white/5 rounded-xl transition-colors">Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-white font-body hover:bg-white/5 rounded-xl transition-colors">Services</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-white font-body hover:bg-white/5 rounded-xl transition-colors">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-white font-body hover:bg-white/5 rounded-xl transition-colors">Contact</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black rounded-xl px-4 py-3 mt-2 text-sm flex items-center justify-center font-medium">
            Get Started <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
