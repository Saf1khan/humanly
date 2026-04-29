import { ReactNode } from "react";

interface CardGlassProps {
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlayImage?: string;
}

export const CardGlass = ({ children, className = "", backgroundImage, overlayImage }: CardGlassProps) => {
  return (
    <article
      className={`
        relative h-full overflow-hidden
        rounded-[20px]
        bg-[#4A4741]/10
        backdrop-blur-md
        border border-[#4A4741]/10
        shadow-lg
        flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:bg-[#4A4741]/15
        hover:border-[#4A4741]/30
        hover:shadow-2xl
        group
        ${className}
      `}
    >
      <div className="relative z-10 h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
    </article>
  );
};
