"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Simple props type that works for both button and anchor
interface HoverBorderGradientBaseProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler;
}

// Button specific props
type ButtonProps = HoverBorderGradientBaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HoverBorderGradientBaseProps>;

// Anchor specific props
type AnchorProps = HoverBorderGradientBaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof HoverBorderGradientBaseProps>;

// The combined type
type HoverBorderGradientProps = ButtonProps | AnchorProps;

export function HoverBorderGradient(props: HoverBorderGradientProps) {
  const {
    children,
    containerClassName,
    className,
    duration = 1,
    clockwise = true,
    href,
    ...rest
  } = props;

  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  const commonProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: cn(
      "relative flex rounded-full border border-white/10 bg-black/20 hover:bg-black/10 transition-all duration-500 dark:bg-white/5 items-center justify-center overflow-visible p-px w-fit cursor-pointer select-none",
      containerClassName
    ),
    ...rest
  };

  const content = (
    <>
      <div
        className={cn(
          "relative text-white z-10 bg-black/80 px-6 py-2.5 rounded-[inherit] whitespace-nowrap font-medium",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          filter: "blur(2px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      <div className="bg-black/90 absolute z-[1] inset-[2px] rounded-[inherit]" />
    </>
  );

  // Render either a button or an anchor based on whether href is provided
  return href ? (
    <a href={href} {...commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
      {content}
    </a>
  ) : (
    <button type="button" {...commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {content}
    </button>
  );
}
