"use client";

import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-[#071E49] text-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-[#1266F1]" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Credible</span>
                <span className="text-[#1266F1]">Web</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Websites, SEO, and digital marketing built for trust, visibility, and leads. We help businesses build a stronger online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/website-design" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-gray-300 hover:text-white transition-colors text-sm">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/landing-pages" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Landing Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-[#1266F1] shrink-0" />
                <span>Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-[#1266F1] shrink-0" />
                <a href="tel:+919870360630" className="hover:text-white transition-colors">+91 98703 60630</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-[#1266F1] shrink-0" />
                <a href="mailto:hello@credibleweb.in" className="hover:text-white transition-colors">hello@credibleweb.in</a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/919870360630?text=Hi%20CredibleWeb%2C%20I%20want%20a%20Free%20Website%20Growth%20Review%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1266F1] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CredibleWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
