import { MapPin, Star, Link, Server, FileText, Database, Bot } from 'lucide-react';
import { CTABanner } from '@/components/sections/CTABanner';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: "local-seo",
      title: "Local SEO",
      icon: <MapPin className="w-10 h-10 text-[#00D4FF]" />,
      desc: "Dominate the Google Maps pack in your local service area.",
      bullets: ["Google Maps pack ranking", "Citation building and NAP consistency", "Hyperlocal content targeting", "Competitor gap analysis"],
      image: "/images/generated/service-local-seo.png"
    },
    {
      id: "gbp",
      title: "Google Business Profile Optimization",
      icon: <Star className="w-10 h-10 text-[#7B61FF]" />,
      desc: "Turn your GBP into a high-converting storefront.",
      bullets: ["Profile audit and rebuild", "Review strategy and response templates", "GBP post scheduling", "Photo optimization and Q&A management"],
      image: "/images/generated/service-gbp.png"
    },
    {
      id: "on-page",
      title: "On-Page SEO",
      icon: <FileText className="w-10 h-10 text-[#00D4FF]" />,
      desc: "Ensure every page on your site is built to rank and convert.",
      bullets: ["Keyword architecture per page", "Meta optimization", "Schema markup", "Internal linking strategy"],
      image: "/images/generated/service-on-page.png"
    },
    {
      id: "technical",
      title: "Technical SEO",
      icon: <Server className="w-10 h-10 text-[#7B61FF]" />,
      desc: "A fast, healthy website that search engines love to crawl.",
      bullets: ["Core Web Vitals optimization", "Site speed and mobile performance", "Crawlability and indexing fixes", "Structured data implementation"],
      image: "/images/generated/service-technical.png"
    },
    {
      id: "content",
      title: "Content and Authority",
      icon: <Database className="w-10 h-10 text-[#00D4FF]" />,
      desc: "Build topical authority in your niche with strategic content.",
      bullets: ["Location landing pages", "Service area pages", "Blog content with topical authority maps", "FAQ content for voice search"],
      image: "/images/generated/service-content-authority.png"
    },
    {
      id: "link-building",
      title: "Link Building",
      icon: <Link className="w-10 h-10 text-[#7B61FF]" />,
      desc: "Earn high-quality local links that prove your credibility.",
      bullets: ["Local citation campaigns", "Niche-relevant outreach", "Digital PR for local mentions"],
      image: "/images/generated/service-link-building.png"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#0A0F1E] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            SEO Services That <span className="text-gradient">Actually Move the Needle</span>
          </h1>
          <p className="text-xl text-[#8A94B2] max-w-2xl mx-auto">
            We don&apos;t do generic retainers. We execute targeted strategies built for the specific ways local customers search for your services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} id={service.id} className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0 scroll-mt-24">
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0F1E] border border-white/10 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-[#8A94B2] text-lg mb-8">{service.desc}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <div className="w-2 h-2 rounded-full bg-[#00D4FF]"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="inline-block bg-[#00D4FF] text-[#0A0F1E] hover:bg-[#00D4FF]/90 px-8 py-4 rounded-lg font-bold transition-colors">
                    Get Started
                  </a>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F1629] via-transparent to-transparent hidden md:block"></div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#7B61FF]/20 to-[#00D4FF]/20 p-8 md:p-12 rounded-3xl border border-[#7B61FF]/30 text-center">
              <Bot className="w-16 h-16 text-[#7B61FF] mx-auto mb-6" />
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">AI Automation Integration</h2>
              <p className="text-lg text-[#8A94B2] max-w-2xl mx-auto mb-8">
                Every SEO campaign works better when your lead flow is automated. We integrate AI to capture, nurture, and convert the traffic we generate.
              </p>
              <a href="/ai-automation" className="inline-block bg-[#7B61FF] hover:bg-[#7B61FF]/90 text-white px-8 py-4 rounded-lg font-bold transition-colors">
                View AI Automation Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
