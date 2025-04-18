"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Header } from "@/components/ui/header";
import { ServicesSection } from "@/components/sections/services-section";
import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/sections/about-section";
import { TrustedPartners } from "@/components/sections/trusted-partners";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function App() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <main className="relative min-h-screen bg-black">
      <Header />
      <div className="relative w-full">
        <div
          ref={ref}
          className="h-[400vh] w-full"
        >
          <div className="sticky top-0 z-10 h-screen w-full overflow-hidden">
            <GoogleGeminiEffect
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
              title="Transform Your Data Into Actionable Insights"
              description="Unlock the power of your data with our advanced analytics solutions. Our platform enables you to visualize, analyze, and derive insights from your data effortlessly. Experience seamless integration, real-time analytics, and intuitive dashboards that empower your decision-making process."
            />
          </div>
        </div>
      </div>
      <AboutSection />
      <TrustedPartners />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
