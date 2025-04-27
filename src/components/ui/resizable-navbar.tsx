"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Link } from "react-router-dom";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.3)"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "mt-3 relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && "bg-black/50 border border-white/10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-4 text-sm font-medium text-white/70 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 transition-colors duration-300 hover:text-white"
          key={`link-${idx}`}
          to={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.3)"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "mt-3 relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-black/50 border border-white/10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 px-4 py-8",
            className
          )}
        >
          {React.Children.map(children, (child, index) => {
            if (
              React.isValidElement(child) &&
              typeof child.type === 'string' &&
              child.type === 'a'
            ) {
              return (
          <div className="relative w-full" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            {hoveredIndex === index && (
              <motion.div
                layoutId="mobile-hovered"
                className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            {React.cloneElement(child as React.ReactElement<any>, {
              className: cn(
                "block w-full rounded-lg px-4 py-3 text-white/70 hover:text-white transition-colors duration-300 relative z-10",
                (child as React.ReactElement<any>).props.className
              ),
              onClick: (e: React.MouseEvent) => {
                const childProps = (child as React.ReactElement<any>).props;
                if (childProps.onClick) childProps.onClick(e);
                onClose?.();
              },
            })}
          </div>
              );
            }
            return child;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white/90 hover:text-white w-6 h-6 cursor-pointer transition-colors" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white/90 hover:text-white w-6 h-6 cursor-pointer transition-colors" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="text-2xl font-bold text-white">DataFusion</span>
    </a>
  );
};

type NavbarButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarButton = ({
  href = "#",
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold cursor-pointer inline-block text-center";
  const variantStyles: Record<string, string> = {
    primary: "bg-black text-white",
    secondary: "bg-transparent text-white/70",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white",
  };

  if (variant === "primary") {
    return (
      <HoverBorderGradient
        href={href}
        className={className}
        containerClassName={baseStyles}
        {...props}
      >
        {children}
      </HoverBorderGradient>
    );
  }

  return (
    <a 
      href={href} 
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};
