"use client";

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

export const Logo = ({ className, iconClassName }: LogoProps) => {
  return (
    <div className={className}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClassName}
      >
        <path
          d="M20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2Z"
          stroke="url(#paint0_linear)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 6"
        />
        <path
          d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8Z"
          stroke="url(#paint1_linear)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 4"
        />
        <circle
          cx="20"
          cy="20"
          r="6"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2"
            y1="20"
            x2="38"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="8"
            y1="20"
            x2="32"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#93C5FD" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="14"
            y1="20"
            x2="26"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BFDBFE" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};