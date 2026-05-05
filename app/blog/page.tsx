import { CTABanner } from '@/components/sections/CTABanner';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    { title: "Local SEO Basics for 2025", category: "SEO", date: "Oct 12, 2024", image: "/images/generated/service-local-seo.png" },
    { title: "The Ultimate GBP Optimization Guide", category: "Guides", date: "Oct 05, 2024", image: "/images/generated/service-gbp.png" },
    { title: "AI Automation Workflows for Plumbers", category: "AI Automation", date: "Sep 28, 2024", image: "/images/generated/industry-plumbers.png" },
    { title: "Why Google Reviews Matter More Than Ever", category: "Tips", date: "Sep 20, 2024", image: "/images/generated/service-content-authority.png" },
    { title: "Schema Markup for Service Businesses", category: "Technical", date: "Sep 15, 2024", image: "/images/generated/service-technical.png" },
    { title: "How to Rank a Gym in Google Maps", category: "Industry Guides", date: "Sep 10, 2024", image: "/images/generated/industry-gyms.png" },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#0A0F1E] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Insights & <span className="text-gradient">Strategies</span>
          </h1>
          <p className="text-xl text-[#8A94B2] max-w-2xl mx-auto">
            Actionable advice on SEO, AI, and growing your local business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {['All', 'SEO', 'AI Automation', 'Industry Guides', 'Tips'].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full border ${i===0 ? 'bg-white text-black border-white' : 'border-white/20 text-white hover:bg-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-[#00D4FF]/50 transition-colors">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#7B61FF] text-sm font-bold uppercase tracking-wider">{post.category}</span>
                    <span className="text-[#8A94B2] text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors">{post.title}</h3>
                  <p className="text-[#8A94B2] mb-6">Learn the exact steps needed to implement this strategy in your local business to drive more leads and revenue.</p>
                  <span className="text-white font-semibold">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
