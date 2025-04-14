"use client";

import {
  Database,
  BarChart3,
  Brain,
  LineChart,
  CloudCog,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SecondaryButton } from "../ui/secondary-button";
import { GradientBadge } from "../ui/gradient-badge";

export function ServicesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientBadge className="mb-4">
            What We Offer
          </GradientBadge>
          <h2 className="text-4xl md:text-5xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-600">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your business with our comprehensive data solutions
          </p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Database className="h-4 w-4 text-blue-400" />}
            title="Data Engineering"
            description="Build robust data pipelines and infrastructure for seamless data processing and storage."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<BarChart3 className="h-4 w-4 text-blue-400" />}
            title="Business Analytics"
            description="Transform raw data into actionable insights with advanced analytics and visualization."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Brain className="h-4 w-4 text-blue-400" />}
            title="AI & Machine Learning"
            description="Leverage cutting-edge AI technologies to predict trends and automate decision-making processes."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<LineChart className="h-4 w-4 text-blue-400" />}
            title="Predictive Analytics"
            description="Stay ahead of market trends with our advanced predictive modeling solutions."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<CloudCog className="h-4 w-4 text-blue-400" />}
            title="Cloud Data Solutions"
            description="Scalable and secure cloud infrastructure designed for your data needs."
          />
        </ul>
        <div className="text-center mt-12">
          <SecondaryButton>
            Explore Our Services
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-black/20 backdrop-blur-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-white/20 p-2 bg-white/5">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-400 md:text-base/[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};