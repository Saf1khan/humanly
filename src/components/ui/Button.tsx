import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-black active:scale-95 duration-200",
          {
            "bg-white text-black hover:bg-gray-200 shadow-lg": variant === "primary",
            "bg-gray-800 text-white hover:bg-gray-700": variant === "secondary",
            "border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white": variant === "outline",
            "hover:bg-white/10 hover:text-white text-gray-300": variant === "ghost",
            "h-9 px-4": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
