import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sandstone: {
          100: "var(--color-sandstone-100)",
          200: "var(--color-sandstone-200)",
          300: "var(--color-sandstone-300)",
          400: "var(--color-sandstone-400)",
          450: "var(--color-sandstone-450)",
          500: "var(--color-sandstone-500)",
        },
        mustard: {
          50: "var(--color-mustard-50)",
          100: "var(--color-mustard-100)",
          200: "var(--color-mustard-200)",
          350: "var(--color-mustard-350)",
          500: "var(--color-mustard-500)",
          700: "var(--color-mustard-700)",
        },
        slate: {
          900: "var(--color-slate-900)",
        },
      },
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Neue Haas Grotesk"', 'ui-sans-serif', 'system-ui'],
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
