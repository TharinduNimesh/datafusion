"use client";

import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SecondaryButton = ({ 
  children, 
  className,
  ...props 
}: SecondaryButtonProps) => {
  return (
    <button
      className={cn(
        "relative group overflow-visible",
        className
      )}
      {...props}
    >
      {/* Main button */}
      <div className="w-full relative px-6 py-2.5 rounded-full bg-white text-black font-medium border border-white/10 hover:bg-white/90 transition-colors duration-300">
        {children}
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-blue-500/50 blur-md rounded-full transform translate-y-0.5 opacity-75 group-hover:opacity-100 group-hover:bg-blue-500/70 transition-all duration-300"></div>
      
      {/* Bottom border line */}
      <div className="absolute inset-x-[10%] bottom-0 h-[2px] bg-gradient-to-r from-blue-400/40 via-blue-500/70 to-blue-400/40 rounded-full"></div>
    </button>
  );
};