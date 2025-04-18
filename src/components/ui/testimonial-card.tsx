import { BadgeCheckIcon } from "lucide-react";
import { CardSpotlight } from "./card-spotlight";

interface TestimonialCardProps {
  name: string;
  handle: string;
  avatarSrc: string;
  content: string;
  isVerified?: boolean;
  className?: string;
}

export const TestimonialCard = ({
  name,
  handle,
  avatarSrc,
  content,
  isVerified,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={className}>
      <div className="h-full">
        <CardSpotlight 
          className="h-full p-0 overflow-hidden"
          radius={200}
          color="#14141420"
        >
          <div className="relative h-full z-10 p-4 sm:p-5">
            {/* User info */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20">
                  <img 
                    src={avatarSrc} 
                    alt={name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="font-medium text-white text-base truncate">
                    {name}
                  </h4>
                  {isVerified && (
                    <BadgeCheckIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  )}
                </div>
                <div className="text-sm text-gray-400 truncate">
                  {handle}
                </div>
              </div>
            </div>
            
            {/* Tweet content */}
            <div className="mt-3">
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                {content}
              </p>
            </div>
            
            {/* Minimal footer */}
            <div className="mt-auto pt-3 border-t border-white/5">
              <div className="flex justify-end">
                <time className="text-xs text-gray-500">
                  11:24 AM · Apr 18, 2025
                </time>
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};