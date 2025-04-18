import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { GradientBadge } from "../ui/gradient-badge";

export const CallToActionSection = () => {
  const stats = [
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "500+",
      label: "Projects Completed",
    },
    {
      value: "50+",
      label: "Data Scientists",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <div className="my-24">
      <section className="relative w-full min-h-[650px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cta-background.jpeg"
            alt="Data Analytics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <GradientBadge className="mb-4">
              Get Started
            </GradientBadge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Ready to Transform Your Data Journey?
            </h2>
            <p className="text-zinc-200 text-lg mt-6 mb-16 max-w-2xl font-light">
              Join hundreds of businesses that have already unlocked the power
              of their data with DataFusion's expert consulting services.
            </p>

            {/* Simple Stats Section */}
            <div className="w-full max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-zinc-500 pl-6 text-left"
                  >
                    <div className="space-y-1">
                      <p className="text-3xl md:text-4xl font-light tracking-wide text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-zinc-400 font-light tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <HoverBorderGradient
                className="text-lg px-8 py-3 text-white bg-zinc-900/50 backdrop-blur-sm"
                duration={1.5}
                clockwise={false}
              >
                Schedule a Free Consultation
              </HoverBorderGradient>
            </div>
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950/70 to-transparent" />
      </section>
    </div>
  );
};
