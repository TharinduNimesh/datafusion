"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
  ];

  return (
    <>
      <Navbar className="mx-auto">
        <NavBody>
          <Link to={"/"} className="relative z-20 flex items-center space-x-2">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold text-white">DataFusion</span>
          </Link>
          <NavItems
            items={items.map((item) => ({
              ...item,
              element: <Link to={item.link}>{item.name}</Link>,
            }))}
          />
          <div className="relative z-20">
            <Link to="/contact">
              <HoverBorderGradient>Contact Us</HoverBorderGradient>
            </Link>
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
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              <HoverBorderGradient className="w-full">
                Contact Us
              </HoverBorderGradient>
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};