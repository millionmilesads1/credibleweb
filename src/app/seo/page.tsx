import { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, Settings, FileText, BarChart, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services for Local Businesses | CredibleWeb",
  description: "SEO Services to Improve Google Visibility and Long-Term Enquiries. We handle on-page, technical, local SEO, and Google Business Profile optimization.",
};

export default function SEOPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#071E49] mb-6">
              SEO Services to Improve Google Visibility and <span className="text-[#1266F1]">Long-Term Enquiries</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We help local businesses, clinics, and consultants grow their organic traffic through structured SEO. Rank higher for the searches that actually bring you customers.
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

      {/* Services Breakdown */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <MapPin className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">Local SEO</h3>
              <p className="text-gray-600 text-sm">Targeted strategies to dominate search results in your city or neighborhood. Be the first choice for local searches.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <Search className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">Google Business Profile</h3>
              <p className="text-gray-600 text-sm">Complete optimization of your Google Maps listing to build trust, collect reviews, and drive foot traffic or calls.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <FileText className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">On-Page SEO</h3>
              <p className="text-gray-600 text-sm">Optimizing your website&apos;s content structure, service page SEO, headings, and metadata for relevance.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <Settings className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">Technical SEO</h3>
              <p className="text-gray-600 text-sm">Improving site speed, indexability, XML sitemaps, robots.txt, and schema markup for search engines.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <BarChart className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">Search Visibility</h3>
              <p className="text-gray-600 text-sm">Comprehensive tracking of keyword rankings and organic traffic growth over time.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <TrendingUp className="h-10 w-10 text-[#1266F1] mb-6" />
              <h3 className="text-xl font-bold text-[#071E49] mb-3">Organic Growth</h3>
              <p className="text-gray-600 text-sm">Building a sustainable digital presence that continually brings in leads without constant ad spend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#071E49] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to rank higher on Google?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s evaluate your current search visibility and create a plan to capture more organic traffic.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center rounded-full bg-[#1266F1] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-all"
          >
            Chat with our SEO team
          </Link>
        </div>
      </section>
    </div>
  );
}
