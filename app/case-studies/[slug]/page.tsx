import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function SingleCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0A0F1E] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/case-studies" className="inline-flex items-center text-[#00D4FF] hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          <div className="mb-6"><span className="bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-bold px-3 py-1 rounded-full capitalize">{slug.split('-')[0]}</span></div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          <div className="flex gap-8 p-6 glass rounded-2xl mt-12 border-[#22C55E]/30">
            <div>
              <p className="text-sm text-[#8A94B2] mb-1">Timeframe</p>
              <p className="text-white font-bold text-xl">90 Days</p>
            </div>
            <div>
              <p className="text-sm text-[#8A94B2] mb-1">Result</p>
              <p className="text-[#22C55E] font-bold text-xl">Massive Growth</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-[#060A14] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-invert prose-lg">
          <h2>The Challenge</h2>
          <p className="text-[#8A94B2]">Prior to working with CredibleWeb, the client struggled with visibility in their local area, losing high-value leads to competitors who dominated Google Maps.</p>
          
          <h2>The Strategy</h2>
          <p className="text-[#8A94B2]">We deployed a full-stack SEO system consisting of GBP optimization, hyper-local landing pages, and a robust AI automation workflow to capture and nurture leads instantly.</p>

          <h2>The Results</h2>
          <ul className="text-[#8A94B2]">
            <li>Tripled organic traffic in 3 months</li>
            <li>Ranked #1 for 5 primary target keywords</li>
            <li>Automated 90% of lead follow-ups</li>
          </ul>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
