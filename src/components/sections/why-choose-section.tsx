import { Link } from "react-router-dom";
import { GradientBadge } from "../ui/gradient-badge";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export const WhyChooseSection = () => {
  const features = [
    "Experienced Data Scientists & Analysts",
    "Custom Solutions Tailored to Your Needs",
    "Proven Track Record of Success",
    "End-to-End Implementation Support",
    "Ongoing Optimization & Training",
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Column */}
          <div className="w-full lg:w-1/2 z-20">
            <GradientBadge className="mb-4">
              Why Choose Us
            </GradientBadge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Why Choose DataFusion?
            </h2>
            <p className="text-gray-400 mb-8">
              DataFusion stands apart with deep technical expertise, a proven track record, and a relentless focus on business outcomes. We deliver tailored solutions, end-to-end support, and ongoing optimization—so your data drives real results.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about">
                <HoverBorderGradient>
                  Learn More About Us
                </HoverBorderGradient>
              </Link>
            </div>
          </div>

          {/* Code Display Column */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <div className="relative lg:absolute lg:-right-[30%] w-[120%] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-lg" />
              <img
                src="/why-choose-us.jpg"
                alt="Why Choose DataFusion - Compliance and Consulting Visual"
                className="w-full h-[500px] object-cover rounded-lg border border-white/10 shadow-xl"
                loading="lazy"
              />
            </div>
            {/* Background gradient effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-2xl rounded-full transform -rotate-12" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl rounded-full transform rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};