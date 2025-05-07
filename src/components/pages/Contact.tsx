import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/index";
import { Textarea } from "@/components/ui/textarea";
import { SecondaryButton } from "@/components/ui/secondary-button";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <main className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center h-[40vh] relative border-b border-white/10">
        <img
          src="/contact-bg.png"
          alt="DataFusion Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about how DataFusion can transform your data strategies? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full flex justify-center bg-black border-b border-white/10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 py-12 px-4">
          {/* Contact Info */}
          <div className="flex-1 bg-black rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col gap-6 justify-center items-center">
            {/* Top image for visual balance */}
            <div className="relative w-full mb-6">
              <img
                src="/contact-info.png"
                alt="Contact Info Visual"
                className="w-full object-contain rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent rounded-xl" />
            </div>
            <div className="w-full space-y-4">
              {/* Address Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-blue-700/30 shadow">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-700/20 border border-blue-500/30">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-black/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p className="text-gray-400 text-sm">123 Data Avenue, Analytics District</p>
                  <p className="text-gray-400 text-sm">Tech City, 10011</p>
                </div>
              </div>
              {/* Email Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-purple-700/30 shadow">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-700/20 border border-purple-500/30">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-black/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400 text-sm">contact@datafusion.com</p>
                </div>
              </div>
              {/* Phone Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-blue-700/30 shadow">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-700/20 border border-blue-500/30">
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-black/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-black rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-6 text-base md:text-lg">
              Contact our data experts for personalized insights and solutions
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:gap-4">
                <LabelInputContainer className="md:flex-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="md:flex-1">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="you@company.com" type="email" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Organization" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your data challenges"
                />
              </LabelInputContainer>
              <div className="flex justify-center">
                <SecondaryButton className="w-full flex justify-center">
                  Send Message
                </SecondaryButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      {/* <section className="w-full flex justify-center bg-black py-12">
        <div className="w-full max-w-6xl rounded-2xl border border-white/10 overflow-hidden shadow-lg min-h-[240px]">
          <iframe
            title="DataFusion Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.276764572619!2d-79.38927548450163!3d43.64254797912161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section> */}
    </main>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;
