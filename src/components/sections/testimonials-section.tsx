"use client";

import { GradientBadge } from "../ui/gradient-badge";
import { TestimonialCard } from "../ui/testimonial-card";

export const TestimonialsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <GradientBadge className="mb-4">Client Success Stories</GradientBadge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 mt-6">
            Hear directly from the organizations that have transformed their data strategies with 
            DataFusion's expert consulting and analytics solutions.
          </p>
        </div>

        {/* Manual Grid Layout */}
        <div className="grid gap-3 md:gap-4">
          {/* Row 1 - Featured testimonials */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <TestimonialCard 
              name="Sarah Chen"
              handle="@sarah_techCEO"
              avatarSrc="https://randomuser.me/api/portraits/women/1.jpg"
              content="DataFusion transformed our data infrastructure completely. Their expert team helped us migrate to a modern data lake architecture, resulting in 40% faster analytics processing. Absolutely game-changing for our business intelligence!"
              isVerified={true}
              className="col-span-12 md:col-span-8"
            />
            <TestimonialCard 
              name="James Miller"
              handle="@jamesmiller_data"
              avatarSrc="https://randomuser.me/api/portraits/men/2.jpg"
              content="The DataFusion team's expertise in Snowflake optimization saved us $200K annually in cloud costs. Their attention to detail and deep technical knowledge is unmatched."
              isVerified={true}
              className="col-span-12 md:col-span-4"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <TestimonialCard 
              name="Emily Rodriguez"
              handle="@emily_tech_lead"
              avatarSrc="https://randomuser.me/api/patterns/women/3.jpg"
              content="Working with DataFusion on our real-time analytics pipeline was a breeze. Their team seamlessly integrated Kafka and Databricks, giving us instant insights into our customer behavior."
              isVerified={true}
              className="col-span-12 md:col-span-4"
            />
            <TestimonialCard 
              name="Michael Zhang"
              handle="@mzhang_ai"
              avatarSrc="https://randomuser.me/api/portraits/men/4.jpg"
              content="As an AI-first company, we needed a partner who understood both data engineering and machine learning ops. DataFusion delivered beyond expectations, helping us build a robust MLOps pipeline that reduced our model deployment time by 60%."
              isVerified={true}
              className="col-span-12 md:col-span-4"
            />
            <TestimonialCard 
              name="Lisa Thompson"
              handle="@lisaT_analytics"
              avatarSrc="https://randomuser.me/api/portraits/women/5.jpg"
              content="The data governance framework DataFusion implemented helped us achieve GDPR compliance while maintaining data accessibility. Their expertise in both regulatory requirements and technical implementation is rare to find."
              isVerified={true}
              className="col-span-12 md:col-span-4"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <TestimonialCard 
              name="Robert Kane"
              handle="@rkane_cto"
              avatarSrc="https://randomuser.me/api/portraits/men/6.jpg"
              content="DataFusion's cloud migration strategy was flawless. They helped us move our entire data warehouse to AWS with zero downtime. Their 24/7 support during the transition was exceptional."
              isVerified={true}
              className="col-span-12 md:col-span-6"
            />
            <TestimonialCard 
              name="Amanda Lee"
              handle="@amandalee_data"
              avatarSrc="https://randomuser.me/api/portraits/women/7.jpg"
              content="The custom dashboard solution from DataFusion revolutionized how our executives consume data. Clean, intuitive, and lightning-fast!"
              isVerified={true}
              className="col-span-12 md:col-span-6"
            />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <TestimonialCard 
              name="David Wilson"
              handle="@dwilson_retail"
              avatarSrc="https://randomuser.me/api/portraits/men/8.jpg"
              content="Our retail analytics have never been more accurate. DataFusion's predictive modeling solutions helped us optimize inventory across 200+ stores."
              isVerified={true}
              className="col-span-12 md:col-span-4"
            />
            <TestimonialCard 
              name="Sofia Martinez"
              handle="@smartinez_bi"
              avatarSrc="https://randomuser.me/api/portraits/women/9.jpg"
              content="The data quality framework implemented by DataFusion reduced our reporting errors by 95%. Their attention to data integrity and validation processes is impressive."
              isVerified={true}
              className="col-span-12 md:col-span-8"
            />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <TestimonialCard 
              name="Tom Richards"
              handle="@trichards_fintech"
              avatarSrc="https://randomuser.me/api/portraits/men/10.jpg"
              content="In fintech, data accuracy is everything. DataFusion's real-time reconciliation system ensures our financial data is always accurate to the penny. Outstanding work!"
              isVerified={true}
              className="col-span-12 md:col-span-12"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      {/* <div className="absolute bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" /> */}
    </section>
  );
};