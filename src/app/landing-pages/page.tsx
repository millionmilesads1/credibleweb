import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Zap, MessageSquare, ShieldCheck, UserPlus, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
  title: "Landing Page Design for Ads & Lead Generation | CredibleWeb",
  description: "Landing Pages Built to Convert Visitors into Leads. High-converting pages for Meta Ads and Google Ads campaigns.",
};

export default function LandingPagesPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#071E49] mb-6">
              Landing Pages Built to <span className="text-[#1266F1]">Convert Visitors into Leads</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stop wasting ad spend on pages that don&apos;t convert. We design high-speed, trust-building landing pages optimized specifically for your Meta Ads and Google Ads campaigns.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-[#1266F1] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
            >
              Discuss Your Campaign
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Target className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Campaign Specific</h3>
              <p className="text-gray-600 text-sm">Messaging tailored precisely to match your ad copy, ensuring a seamless user journey.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <MousePointerClick className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Meta & Google Ads</h3>
              <p className="text-gray-600 text-sm">Layouts optimized for traffic from specific ad networks to maximize Quality Score and relevance.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <UserPlus className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Lead Forms</h3>
              <p className="text-gray-600 text-sm">Frictionless forms designed to capture visitor information without causing them to bounce.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <MessageSquare className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">WhatsApp CTA</h3>
              <p className="text-gray-600 text-sm">Direct-to-WhatsApp buttons for visitors who prefer instant messaging over filling forms.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <ShieldCheck className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Trust Sections</h3>
              <p className="text-gray-600 text-sm">Strategic placement of reviews, guarantees, and credentials to overcome visitor skepticism.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Zap className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Speed Optimization</h3>
              <p className="text-gray-600 text-sm">Lightning-fast load times crucial for mobile ad traffic, preventing expensive drop-offs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071E49] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Running Ads without a Dedicated Landing Page?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Get a landing page designed specifically to convert your paid traffic into profitable leads.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full bg-[#1266F1] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
          >
            Start Converting
          </Link>
        </div>
      </section>
    </div>
  );
}
