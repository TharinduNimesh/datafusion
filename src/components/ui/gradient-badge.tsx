"use client";

import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBadge = ({ children, className }: GradientBadgeProps) => {
  return (
    <div className={cn("inline-block relative", className)}>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-500/40 rounded-full blur-sm opacity-70"></span>
      <h2 className="relative px-4 py-1.5 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-sm uppercase tracking-wider text-gray-200 font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
        {children}
      </h2>
    </div>
  );
};