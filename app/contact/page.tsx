import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 bg-[#0A0F1E] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Let&apos;s Build Your <span className="text-gradient">SEO System</span>
          </h1>
          <p className="text-xl text-[#8A94B2]">Stop leaving money on the table. Book your free audit today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="glass p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-8">Request Your Free Audit</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Full Name" className="bg-white/5 border-white/10 h-14 text-white" />
                <Input placeholder="Work Email" type="email" className="bg-white/5 border-white/10 h-14 text-white" />
              </div>
              <Input placeholder="Phone Number" type="tel" className="bg-white/5 border-white/10 h-14 text-white" />
              
              <select className="w-full bg-white/5 border border-white/10 h-14 text-white rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]">
                <option value="" disabled selected>Business Type</option>
                <option value="gym">Gym / Fitness</option>
                <option value="medical">Medical / Dental</option>
                <option value="trades">Plumber / Trades</option>
                <option value="other">Other Local Service</option>
              </select>

              <select className="w-full bg-white/5 border border-white/10 h-14 text-white rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]">
                <option value="" disabled selected>Monthly Revenue Range</option>
                <option value="0-10k">$0 - $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>

              <Textarea placeholder="Tell us about your current marketing challenges..." className="bg-white/5 border-white/10 min-h-[120px] text-white" />
              
              <Button className="w-full h-14 text-lg bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0A0F1E] font-bold rounded-lg">
                Submit Request
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">What Happens Next?</h3>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7B61FF]/20 text-[#7B61FF] font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">We audit your site in 48 hours</h4>
                  <p className="text-[#8A94B2]">Our team performs a deep-dive analysis of your current SEO health and local visibility.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7B61FF]/20 text-[#7B61FF] font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">We send you a video walkthrough</h4>
                  <p className="text-[#8A94B2]">No boring PDFs. We record a custom video explaining exactly what&apos;s broken and how to fix it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7B61FF]/20 text-[#7B61FF] font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">We build your 90-day plan together</h4>
                  <p className="text-[#8A94B2]">If we&apos;re a good fit, we deploy our systems and start driving results within 90 days.</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#8A94B2]">
                  <Mail className="w-5 h-5 text-[#00D4FF]" />
                  <span>hello@credibleweb.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#8A94B2]">
                  <Phone className="w-5 h-5 text-[#00D4FF]" />
                  <span>+1 (888) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-[#8A94B2]">
                  <MapPin className="w-5 h-5 text-[#00D4FF]" />
                  <span>100 Innovation Drive, Austin, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
