"use client";

import { SecondaryButton } from "../ui/secondary-button";
import { GradientBadge } from "../ui/gradient-badge";

export const AboutSection = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Image Container */}
              <div className="relative">
                <img
                  src="company.jpg"
                  alt="Data Analytics Team"
                  className="w-full h-[630px] rounded-2xl object-cover"
                />
                {/* Faded black overlay from bottom right */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <GradientBadge className="mb-4">
              About DataFusion
            </GradientBadge>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-500 mb-6">
              Transforming Data into Business Success
            </h3>
            <div className="space-y-6 text-gray-400">
              <p>
                At DataFusion, we specialize in transforming complex data into
                actionable insights that drive business growth. With years of
                expertise in data analytics and consulting, we help
                organizations harness the power of their data.
              </p>
              <p>
                Our team of expert data scientists and engineers work closely
                with clients to develop customized solutions that address their
                unique challenges and opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm">Successful Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm">Expert Team Members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm">Support Available</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <SecondaryButton>
                Learn More About Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
