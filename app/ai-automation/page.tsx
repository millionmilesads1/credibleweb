import { CTABanner } from '@/components/sections/CTABanner';
import { Bot, Inbox, Calendar, MessageSquare, UserPlus, RefreshCw, Layers } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AIAutomationPage() {
  const pillars = [
    { title: "Lead Capture & Response", icon: <Inbox className="w-8 h-8" /> },
    { title: "Appointment Booking", icon: <Calendar className="w-8 h-8" /> },
    { title: "Review Generation", icon: <MessageSquare className="w-8 h-8" /> },
    { title: "Client Onboarding", icon: <UserPlus className="w-8 h-8" /> },
    { title: "Win-Back Campaigns", icon: <RefreshCw className="w-8 h-8" /> },
  ];

  const useCases = [
    {
      niche: "Doctors and Medical Clinics",
      title: "Missed Appointment Re-Booking Workflow",
      workflow: "Patient misses appointment → GHL detects no-show → AI sends SMS + email within 15 minutes → offers 3 open slots → patient clicks link → auto-booked in calendar → confirmation sent → reminder 24 hours before",
      outcome: "40% reduction in lost appointments"
    },
    {
      niche: "Dentists",
      title: "Post-Treatment Review Request Automation",
      workflow: "Treatment marked complete in CRM → 2 hours later AI sends personalized SMS → includes Google Review link → if no action in 24 hours, sends follow-up email → if review posted, AI drafts a thank-you reply for dentist approval",
      outcome: "3x more reviews in 60 days"
    },
    {
      niche: "Gyms",
      title: "Free Trial to Membership Conversion",
      workflow: "Free trial booked → Pre-trial email with what to bring → trial day SMS → 2 hours after trial: 'How did it feel?' → positive response: membership offer sent",
      outcome: "40-50% higher free trial conversion"
    },
    {
      niche: "Plumbers",
      title: "Emergency Job Lead Response System",
      workflow: "Lead submits emergency form → AI detects urgency keywords → instant SMS sent to lead within 90 seconds → CRM creates high-priority ticket → on-call plumber notified",
      outcome: "First responder wins the job. Beats competitors by 20 mins."
    },
    {
      niche: "Real Estate Agents",
      title: "Lead Warm-Up Drip Based on Buyer Stage",
      workflow: "Lead captured → AI asks timeframe → routes to different email sequences (urgent vs 180 days) → auto-sends market reports",
      outcome: "Agents stay top-of-mind without manual outreach"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Bot className="w-16 h-16 text-[#7B61FF] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Your Business on Autopilot. <br/>
            <span className="text-gradient">Powered by AI.</span>
          </h1>
          <p className="text-xl text-[#8A94B2] max-w-3xl mx-auto mb-10">
            CredibleWeb builds AI automation workflows that handle lead follow-up, review collection, appointment booking, and client communication — so your team can focus on delivering results.
          </p>
          <a href="#audit" className="inline-block bg-[#7B61FF] hover:bg-[#7B61FF]/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(123,97,255,0.4)]">
            Book a Free Automation Audit
          </a>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8 text-center">What Is AI Automation for Local Businesses?</h2>
          <p className="text-lg text-[#8A94B2] text-center mb-16 max-w-3xl mx-auto">
            Most local businesses are losing leads, missing follow-ups, and spending hours on repetitive tasks that AI can handle in seconds. We use GoHighLevel, Make.com, Zapier, and OpenAI API to automate your growth engine.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24">
            {pillars.map((pillar, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="text-[#00D4FF] mb-4">{pillar.icon}</div>
                <h3 className="font-bold text-white text-sm">{pillar.title}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-playfair font-bold text-white mb-10 text-center">Top AI Automation Use Cases</h2>
          <div className="glass rounded-3xl p-6 md:p-10">
            <Accordion className="w-full">
              {useCases.map((uc, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-[#00D4FF] text-left text-lg font-semibold py-6">
                    {uc.niche}: {uc.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8A94B2] text-base leading-relaxed pb-6">
                    <p className="mb-4"><strong className="text-white">Workflow:</strong> {uc.workflow}</p>
                    <p><strong className="text-[#22C55E]">Outcome:</strong> <span className="text-[#22C55E]/90">{uc.outcome}</span></p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0F1E] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <Layers className="w-16 h-16 text-[#00D4FF] mx-auto mb-6" />
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">Why GoHighLevel + AI Is the Perfect Stack</h2>
          <p className="text-lg text-[#8A94B2] mb-12">
            GoHighLevel acts as the CRM backbone, capturing all leads and communications. By wiring the OpenAI API into GHL workflows, we achieve personalized automation at scale—giving your business a brain that never sleeps.
          </p>
          <div className="p-8 glass rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Lead → CRM → AI Workflow → Outcome</h3>
            <p className="text-[#8A94B2]">Which workflows would save your business 10+ hours per week?</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
