import { CallToActionSection } from "../sections/call-to-action-section";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Link } from "react-router-dom";

const serviceSections = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    subtitle: "Transform Raw Data into Business Intelligence",
    description: (
      <>
        At DataFusion, we don't just manage data—we transform it into your most valuable asset. Our cutting-edge Data Engineering platform creates the robust foundation your organization needs to thrive in today's data-driven economy.
      </>
    ),
    bullets: [
      "Reduce time-to-insight by up to 70% with our optimized ETL processes",
      "Scale effortlessly from gigabytes to petabytes without performance degradation",
      "Maintain ironclad data quality and governance across your entire organization",
    ],
    cta: { label: "Schedule a Demo", href: "/contact" },
    img: "/services/data-engineering.png",
    imgAlt: "Data engineering illustration",
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    subtitle: "From Raw Numbers to Strategic Advantage",
    description: (
      <>
        Our Business Analytics platform empowers decision-makers with crystal-clear insights that drive growth and maximize ROI. Enable cross-departmental decision alignment with interactive dashboards.
      </>
    ),
    bullets: [
      "Navigate from retrospective analysis to predictive foresight",
      "Identify revenue opportunities within weeks",
      "Enable cross-departmental decision alignment with interactive dashboards",
    ],
    cta: { label: "Book Analytics Assessment", href: "/contact" },
    img: "/services/business-analytics.png",
    imgAlt: "Business analytics illustration",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Where Data Meets Intelligence",
    description: (
      <>
        Leverage cutting-edge AI technologies to predict trends and automate decision-making. Our proprietary neural network architecture delivers unparalleled accuracy across computer vision, NLP, and predictive analytics.
      </>
    ),
    bullets: [
      "40% reduction in operational costs through intelligent automation",
      "Rapid deployment of custom AI solutions",
      "Industry-leading ethical AI governance protocols",
    ],
    cta: { label: "Schedule AI Assessment", href: "/contact" },
    img: "/services/ai-and-ml.png",
    imgAlt: "AI and machine learning illustration",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    subtitle: "Turn Uncertainty into Opportunity",
    description: (
      <>
        Our revolutionary Predictive Analytics platform empowers forward-thinking organizations to see around corners and capitalize on tomorrow's opportunities today. Move from hindsight to foresight and stay ahead of the competition.
      </>
    ),
    bullets: [
      "Reduce operational risk by up to 65% through early pattern detection",
      "Increase revenue forecasting accuracy by 40% with our proprietary modeling framework",
      "Deploy custom predictive solutions in days, not months",
    ],
    cta: { label: "Request Predictive Assessment", href: "/contact" },
    img: "/services/predictive-analytics.png",
    imgAlt: "Predictive analytics illustration",
  },
  {
    id: "cloud-data-solutions",
    title: "Cloud Data Solutions",
    subtitle: "Cloud-Powered Intelligence",
    description: (
      <>
        DataFusion delivers enterprise-grade cloud infrastructure that transforms how your applications harness data. Integrates seamlessly with AWS, Azure, and Google Cloud, providing a unified control plane for your most critical web services.
      </>
    ),
    bullets: [
      "Deploy web applications with embedded analytics that scale automatically",
      "Reduce cloud spending by 30% through intelligent resource optimization",
      "99.99% uptime guarantee with multi-region architecture",
    ],
    cta: { label: "Start Cloud Transformation", href: "/contact" },
    img: "/services/cloud-solutions.png",
    imgAlt: "Cloud data solutions illustration",
  },
];

const Services = () => {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center h-[40vh] relative border-b border-white/10">
        <img
          src="/services-hero-bg.jpg"
          alt="DataFusion Services Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore how DataFusion transforms your data into strategic advantage with our full suite of consulting and technology services.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className="w-full py-20 px-4 border-b border-white/10 bg-black"
        >
          <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Illustration */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-2/5 mb-8 md:mb-0">
              <img
                src={service.img}
                alt={service.imgAlt}
                className="w-full max-w-xs rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col gap-6 md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
                {service.title}
              </h2>
              <h3 className="text-lg md:text-xl text-blue-300 font-medium mb-2">
                {service.subtitle}
              </h3>
              <div className="text-gray-300 text-lg mb-4">{service.description}</div>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                {service.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div>
                <Link to={service.cta.href}>
                  <HoverBorderGradient>
                    {service.cta.label}
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      <CallToActionSection />
    </main>
  );
};

export default Services;
