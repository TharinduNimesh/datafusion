"use client";
import { useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Logo } from "./logo";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./resizable-navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Case Studies", link: "#case-studies" },
  ];

  return (
    <>
      <Navbar className="mx-auto">
        <NavBody>
          <div className="relative z-20 flex items-center space-x-2">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold text-white">DataFusion</span>
          </div>
          <NavItems items={items} />
          <div className="relative z-20">
            <HoverBorderGradient>Contact Us</HoverBorderGradient>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-white">DataFusion</span>
            </div>
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {items.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
              >
                {item.name}
              </a>
            ))}
            <HoverBorderGradient className="w-full">
              Contact Us
            </HoverBorderGradient>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};