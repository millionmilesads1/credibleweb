'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries/doctors' },
  { name: 'AI Automation', path: '/ai-automation' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
];

const allLinks = [{ name: 'Home', path: '/' }, ...navLinks, { name: 'Contact', path: '/contact' }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* pointer-events-none on wrapper so floating pill doesn't block content below */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className={`pointer-events-auto flex items-center justify-between px-5 py-3 rounded-full border backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] w-full max-w-5xl ${
            scrolled
              ? 'bg-white/95 border-gray-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]'
              : 'bg-white/85 border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 cursor-pointer">
            <Image
              src="/CredibleWeb_logo.png"
              alt="CredibleWeb"
              width={260}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${
                  pathname === link.path
                    ? 'text-[#00D4FF] bg-[#00D4FF]/10'
                    : 'text-gray-800 hover:text-gray-950 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Button-in-button CTA */}
            <Link href="/contact" className="hidden md:block">
              <button className="group flex items-center gap-2 bg-[#00D4FF] hover:bg-[#00bfe8] text-[#0A0F1E] font-bold text-sm pl-5 pr-2 py-2 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.55)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer active:scale-[0.97]">
                Free Audit
                <span className="w-6 h-6 rounded-full bg-[#0A0F1E]/15 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </Link>

            {/* Morphing hamburger — CSS spans rotate to X */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-5 h-[14px] flex flex-col justify-between">
                <span className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Full-screen glass overlay for mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[60] bg-[#040710]/96 backdrop-blur-3xl flex flex-col"
          >
            {/* Overlay top bar */}
            <div className="flex justify-between items-center px-6 pt-5 pb-4 border-b border-white/[0.06]">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center cursor-pointer">
                <Image src="/CredibleWeb_logo.png" alt="CredibleWeb" width={40} height={40} className="h-10 w-10 object-contain" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <div className="relative w-5 h-5">
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full -translate-y-1/2 rotate-45" />
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rounded-full -translate-y-1/2 -rotate-45" />
                </div>
              </button>
            </div>

            {/* Staggered mask-reveal nav links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-0.5 overflow-y-auto py-8">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.055, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-[2.6rem] font-bold py-2.5 leading-tight transition-colors duration-200 cursor-pointer font-[family-name:var(--font-playfair)] ${
                      pathname === link.path ? 'text-[#00D4FF]' : 'text-white/65 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="px-6 pb-10 pt-4 border-t border-white/[0.06]"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full group flex items-center justify-center gap-3 bg-[#00D4FF] hover:bg-[#00bfe8] text-[#0A0F1E] font-bold text-lg py-4 rounded-full shadow-[0_0_30px_rgba(0,212,255,0.3)] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  Get Free SEO Audit
                  <span className="w-8 h-8 rounded-full bg-[#0A0F1E]/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
