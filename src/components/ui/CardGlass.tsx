import { ReactNode } from "react";

interface CardGlassProps {
  children: ReactNode;
  className?: string;
}

export const CardGlass = ({ children, className = "" }: CardGlassProps) => {
  return (
    <article
      className={`
        relative overflow-hidden
        rounded-2xl
        bg-white/40
        backdrop-blur-xl
        outline outline-[1.5px] outline-white/70
        shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_24px_rgba(180,174,220,0.12)]
        transition-all duration-500
        hover:-translate-y-1
        hover:bg-white/55
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_40px_rgba(160,154,210,0.22)]
        ${className}
      `}
    >
      {/* Top-right corner glow — light source effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle at center, rgba(200,196,255,0.55) 0%, rgba(200,196,255,0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </article>
  );
};
