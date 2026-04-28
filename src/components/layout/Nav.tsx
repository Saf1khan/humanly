"use client";

import { useEffect, useState } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine if we've scrolled past the dark hero image
      // (Using 80% of viewport height as a safe threshold)
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const useDarkText = isMenuOpen || scrolledPastHero;

  return (
    <>
      <div className="absolute top-0 left-0 w-full py-3.5 px-4 text-center bg-[#F0EDEB] text-[#4A4741] z-[60] overflow-hidden">
        {/* Soft Background Gradients */}
        <div 
          className="absolute pointer-events-none left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div 
          className="absolute pointer-events-none right-1/4 translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <p className="relative z-10 text-[0.875rem] font-bold tracking-normal leading-normal font-sans">
          Free trial offer at checkout: Natural Cycles non-hormonal birth control
        </p>
      </div>

      {/* THE HEADER: Sticky container */}
      <header 
        className={`fixed z-50 w-full transition-all duration-500 font-sans ${scrolled ? 'top-0' : 'top-[48px]'}`}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        
        {/* THE DRAWER: The Full-Width Menu */}
        <div 
          className={`absolute top-0 left-0 z-0 w-full overflow-hidden bg-[#F0EDEB] shadow-2xl transition-all duration-500 ease-in-out lg:rounded-b-[3rem] ${
            isMenuOpen ? 'max-h-[600px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <div className={`px-8 pt-28 pb-12 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-16">
              
              {/* Dropdown Card 1 */}
              <div className="w-[300px] group cursor-pointer">
                 <div className="aspect-[320/136] bg-[#4A4741] rounded-[2rem] overflow-hidden mb-4 relative">
                   <img src="/images/pexels-ianr-21853691.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Humanly OS" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                      <p className="text-white text-lg font-medium">Humanly OS</p>
                   </div>
                 </div>
              </div>

              {/* Dropdown List Items and Action */}
              <div className="flex flex-col gap-6 justify-center">
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#" className="group flex items-center gap-4">
                      <div className="size-10 bg-sandstone-300 rounded-lg overflow-hidden flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#4A4741] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-[#4A4741] transition-all group-hover:text-black group-hover:font-bold">The Team</span>
                    </a>
                  </li>
                </ul>

                <div className="pt-2">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-sandstone-200 font-bold rounded-full hover:bg-mustard-500 transition-colors shadow-lg">
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
            className={`absolute inset-0 mx-4 md:mx-8 rounded-2xl bg-[#4A4741]/5 backdrop-blur-[32px] border border-[#4A4741]/10 transition-opacity duration-400 ${
              scrolled && !isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          
          <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between min-h-[60px]">
            {/* Logo - Restored to larger size */}
            <a href="/" className="relative flex items-center h-12 md:h-14 cursor-pointer">
              <img 
                src="/images/asset%200.png" 
                alt="Humanly" 
                className="object-contain h-full w-auto"
              />
            </a>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-2">
              <li>
                <a href="#" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-[#4A4741] hover:text-black' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Why Humanly
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-[#4A4741]' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`group relative px-6 py-3 transition-all duration-300 ${useDarkText ? 'text-[#4A4741] hover:text-black' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}>
                  <span className="relative font-medium tracking-wide">
                    Communities
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-[#4A4741]' : 'bg-white'}`}></span>
                  </span>
                </a>
              </li>
              <li>
                <button 
                  onClick={toggleDrawer} 
                  onMouseEnter={() => setIsMenuOpen(true)}
                  className={`group relative px-6 py-3 transition-all duration-300 flex items-center gap-1.5 ${useDarkText ? 'text-[#4A4741] hover:text-black' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-white/80'}`}
                >
                  <span className="relative font-medium tracking-wide">
                    Platform
                    <span className={`absolute -left-1 -bottom-1 h-[2px] w-[calc(100%+8px)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 opacity-60 ${useDarkText ? 'bg-[#4A4741]' : 'bg-white'}`}></span>
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button 
                className={`lg:hidden w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center gap-1.5 rounded-full border transition-colors z-50 relative ${useDarkText ? 'border-[#4A4741]/25 text-[#4A4741] hover:bg-[#4A4741]/10' : 'border-white/40 text-white hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] bg-black/10 backdrop-blur-sm'}`}
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
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 z-40 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
};
