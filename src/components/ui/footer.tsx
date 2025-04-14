"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";
import { SecondaryButton } from "./secondary-button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Data Engineering", href: "#data-engineering" },
    { name: "Business Analytics", href: "#business-analytics" },
    { name: "AI & Machine Learning", href: "#ai-ml" },
    { name: "Predictive Analytics", href: "#predictive-analytics" },
    { name: "Cloud Data Solutions", href: "#cloud-solutions" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
  ];

  return (
    <div className="relative bg-black py-4">
      <footer className="relative mx-auto w-[95%] max-w-7xl rounded-3xl">
        {/* Gradient Border Container */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-500/50 via-gray-600/25 to-gray-700/5" />
          <div className="absolute inset-[1px] rounded-3xl bg-black" />
        </div>

        {/* Content */}
        <div className="relative px-4 pt-12 pb-8 sm:px-6 lg:px-8 sm:pt-20 sm:pb-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white">DataFusion</span>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-md">
                  Transform your data into actionable insights with our comprehensive analytics 
                  and consulting solutions. Empowering businesses through data-driven decisions.
                </p>
              </div>
              <div className="space-y-3">
                <a href="mailto:contact@datafusion.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">contact@datafusion.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">123 Data Street, Analytics City, 10011</span>
                </div>
              </div>
            </div>

            {/* Quick Links & Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
                  <ul role="list" className="space-y-3 sm:space-y-4">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:mt-0">
                  <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
                  <ul role="list" className="space-y-3 sm:space-y-4">
                    {services.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  Stay updated with our latest insights and news
                </p>
                <form className="w-full">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 px-4 py-2 text-sm sm:text-base text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="w-full sm:w-auto">
                      <SecondaryButton className="w-full sm:w-auto">
                        Subscribe
                      </SecondaryButton>
                    </div>
                  </div>
                </form>
                <div className="mt-6 sm:mt-8">
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <span className="sr-only">{item.name}</span>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-sm sm:text-base text-gray-400 order-2 sm:order-1">
                © {currentYear} DataFusion. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
                <span className="hidden sm:inline">•</span>
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
                <span className="hidden sm:inline">•</span>
                <span className="whitespace-nowrap">Designed & Developed by <a href="https://github.com/TharinduNimesh" className="text-blue-400 hover:text-blue-300 transition-colors">Tharindu Nimesh</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};