import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CredibleWeb",
  description: "CredibleWeb is a practical website, SEO, and digital growth team. We help businesses improve online trust, visibility, and enquiries.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#071E49] mb-6">
              A practical team focused on your <span className="text-[#1266F1]">Digital Growth</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We aren&apos;t a massive agency selling empty promises. CredibleWeb is a dedicated team of website developers, SEO specialists, and digital strategists who believe your website should actually work for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#071E49] mb-6">
                Why we started CredibleWeb
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Too many businesses settle for websites that look like digital brochures but do nothing to generate enquiries. They spend money on designs that don&apos;t load fast, lack proper SEO structure, and make it difficult for prospects to contact them.
                </p>
                <p>
                  We saw a gap for a practical, business-focused approach to web design and digital marketing. 
                </p>
                <p className="font-medium text-[#071E49]">
                  At CredibleWeb, we help businesses improve online trust, visibility, and enquiries through modern websites, structured SEO, and conversion-focused landing pages.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <ShieldCheck className="h-10 w-10 text-[#1266F1] mb-4" />
                <h3 className="font-bold text-[#071E49] text-lg mb-2">Built on Trust</h3>
                <p className="text-sm text-gray-600">We design professional interfaces that make your business look credible instantly.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <TrendingUp className="h-10 w-10 text-[#1266F1] mb-4" />
                <h3 className="font-bold text-[#071E49] text-lg mb-2">Focused on Visibility</h3>
                <p className="text-sm text-gray-600">Our code and structures are optimized to help you rank higher on Google.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 sm:col-span-2">
                <Users className="h-10 w-10 text-[#1266F1] mb-4" />
                <h3 className="font-bold text-[#071E49] text-lg mb-2">Designed for Leads</h3>
                <p className="text-sm text-gray-600">From clear WhatsApp flows to strategic lead forms, our goal is to get your phone ringing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071E49] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Let&apos;s improve your digital presence</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Ready for a website that actually generates leads and builds trust?
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full bg-[#1266F1] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
          >
            Get Free Website Growth Review
          </Link>
        </div>
      </section>
    </div>
  );
}
