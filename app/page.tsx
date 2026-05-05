import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { RankingInfographic } from "@/components/sections/RankingInfographic";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AITeaser } from "@/components/sections/AITeaser";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesGrid />
      <IndustryGrid />
      <StatsCounter />
      <RankingInfographic />
      <TestimonialsSection />
      <ProcessSteps />
      <AITeaser />
      <CTABanner />
    </>
  );
}
