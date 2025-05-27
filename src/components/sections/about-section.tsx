"use client";

import { SecondaryButton } from "../ui/secondary-button";
import { GradientBadge } from "../ui/gradient-badge";
import { Link } from "react-router-dom";

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
                  src="about-us.png"
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
            <GradientBadge className="mb-4">About DataFusion</GradientBadge>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Data Excellence, Delivered
            </h3>
            <div className="space-y-6 text-gray-400">
              <p>
                DataFusion seamlessly integrates robust data engineering,
                intuitive analytics, AI/ML, predictive insights, and scalable
                cloud infrastructure—empowering organizations to turn raw data
                into strategic advantage with speed and accuracy.
              </p>
              <p>
                Our mission is to help you unlock the full value of your data.
                With a team of certified experts, we deliver tailored solutions
                that drive growth, innovation, and operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm">Expert Consultants</div>
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
              <Link to="/about">
                <SecondaryButton>Learn More About Us</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
