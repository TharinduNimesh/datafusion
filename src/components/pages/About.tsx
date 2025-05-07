import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { CardSpotlight } from "../ui/card-spotlight";
import { CallToActionSection } from "../sections/call-to-action-section";

const About = () => {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero Section (same as Contact) */}
      <section className="w-full flex items-center justify-center h-[40vh] relative border-b border-white/10">
        <img
          src="/about-us-hero.jpeg"
          alt="About DataFusion Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how DataFusion transforms data into strategic advantage for modern organizations.
          </p>
        </div>
      </section>
      <AboutSection />

      {/* Our Vision and Mission Section */}
      <section className="w-full py-20 px-4 bg-black">
        {/* Top gradient line */}
        <div className="h-1 w-full rounded bg-gradient-to-r from-zinc-700/0 via-zinc-400/60 to-zinc-700/0 mb-10" />
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Icon/Illustration */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 mb-8 md:mb-0">
            <div className="relative">
              <img
              src="/data-analytics.jpg"
              alt="Vision and Mission"
              className="w-full max-w-xs rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent rounded-2xl" />
            </div>
            </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-block relative mb-2 w-fit">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-500/40 rounded-full blur-sm opacity-70"></span>
              <h2 className="relative px-4 py-1.5 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-sm uppercase tracking-wider text-gray-200 font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
                Our Vision & Mission
              </h2>
            </div>
            <p className="text-gray-300 text-lg">
              At DataFusion, our vision is to transform raw data into your most valuable asset, enabling organizations to thrive in a data-driven world. Our mission is to help you unlock the full value of your data by delivering tailored solutions that drive growth, innovation, and operational excellence.
            </p>
            <div className="mt-4">
              <a href="/contact">
                <div className="inline-block">
                  <HoverBorderGradient>
                    Schedule a Consultation
                  </HoverBorderGradient>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom gradient line */}
        <div className="h-1 w-full rounded bg-gradient-to-r from-zinc-700/0 via-zinc-400/60 to-zinc-700/0 mt-10" />
      </section>

      <ServicesSection />

      {/* The DataFusion Advantage */}
      <section className="w-full bg-black border-b border-white/10 py-20">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="mb-4 text-center">
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-500/40 rounded-full blur-sm opacity-70"></span>
              <h2 className="relative px-4 py-1.5 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-sm uppercase tracking-wider text-gray-200 font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
                The DataFusion Advantage
              </h2>
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <CardSpotlight className="h-full p-0 overflow-hidden" radius={200} color="#14141420">
              <div className="relative h-full z-10 p-8 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900/60 to-blue-500/30 border border-blue-400/30 mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Faster Insights</h3>
                <p className="text-gray-400 text-center">Reduce time-to-insight by up to 70% with our optimized ETL processes.</p>
              </div>
            </CardSpotlight>
            {/* Card 2 */}
            <CardSpotlight className="h-full p-0 overflow-hidden" radius={200} color="#14141420">
              <div className="relative h-full z-10 p-8 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-900/60 to-purple-500/30 border border-purple-400/30 mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Effortless Scalability</h3>
                <p className="text-gray-400 text-center">Scale effortlessly from gigabytes to petabytes without performance degradation.</p>
              </div>
            </CardSpotlight>
            {/* Card 3 */}
            <CardSpotlight className="h-full p-0 overflow-hidden" radius={200} color="#14141420">
              <div className="relative h-full z-10 p-8 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-900/60 to-green-500/30 border border-green-400/30 mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Data Quality & Governance</h3>
                <p className="text-gray-400 text-center">Maintain ironclad data quality and governance across your entire organization.</p>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="w-full bg-black py-20">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="mb-4 text-center">
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-500/40 rounded-full blur-sm opacity-70"></span>
              <h2 className="relative px-4 py-1.5 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-sm uppercase tracking-wider text-gray-200 font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
                Technical Expertise
              </h2>
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 text-center">
            Tools & Technologies
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Left: 2x2 grid of tech cards */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 md:w-1/2 w-full">
              <CardSpotlight className="h-full p-0 overflow-hidden" radius={120} color="#14141420">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-500/10 border border-blue-400/20 flex items-center justify-center shadow-lg mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
                  </div>
                  <span className="text-white font-medium mt-1">Python</span>
                </div>
              </CardSpotlight>
              <CardSpotlight className="h-full p-0 overflow-hidden" radius={120} color="#14141420">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-500/10 border border-purple-400/20 flex items-center justify-center shadow-lg mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-10 h-10" />
                  </div>
                  <span className="text-white font-medium mt-1">SQL</span>
                </div>
              </CardSpotlight>
              <CardSpotlight className="h-full p-0 overflow-hidden" radius={120} color="#14141420">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-500/10 border border-blue-400/20 flex items-center justify-center shadow-lg mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" className="w-10 h-10" />
                  </div>
                  <span className="text-white font-medium mt-1">R</span>
                </div>
              </CardSpotlight>
              <CardSpotlight className="h-full p-0 overflow-hidden" radius={120} color="#14141420">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-900/40 to-red-500/10 border border-red-400/20 flex items-center justify-center shadow-lg mb-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" alt="Scala" className="w-10 h-10" />
                  </div>
                  <span className="text-white font-medium mt-1">Scala</span>
                </div>
              </CardSpotlight>
            </div>
            {/* Right: Enhanced Description and CTA */}
            <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
              <p className="text-gray-300 text-lg mb-4">
                Our certified engineers are experts in the world’s most powerful data tools and languages. We leverage this technical mastery to build robust, scalable, and future-ready data solutions for your business.
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                <li>Python for advanced analytics, automation, and machine learning</li>
                <li>SQL for high-performance data querying and transformation</li>
                <li>R for statistical modeling and data science</li>
                <li>Scala for big data engineering and distributed computing</li>
              </ul>
              <p className="text-gray-400 text-base mb-6">
                With DataFusion, your analysts and data scientists can focus on driving growth and innovation—while we handle the technical complexity behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </main>
  );
};

export default About;
