"use client";
import { useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
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
          <NavbarLogo />
          <NavItems items={items} />
          <div className="relative z-20">
            <HoverBorderGradient>Contact Us</HoverBorderGradient>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
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