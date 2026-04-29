import { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Zap, ArrowRight, BarChart, MapPin, MessageCircle, Settings, Search, Globe, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & Website Design Services | CredibleWeb",
  description: "Explore our comprehensive range of services including website design, SEO, landing pages, and WhatsApp lead setups designed to improve trust and visibility.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Smartphone,
      title: "Website Design",
      desc: "Fast, modern, mobile-first websites built to create trust and generate enquiries.",
      href: "/website-design"
    },
    {
      icon: Zap,
      title: "Website Redesign",
      desc: "Upgrade outdated websites into professional, lead-focused digital assets.",
      href: "/contact"
    },
    {
      icon: ArrowRight,
      title: "Landing Pages",
      desc: "High-converting landing pages for Meta Ads, Google Ads, campaigns, and lead generation.",
      href: "/landing-pages"
    },
    {
      icon: Search,
      title: "SEO Services",
      desc: "On-page, technical, local SEO, and content structure to improve Google visibility.",
      href: "/seo"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      desc: "Dominate local searches and attract customers right in your service area.",
      href: "/seo"
    },
    {
      icon: Globe,
      title: "Google Business Profile Optimization",
      desc: "Improve local presence, trust, and discoverability for service-area and local businesses.",
      href: "/seo"
    },
    {
      icon: Settings,
      title: "Technical SEO",
      desc: "Ensure your website has the right architecture and speed for Google algorithms.",
      href: "/seo"
    },
    {
      icon: BarChart,
      title: "On-Page SEO",
      desc: "Optimize content and structure for maximum search visibility.",
      href: "/seo"
    },
    {
      icon: ChevronRight,
      title: "Digital Marketing Support",
      desc: "Ongoing support to maintain growth, handle content updates, and improve performance.",
      href: "/contact"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Lead Setup",
      desc: "Clear WhatsApp CTAs, enquiry flows, and contact systems so prospects can reach you faster.",
      href: "/contact"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-[#071E49] sm:text-5xl mb-6">
            Services that improve your online presence
          </h1>
          <p className="text-lg text-gray-600">
            We provide comprehensive digital solutions tailored to help businesses build trust, increase Google visibility, and generate qualified leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
              <service.icon className="h-10 w-10 text-[#1266F1] mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-bold text-[#071E49] mb-3">{service.title}</h2>
              <p className="text-gray-600 flex-grow mb-6">{service.desc}</p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-sm font-semibold text-[#1266F1] hover:text-blue-700 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
