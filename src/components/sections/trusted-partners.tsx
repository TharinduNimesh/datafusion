"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const TrustedPartners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/logos/microsoft.svg",
    },
    {
      name: "Amazon Web Services",
      logo: "/logos/aws.svg",
    },
    {
      name: "Google Cloud",
      logo: "/logos/google-cloud.svg",
    },
    {
      name: "IBM",
      logo: "/logos/ibm.svg",
    },
    {
      name: "Oracle",
      logo: "/logos/oracle.svg",
    },
    {
      name: "Salesforce",
      logo: "/logos/salesforce.svg",
    },
    {
      name: "Snowflake",
      logo: "/logos/snowflake.svg",
    },
    {
      name: "Databricks",
      logo: "/logos/databricks.svg",
    },
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          <InfiniteMovingCards
            items={partners}
            speed="slow"
            className="py-4"
          />
          <InfiniteMovingCards
            items={[...partners].reverse()}
            direction="right"
            speed="slow"
            className="py-4"
          />
        </div>

        <div className="text-center mt-5">
          <p className="text-gray-400 text-sm tracking-wider uppercase mb-3">Trusted By Industry Leaders</p>
        </div>
      </div>
    </section>
  );
};