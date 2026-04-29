import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CredibleWeb",
  description: "Ready to improve your website and online presence? Contact CredibleWeb for a Free Website Growth Review or chat with us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-[#071E49] sm:text-5xl mb-6">
            Ready to improve your website and online presence?
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch for a Free Website Growth Review. We&apos;ll look at your current digital presence and provide actionable steps to improve trust, visibility, and leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#071E49] mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp Us</p>
                    <a href="https://wa.me/919870360630?text=Hi%20CredibleWeb%2C%20I%20want%20a%20Free%20Website%20Growth%20Review%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1266F1] transition-colors mt-1 block">
                      Chat instantly
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Phone className="h-5 w-5 text-[#1266F1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <a href="tel:+919870360630" className="text-gray-600 hover:text-[#1266F1] transition-colors mt-1 block">
                      +91 98703 60630
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Mail className="h-5 w-5 text-[#1266F1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:hello@credibleweb.in" className="text-gray-600 hover:text-[#1266F1] transition-colors mt-1 block">
                      hello@credibleweb.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <MapPin className="h-5 w-5 text-[#1266F1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600 mt-1">Delhi NCR & Across India</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Clock className="h-5 w-5 text-[#1266F1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600 mt-1">Mon - Sat, 10:00 AM - 6:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">
              <h2 className="text-2xl font-bold tracking-tight text-[#071E49] mb-6">
                Request Free Website Growth Review
              </h2>
              {/* Note: This form is a frontend placeholder. Connect to your backend endpoint when ready. */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
