import { industryData } from '@/lib/industries';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';
import { CheckCircle, AlertCircle, Zap, ArrowRight } from 'lucide-react';

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = industryData[slug];

  if (!data) {
    return notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-[#0A0F1E] to-[#0A0F1E]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <Link href="/#industries" className="inline-flex items-center gap-2 text-[#00D4FF] mb-8 hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Industries
          </Link>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-[#8A94B2] leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-white mb-8 flex items-center gap-3">
                  <AlertCircle className="text-red-500 w-8 h-8" /> Common Challenges
                </h2>
                <div className="grid gap-4">
                  {data.painPoints.map((point, i) => (
                    <div key={i} className="glass p-5 rounded-xl border-l-4 border-red-500/50">
                      <p className="text-[#F0F4FF] font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-bold text-white mb-8 flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] w-8 h-8" /> Our SEO & Growth Solutions
                </h2>
                <div className="grid gap-4">
                  {data.solutions.map((solution, i) => (
                    <div key={i} className="glass p-5 rounded-xl border-l-4 border-[#22C55E]/50">
                      <p className="text-[#F0F4FF] font-medium">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass aspect-square rounded-3xl overflow-hidden relative">
                <Image 
                  src={data.accentImage} 
                  alt="Industry success" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Floating Automation Card */}
              <div className="absolute -bottom-8 -left-8 md:-left-16 glass p-8 rounded-2xl max-w-sm border-[#7B61FF]/30 shadow-2xl z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#7B61FF]/20 flex items-center justify-center">
                    <Zap className="text-[#7B61FF] w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">AI Automation Win</h3>
                </div>
                <p className="text-[#8A94B2] text-sm leading-relaxed">
                  {data.automationExample}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
