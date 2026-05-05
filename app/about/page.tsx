import { CTABanner } from '@/components/sections/CTABanner';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-[#0A0F1E] relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">
            We Are Not Just an SEO Agency. <br className="hidden md:block"/>
            <span className="text-gradient">We Are a Growth System.</span>
          </h1>
          <p className="text-xl text-[#8A94B2] leading-relaxed">
            Built by marketers who were frustrated with agencies that over-promised and under-delivered. We believe in transparency, speed, and using the best tools available.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="glass h-[400px] rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#1A233A] to-[#0A0F1E]">
              <Image 
                src="/images/generated/about-team.png" 
                alt="CredibleWeb Team"
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-40"></div>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-[#00D4FF] mb-4 font-semibold">To make local businesses impossible to ignore on Google.</p>
              <p className="text-[#8A94B2] text-lg leading-relaxed">
                The local search landscape is evolving rapidly. Large directories and aggregators are pushing out independent service businesses. Our mission is to arm local business owners with the SEO strategies and AI tools they need to reclaim their market share and build a moat around their business.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="glass p-8 rounded-2xl flex gap-6">
              <div className="bg-[#00D4FF]/10 p-4 rounded-xl h-fit">
                <Target className="w-8 h-8 text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                <p className="text-[#8A94B2]">We show you exactly what we do, why we do it, and the data that proves it works.</p>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl flex gap-6">
              <div className="bg-[#7B61FF]/10 p-4 rounded-xl h-fit">
                <Zap className="w-8 h-8 text-[#7B61FF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Results over Reports</h3>
                <p className="text-[#8A94B2]">Vanity metrics don&apos;t pay your bills. We optimize for leads, bookings, and closed revenue.</p>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl flex gap-6">
              <div className="bg-[#22C55E]/10 p-4 rounded-xl h-fit">
                <Lightbulb className="w-8 h-8 text-[#22C55E]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-First Thinking</h3>
                <p className="text-[#8A94B2]">If a task can be automated perfectly, we automate it. This keeps us fast and your business efficient.</p>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl flex gap-6">
              <div className="bg-[#ff3333]/10 p-4 rounded-xl h-fit">
                <Users className="w-8 h-8 text-[#ff3333]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Niche Expertise</h3>
                <p className="text-[#8A94B2]">We focus exclusively on local service businesses because we know the playbook inside out.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-playfair font-bold text-white mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Sterling", role: "Founder & CEO", image: "/images/generated/team-alex-sterling.png" },
              { name: "Sarah Chen", role: "Head of AI Automation", image: "/images/generated/team-sarah-chen.png" },
              { name: "Marcus Thorne", role: "Director of SEO", image: "/images/generated/team-marcus-thorne.png" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full bg-[#1A233A] mb-6 border-4 border-transparent group-hover:border-[#00D4FF]/30 transition-all overflow-hidden relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00D4FF]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
