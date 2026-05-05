export interface IndustryContent {
  title: string;
  description: string;
  heroImage: string;
  accentImage: string;
  painPoints: string[];
  solutions: string[];
  automationExample: string;
}

export const industryData: Record<string, IndustryContent> = {
  gyms: {
    title: "SEO & Automation for Gyms & Fitness Studios",
    description: "In the fitness industry, visibility is everything. We help gyms dominate local search, ensuring that when someone searches for 'gym near me', your studio is the first thing they see. Beyond rankings, we automate your lead intake to ensure every inquiry turns into a trial membership.",
    heroImage: "/images/generated/industry-gyms.png",
    accentImage: "/images/generated/industry-gyms.png",
    painPoints: [
      "High competition from big-box franchises",
      "Low lead-to-member conversion rates",
      "Inconsistent organic traffic to class schedules",
      "Lack of automated follow-up for trial signups"
    ],
    solutions: [
      "Local Maps domination for high-intent keywords",
      "Automated trial booking systems",
      "Member retention automation workflows",
      "Review generation systems to build trust"
    ],
    automationExample: "Automated 'Missed Call Text Back' system that instantly engages potential members when you're busy training clients."
  },
  doctors: {
    title: "Healthcare SEO: Getting More Patients for Medical Clinics",
    description: "Patients today start their search for medical care online. We specialize in HIPAA-aware digital marketing that builds authority and trust. We ensure your clinic ranks for both general care and specialized procedures, driving high-value patient acquisitions.",
    heroImage: "/images/generated/industry-doctors.png",
    accentImage: "/images/generated/industry-doctors.png",
    painPoints: [
      "Low visibility for specialized medical procedures",
      "Manual appointment scheduling wasting staff time",
      "Poor online reputation management",
      "Inaccurate directory listings across medical portals"
    ],
    solutions: [
      "Procedure-specific content authority building",
      "Online appointment booking integration",
      "HIPAA-compliant lead nurturing",
      "Automated patient feedback and review systems"
    ],
    automationExample: "Automated appointment reminders and pre-visit instruction sequences via SMS/Email."
  },
  plumbers: {
    title: "Plumbing SEO: Dominating Emergency Search Keywords",
    description: "When a pipe bursts, customers don't scroll past page one. We position your plumbing business at the very top of Google Maps and Search, ensuring you get the call first. Our automation systems handle dispatch notifications and review requests automatically.",
    heroImage: "/images/generated/industry-plumbers.png",
    accentImage: "/images/generated/industry-plumbers.png",
    painPoints: [
      "High cost-per-click on Google Ads",
      "Missed emergency calls during off-hours",
      "Difficulty getting consistent 5-star reviews",
      "Low repeat customer rate"
    ],
    solutions: [
      "Local Services Ads (LSA) management",
      "Emergency keyword ranking optimization",
      "24/7 AI Receptionist for lead intake",
      "Automated after-job review requests"
    ],
    automationExample: "AI Chatbot that can troubleshoot simple issues and book emergency appointments instantly."
  },
  lawyers: {
    title: "Legal SEO: High-Intent Lead Generation for Law Firms",
    description: "Legal leads are among the most expensive and competitive online. We focus on building your firm's authority through deep content strategies and hyper-local SEO, reducing your reliance on expensive PPC while increasing lead quality.",
    heroImage: "/images/generated/industry-lawyers.png",
    accentImage: "/images/generated/industry-lawyers.png",
    painPoints: [
      "Extreme competition for practice area keywords",
      "High lead acquisition costs",
      "Time-consuming initial client intake",
      "Need for constant content production"
    ],
    solutions: [
      "Niche-specific practice area optimization",
      "Automated intake forms and scheduling",
      "Client testimonial automation",
      "Content clusters to establish topical authority"
    ],
    automationExample: "Automated document collection and initial consultation scheduling system."
  },
  salons: {
    title: "Salon & Spa SEO: Building Beauty Brand Authority",
    description: "Your salon is a visual business. We combine stunning image-heavy SEO with automated booking systems that keep your chairs full. We help you rank for everything from 'hair coloring' to 'medical spa services'.",
    heroImage: "/images/generated/industry-salons.png",
    accentImage: "/images/generated/industry-salons.png",
    painPoints: [
      "High no-show rates for appointments",
      "Reliance on social media with no organic search presence",
      "Difficulty managing stylist schedules",
      "Weak online review profile"
    ],
    solutions: [
      "Visual-first SEO optimization",
      "Automated SMS appointment reminders",
      "Loyalty and re-booking automation",
      "Integration with booking software (Meevo, Zenoti, etc.)"
    ],
    automationExample: "Automated 'Next Appointment' reminder sent 4 weeks after a service to boost re-booking rates."
  },
  "life-coaches": {
    title: "SEO for Life Coaches: Building Trust and Authority",
    description: "Coaching is deeply personal. Our SEO strategy focuses on showcasing your unique voice and expertise, making you the obvious choice for your target audience. We build systems that nurture leads from curiosity to commitment.",
    heroImage: "/images/generated/industry-life-coaches.png",
    accentImage: "/images/generated/industry-life-coaches.png",
    painPoints: [
      "Difficulty standing out in a crowded market",
      "Inconsistent lead flow",
      "Time spent on discovery calls with unqualified leads",
      "Lack of automated content distribution"
    ],
    solutions: [
      "Personal brand authority SEO",
      "Automated webinar and lead magnet funnels",
      "Pre-discovery call qualification automation",
      "Email marketing automation for long-term nurturing"
    ],
    automationExample: "7-day automated email 'mini-course' that establishes your expertise before a discovery call."
  },
  dentists: {
    title: "Dental SEO: Fill Your Calendar with High-Value Patients",
    description: "We help dental practices rank for high-value services like dental implants, Invisalign, and cosmetic dentistry. Our local SEO system ensures you dominate your city's search results.",
    heroImage: "/images/generated/industry-dentists.png",
    accentImage: "/images/generated/industry-dentists.png",
    painPoints: [
      "Patients only calling for emergency/low-value cleaning",
      "Staff overwhelmed by phone calls for simple questions",
      "Poor conversion on the website",
      "Weak review presence compared to neighbors"
    ],
    solutions: [
      "Service-specific landing page optimization",
      "AI-powered 24/7 web chat",
      "Automated post-visit review generation",
      "Local citation building and cleanup"
    ],
    automationExample: "Automated treatment plan follow-ups for patients who haven't yet booked their recommended procedures."
  },
  electricians: {
    title: "Electrician SEO: Powering Up Your Local Lead Flow",
    description: "When it comes to electrical work, safety and speed are key. We ensure your business is the one people find when they need urgent repairs or high-value installations like EV chargers.",
    heroImage: "/images/generated/industry-electricians.png",
    accentImage: "/images/generated/industry-electricians.png",
    painPoints: [
      "High competition for 'electrician near me' terms",
      "Missed lead opportunities after hours",
      "Difficulty tracking which marketing efforts drive jobs",
      "Weak reputation management"
    ],
    solutions: [
      "Hyper-local keyword targeting",
      "Automated lead follow-up within 2 minutes",
      "CRM integration for job tracking",
      "Automated referral request system"
    ],
    automationExample: "Automated 'Thank You' sequence that requests a Google review immediately after a job is marked 'Complete' in your field software."
  },
  "real-estate": {
    title: "Real Estate SEO: Dominating Local Neighborhood Searches",
    description: "We help agents and brokerages own their local market. From 'homes for sale in [neighborhood]' to 'best real estate agent', we ensure you're the top choice for buyers and sellers.",
    heroImage: "/images/generated/industry-real-estate.png",
    accentImage: "/images/generated/industry-real-estate.png",
    painPoints: [
      "Zillow and Redfin dominating top search results",
      "Lead quality issues with general inquiry forms",
      "Slow response times losing potential clients",
      "Difficulty staying top-of-mind with past clients"
    ],
    solutions: [
      "Neighborhood-level SEO content strategy",
      "Automated property inquiry follow-ups",
      "Past-client nurturing automation",
      "Local Map Pack domination for 'Real Estate Agency'"
    ],
    automationExample: "Automated 'New Listing' alerts and market report sequences for your leads."
  },
  hvac: {
    title: "HVAC SEO: Cooling Competition and Heating Up Leads",
    description: "HVAC is a seasonal business where timing is everything. We ensure you're at the top of search results when the first heatwave or cold snap hits, driving urgent repair calls and system replacements.",
    heroImage: "/images/generated/industry-hvac.png",
    accentImage: "/images/generated/industry-hvac.png",
    painPoints: [
      "Seasonal demand fluctuations making staffing hard",
      "High cost of customer acquisition in peak seasons",
      "Difficulty selling lucrative maintenance contracts",
      "Fragmented online presence across many directories"
    ],
    solutions: [
      "Year-round authority building for off-season stability",
      "Automated maintenance agreement sign-up funnels",
      "24/7 AI lead qualification",
      "Google Local Services Ads (LSA) optimization"
    ],
    automationExample: "Automated 'Seasonal Checkup' reminder system that books maintenance calls during slow months."
  },
  vets: {
    title: "Veterinary SEO: Growing Your Clinic with Trusted Care",
    description: "Pet owners search for 'best vet' with high emotions. We help you build a presence that radiates trust and professionalism, ensuring you're the first choice for local pet parents.",
    heroImage: "/images/generated/industry-vets.png",
    accentImage: "/images/generated/industry-vets.png",
    painPoints: [
      "Difficulty ranking for high-value surgical services",
      "Staff time wasted on phone-based appointment booking",
      "Negative reviews impacting clinic reputation",
      "Low visibility in Google Maps for surrounding neighborhoods"
    ],
    solutions: [
      "Pet health education content strategy",
      "Automated online booking and reminders",
      "Review generation and management",
      "Local Maps Pack optimization"
    ],
    automationExample: "Automated 'New Pet Owner' welcome sequence with helpful tips and discount on first exam."
  }
};
