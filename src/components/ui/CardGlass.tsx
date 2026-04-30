import { ReactNode } from "react";

interface CardGlassProps {
  children?: ReactNode;
  className?: string;
}

export const CardGlass = ({ children, className = "" }: CardGlassProps) => {
  return (
    <article
      className={`relative h-full flex flex-col group bg-[#4A4741]/10 backdrop-blur-[32px] border border-[#4A4741]/10 p-2 rounded-2xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-[#4A4741]/10 ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
    </article>
  );
};
