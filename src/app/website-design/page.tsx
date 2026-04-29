import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Smartphone, Layout, Zap, MessagesSquare, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design Services for Businesses | CredibleWeb",
  description: "Professional Website Design for Businesses That Need Trust, Speed & Leads. Get a mobile-first, SEO-ready website.",
};

export default function WebsiteDesignPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#071E49] mb-6">
              Professional Website Design for Businesses That Need <span className="text-[#1266F1]">Trust, Speed & Leads</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We build fast loading, mobile-first business websites that establish credibility and are structured with a strong SEO foundation to capture more leads. Pricing starts from ₹25,000.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-[#1266F1] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
            >
              Get Free Website Growth Review
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
              <Layout className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Professional Layout</h3>
              <p className="text-gray-600 text-sm">Clean, modern business websites designed to build instant trust with your visitors.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Smartphone className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Mobile-First Design</h3>
              <p className="text-gray-600 text-sm">Fully responsive designs ensuring your site looks and performs perfectly on phones.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Zap className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Fast Loading</h3>
              <p className="text-gray-600 text-sm">Optimized code and assets so pages load quickly, keeping visitors engaged.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <ShieldCheck className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">SEO-Ready Structure</h3>
              <p className="text-gray-600 text-sm">Built with search engines in mind. Proper headings, schema, and meta structures.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <MessagesSquare className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">WhatsApp/Call CTA</h3>
              <p className="text-gray-600 text-sm">Clear, sticky call-to-actions to make reaching out incredibly easy for prospects.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="h-8 w-8 text-[#1266F1] mb-4" />
              <h3 className="text-xl font-bold text-[#071E49] mb-2">Lead Forms</h3>
              <p className="text-gray-600 text-sm">Strategically placed lead forms on service pages to capture visitor details efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071E49] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Need a professional website for your business?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Stop losing potential customers to competitors with better websites. Let&apos;s build a digital asset that works for you 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full bg-[#1266F1] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
