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
import { Logo } from "./logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "#" },
    { name: "Products", href: "https://apiforge.datafuzion.cloud" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Data Engineering", href: "/services#data-engineering" },
    { name: "Business Analytics", href: "/services#business-analytics" },
    { name: "AI & Machine Learning", href: "/services#ai-ml" },
    { name: "Predictive Analytics", href: "/services#predictive-analytics" },
    { name: "Cloud Data Solutions", href: "/services#cloud-solutions" },
  ];

  const products = [
    { name: "APIForge", href: "https://apiforge.datafuzion.cloud" },
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
        <div className="relative px-4 pt-8 pb-6 md:px-6 lg:px-8 md:pt-16 md:pb-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-8 lg:grid-cols-12">
            {/* Company Info - Larger section */}
            <div className="space-y-6 md:col-span-8 lg:col-span-3">
              <div className="flex items-center space-x-3">
                <Logo className="w-8 h-8" />
                <span className="text-xl font-bold text-white">DataFusion</span>
              </div>
              <p className="text-sm text-gray-400 max-w-md md:max-w-xl lg:max-w-none">
                Transform your data into actionable insights with our comprehensive analytics
                and consulting solutions. Empowering businesses through data-driven decisions.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:contact@datafusion.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">contact@datafusion.com</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">123 Data Street, Analytics City, 10011</span>
                </div>
              </div>
            </div>

            {/* Quick Links, Services, Products section wrapper */}
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 md:col-span-8 lg:col-span-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
                <ul role="list" className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
                <ul role="list" className="space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
                <ul role="list" className="space-y-2">
                  {products.map((product) => (
                    <li key={product.name}>
                      <Link
                        to={product.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="md:col-span-8 lg:col-span-3">
              <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated with our latest insights and news
              </p>
              <form className="w-full mb-6">
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <SecondaryButton className="w-full text-sm py-2">
                    Subscribe
                  </SecondaryButton>
                </div>
              </form>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-sm text-gray-400 order-2 md:order-1">
                © {currentYear} DataFusion. All rights reserved.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 order-1 md:order-2">
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
                  Privacy Policy
                </a>
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
                  Terms of Service
                </a>
                <span className="hidden md:inline">•</span>
                <span className="whitespace-nowrap">
                  Designed & Developed by{" "}
                  <a href="https://eversoft.lk" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Eversoft
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};