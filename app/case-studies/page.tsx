import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesPage() {
  const cases = [
    { title: "Plumber Reaches #1 on Maps", niche: "Plumbing", result: "312% Traffic Increase", slug: "plumber-seo", image: "/images/generated/industry-plumbers.png" },
    { title: "Salon Doubles Organic Bookings", niche: "Salons", result: "2x Appointments", slug: "salon-seo", image: "/images/generated/industry-salons.png" },
    { title: "Life Coach Fully Books Practice", niche: "Coaching", result: "40 New Clients/Mo", slug: "coach-seo", image: "/images/generated/industry-life-coaches.png" },
    { title: "Dentist Ranks for 'Invisalign'", niche: "Dentists", result: "#1 Ranking in 60 Days", slug: "dentist-seo", image: "/images/generated/industry-dentists.png" },
    { title: "HVAC Dominates Summer Season", niche: "HVAC", result: "500% ROI on Campaign", slug: "hvac-seo", image: "/images/generated/industry-hvac.png" },
    { title: "Gym Reduces Churn by 30%", niche: "Gyms", result: "30% Less Cancellations", slug: "gym-automation", image: "/images/generated/industry-gyms.png" },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#0A0F1E] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Real Results for <span className="text-gradient">Real Businesses</span>
          </h1>
          <p className="text-xl text-[#8A94B2] max-w-2xl mx-auto">
            We don&apos;t just talk about rankings. We deliver measurable revenue growth and operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((cs, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={cs.image} 
                    alt={cs.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629] to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold px-3 py-1 rounded-full">{cs.niche}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{cs.title}</h3>
                  <p className="text-[#22C55E] font-bold text-lg mb-6">{cs.result}</p>
                  <Link href={`/case-studies/${cs.slug}`} className="mt-auto inline-block border border-white/20 text-white text-center py-3 rounded-lg hover:bg-white/10 transition-colors">
                    Read Case Study
                  </Link>
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
