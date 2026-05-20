"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBgLight, setIsBgLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkElementDarkness = (element: Element): boolean => {
      let current: HTMLElement | null = element as HTMLElement;

      while (current) {
        const classes = current.getAttribute("class") || "";
        const style = window.getComputedStyle(current);
        const bgColor = style.backgroundColor;
        const bgImg = style.backgroundImage;

        // 1. Check data-theme attribute
        const theme = current.getAttribute("data-theme");
        if (theme === "dark") return true;
        if (theme === "light") return false;

        // 2. Explicit light background classes
        if (
          classes.includes("bg-white") ||
          classes.includes("bg-[#white]") ||
          classes.includes("bg-stone-50") ||
          classes.includes("bg-sandstone-100") ||
          classes.includes("bg-[#f4f3ef]") ||
          classes.includes("bg-[#f0edeb]")
        ) {
          return false;
        }

        // 3. Explicit dark background classes
        if (
          classes.includes("bg-stone-900") ||
          classes.includes("bg-black") ||
          classes.includes("bg-[#0d1117]") ||
          classes.includes("bg-[#070d14]") ||
          classes.includes("bg-[#060c14]") ||
          classes.includes("bg-[#0e1b26]") ||
          classes.includes("bg-[#0f0f0e]") ||
          classes.includes("bg-[#101d2d]") ||
          classes.includes("bg-slate-900") ||
          classes.includes("bg-slate-950") ||
          classes.includes("bg-stone-950")
        ) {
          return true;
        }

        // 4. Parse arbitrary Tailwind hex bg classes (e.g. bg-[#0d1117])
        const hexMatch = classes.match(/bg-\[#([0-9a-fA-F]{3,6})\]/);
        if (hexMatch) {
          const hex = hexMatch[1];
          let r = 0, g = 0, b = 0;
          if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
          } else if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
          }
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          return luminance < 0.48; // Dark if luminance < 48%
        }

        // 5. Parse arbitrary Tailwind rgb/rgba bg classes (e.g. bg-[rgba(10,21,32,0.8)])
        const rgbMatch = classes.match(/bg-\[rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          return luminance < 0.48;
        }

        // 6. Parse standard Tailwind color weights (e.g. bg-stone-900, bg-zinc-800)
        const twColorMatch = classes.match(/bg-(slate|zinc|stone|neutral|gray|stone)-(\d+)/);
        if (twColorMatch) {
          const weight = parseInt(twColorMatch[2]);
          if (weight >= 700) return true; // Dark if weight >= 700
          if (weight <= 300) return false; // Light if weight <= 300
        }

        // 7. Check computed color brightness (RGB/RGBA)
        if (bgColor && bgColor !== "transparent" && bgColor !== "rgba(0, 0, 0, 0)") {
          const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);
            const a = match[4] ? parseFloat(match[4]) : 1;
            
            if (a > 0.15) {
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              return luminance < 0.48; // Dark if luminance < 48%
            }
          }
        }

        // 8. Check computed background-image linear-gradient/radial-gradient color stops
        if (bgImg && bgImg !== "none") {
          const rgbRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+)/g;
          let m;
          let totalLuminance = 0;
          let count = 0;
          while ((m = rgbRegex.exec(bgImg)) !== null) {
            const r = parseInt(m[1]);
            const g = parseInt(m[2]);
            const b = parseInt(m[3]);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            totalLuminance += luminance;
            count++;
          }
          if (count > 0) {
            const avgLuminance = totalLuminance / count;
            return avgLuminance < 0.48;
          }
        }

        current = current.parentElement;
      }
      return false;
    };

    const updateNavbarTheme = () => {
      if (typeof window === "undefined") return;
      const x = window.innerWidth / 2;
      const y = 40; // Midpoint height of the navbar
      
      const elements = document.elementsFromPoint(x, y);
      let underlyingElement: HTMLElement | null = null;

      for (const el of elements) {
        if (!el.closest("header") && el !== document.documentElement && el !== document.body) {
          underlyingElement = el as HTMLElement;
          break;
        }
      }

      const targetElement = underlyingElement || document.body;
      const isDark = checkElementDarkness(targetElement);
      setIsBgLight(!isDark);
    };

    let ticking = false;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbarTheme();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run setup after standard Next.js hydration and routing settles
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const useDarkText = isMenuOpen || isBgLight;

  return (
    <>
      {/* THE HEADER: Sticky container */}
      <header
        className="fixed z-50 w-full transition-all duration-500 font-sans top-0"
        onMouseLeave={() => setIsMenuOpen(false)}
      >

        {/* THE DRAWER: The Full-Width Menu */}
        <div
          className={`absolute top-0 left-0 z-0 w-full overflow-hidden bg-[#F0EDEB] shadow-2xl transition-all duration-500 ease-in-out lg:rounded-b-[3rem] ${isMenuOpen ? 'max-h-[600px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <div className={`px-8 pt-28 pb-12 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-16">

              {/* Dropdown Card 1 */}
              <a href="/humanly-os" className="w-[300px] group cursor-pointer">
                <div className="aspect-[320/136] bg-[#4A4741] rounded-[2rem] overflow-hidden mb-4 relative">
                  <img src="/images/pexels-ianr-21853691.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Humanly OS" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                    <p className="text-white text-lg font-medium">Humanly OS</p>
                  </div>
                </div>
              </a>

              <a href="/platform" className="w-[300px] group cursor-pointer">
                <div className="aspect-[320/136] bg-[#4A4741] rounded-[2rem] overflow-hidden mb-4 relative">
                  <img src="/images/AdobeStock_446591769.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="The Platform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                    <p className="text-white text-lg font-medium">The Platform</p>
                  </div>
                </div>
              </a>

              {/* Dropdown List Items and Action */}
              <div className="flex flex-col gap-6 justify-center">
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="/team" className="group flex items-center gap-4">
                      <div className="size-10 bg-sandstone-300 rounded-lg overflow-hidden flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#4A4741] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-[#4A4741] transition-all group-hover:text-black group-hover:font-bold">The Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="/invest" className="group flex items-center gap-4">
                      <div className="size-10 bg-sandstone-300 rounded-lg overflow-hidden flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#4A4741] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                        </svg>
                      </div>
                      <span className="text-[#4A4741] transition-all group-hover:text-black group-hover:font-bold">Investors</span>
                    </a>
                  </li>
                </ul>

                <div className="pt-2">
                  <a href="/invest#dataroom" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-sandstone-200 font-bold rounded-full hover:bg-mustard-500 transition-colors shadow-lg">
                    Request Data Room
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* THE NAV: The visible floating bar */}
        <nav className="relative z-10 w-full mt-2 py-2">
          {/* Glass Background Layer */}
          <div
            className={`absolute inset-0 mx-4 md:mx-8 rounded-2xl bg-[#4A4741]/5 backdrop-blur-[32px] border border-[#4A4741]/10 transition-opacity duration-400 ${scrolled && !isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
          ></div>

          <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between min-h-[60px]">
            {/* Logo - Restored to larger size */}
            <a href="/" className="relative flex items-center h-12 md:h-14 cursor-pointer">
              <img
                src="/images/asset%200.png"
                alt="Humanly"
                className={`object-contain h-full w-auto transition-all duration-300 ${
                  useDarkText ? "brightness-0" : "brightness-0 invert"
                }`}
              />
            </a>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-2">
              <li>
                <a href="/home" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Home
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/why-humanly" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Why Humanly
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/communities" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Communities
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/humanly-os" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    HumanlyOS
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/team" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Team
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="/invest" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Invest
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  onMouseEnter={() => setIsMenuOpen(true)}
                  className={`group relative px-6 py-3 transition-all duration-300 flex items-center gap-1.5 ${useDarkText ? 'text-black hover:text-black/70 font-semibold' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}
                >
                  <span className="relative font-medium tracking-wide">
                    Platform
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-black' : 'bg-white'}`}></span>
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                className={`lg:hidden w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center gap-1.5 rounded-full border transition-colors z-50 relative ${useDarkText ? 'border-black/25 text-black hover:bg-black/10' : 'border-white/40 text-white hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] bg-black/10 backdrop-blur-sm'}`}
                onClick={toggleDrawer}
                onMouseEnter={() => setIsMenuOpen(true)}
              >
                <span className={`h-[1.5px] w-[18px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
                <span className={`h-[1.5px] w-[18px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
};
