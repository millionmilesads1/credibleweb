import Link from 'next/link';
import Image from 'next/image';
import { Globe, Users, Video, MessageCircle } from 'lucide-react';

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Users, label: 'Facebook', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
  { icon: MessageCircle, label: 'Instagram', href: '#' },
];

const footerLinks = {
  Services: [
    { name: 'Local SEO', href: '/services#local-seo' },
    { name: 'GBP Optimization', href: '/services#gbp' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'Content & Authority', href: '/services#content' },
    { name: 'Technical SEO', href: '/services#technical' },
  ],
  Industries: [
    { name: 'Gyms & Fitness', href: '/industries/gyms' },
    { name: 'Doctors', href: '/industries/doctors' },
    { name: 'Plumbers', href: '/industries/plumbers' },
    { name: 'Lawyers', href: '/industries/lawyers' },
    { name: 'Real Estate', href: '/industries/real-estate' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FD5A05]/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center cursor-pointer w-fit">
              <Image
                src="/CredibleWeb_logo.png"
                alt="CredibleWeb"
                width={240}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[#4A5568] max-w-xs leading-relaxed text-sm">
              AI-powered Local SEO systems that get service businesses found, trusted, and chosen — without paid ads.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-[#4A5568] hover:text-[#FD5A05] hover:bg-[#FD5A05]/[0.08] hover:border-[#FD5A05]/30 transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[#0A0F1E] font-semibold text-sm mb-5 font-playfair">{heading}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#4A5568] hover:text-[#FD5A05] transition-colors text-sm cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#4A5568] text-xs">
            © {year} CredibleWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#4A5568]">
            <Link href="/privacy" className="hover:text-[#FD5A05] transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FD5A05] transition-colors cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
