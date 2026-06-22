"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-sandstone-200 font-sans border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 pt-16 pb-8">
        
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo, Description, Toggles */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 w-full lg:w-[30%]">
            {/* Logo */}
            <div className="text-white">
              <h2 className="text-3xl font-cormorant font-bold tracking-tighter">HUMANLY</h2>
            </div>
            
            {/* Description */}
            <p className="text-[#a8a5a0] text-base leading-relaxed max-w-sm">
              Empowering communities through innovative real estate, platform services, and human-centric action.
            </p>
            
            {/* Language Selector */}
            <div className="mt-2">
              <button
                type="button"
                className="border border-white/20 rounded-full py-2 px-4 text-white flex flex-row gap-2 items-center hover:bg-white/5 transition-all text-sm w-fit"
              >
                English
                <svg
                  className="w-4 h-4 ml-2 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2 & 3: Page Links */}
          <div className="flex w-full lg:w-[40%] justify-center">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-24 gap-y-5 text-sandstone-200 font-cormorant text-lg text-center lg:text-left w-full sm:w-auto px-4 sm:px-0">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/why-humanly" className="hover:text-white transition-colors">Why Humanly</Link></li>
              <li><Link href="/platform" className="hover:text-white transition-colors">Platform</Link></li>
              <li><Link href="/communities" className="hover:text-white transition-colors">Communities</Link></li>
              <li><Link href="/humanly-os" className="hover:text-white transition-colors">Humanly OS</Link></li>
              <li><Link href="/invest" className="hover:text-white transition-colors">Invest</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info, Socials, Contact Button */}
          <div className="flex flex-col items-center text-center gap-6 w-full lg:w-[30%] lg:items-end lg:text-right">
            {/* Contact Info */}
            <div className="text-[#a8a5a0] text-base flex flex-col gap-1.5">
              <a href="mailto:hello@humanly.com" className="hover:text-white transition-colors">hello@humanly.com</a>
              <p>123 Humanly Way</p>
              <p>New York, NY 10001</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-row justify-center lg:justify-end gap-4 mt-2 w-full">
              <Link href="#" className="bg-white/10 hover:bg-white/20 hover:scale-110 p-3 rounded-full text-white transition-all shadow-sm" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.28 2 8.94 2.01 7.84 2.06C6.75 2.11 6.01 2.28 5.35 2.54C4.69 2.8 4.11 3.16 3.53 3.74C2.95 4.32 2.59 4.91 2.33 5.56C2.07 6.22 1.9 6.96 1.85 8.05C1.8 9.15 1.79 9.49 1.79 12C1.79 14.51 1.8 14.85 1.85 15.95C1.9 17.04 2.07 17.78 2.33 18.44C2.59 19.09 2.95 19.68 3.53 20.26C4.11 20.84 4.69 21.2 5.35 21.46C6.01 21.72 6.75 21.89 7.84 21.94C8.94 21.99 9.28 22 12 22C14.72 22 15.06 21.99 16.16 21.94C17.25 21.89 17.99 21.72 18.65 21.46C19.31 21.2 19.89 20.84 20.47 20.26C21.05 19.68 21.41 19.09 21.67 18.44C21.93 17.78 22.1 17.04 22.15 15.95C22.2 14.85 22.21 14.51 22.21 12C22.21 9.49 22.2 9.15 22.15 8.05C22.1 6.96 21.93 6.22 21.67 5.56C21.41 4.91 21.05 4.32 20.47 3.74C19.89 3.16 19.31 2.8 18.65 2.54C17.99 2.28 17.25 2.11 16.16 2.06C15.06 2.01 14.72 2 12 2ZM12 4.18C14.67 4.18 14.98 4.19 16.07 4.24C17.06 4.29 17.6 4.45 17.96 4.59C18.44 4.78 18.78 5.01 19.13 5.37C19.49 5.72 19.72 6.06 19.91 6.54C20.05 6.9 20.21 7.44 20.26 8.43C20.31 9.52 20.32 9.83 20.32 12.5C20.32 15.17 20.31 15.48 20.26 16.57C20.21 17.56 20.05 18.1 19.91 18.46C19.72 18.94 19.49 19.28 19.13 19.63C18.78 19.99 18.44 20.22 17.96 20.41C17.6 20.55 17.06 20.71 16.07 20.76C14.98 20.81 14.67 20.82 12 20.82C9.33 20.82 9.02 20.81 7.93 20.76C6.94 20.71 6.4 20.55 6.04 20.41C5.56 20.22 5.22 19.99 4.87 19.63C4.51 19.28 4.28 18.94 4.09 18.46C3.95 18.1 3.79 17.56 3.74 16.57C3.69 15.48 3.68 15.17 3.68 12.5C3.68 9.83 3.69 9.52 3.74 8.43C3.79 7.44 3.95 6.9 4.09 6.54C4.28 6.06 4.51 5.72 4.87 5.37C5.22 5.01 5.56 4.78 6.04 4.59C6.4 4.45 6.94 4.29 7.93 4.24C9.02 4.19 9.33 4.18 12 4.18ZM12 6.87C9.17 6.87 6.87 9.17 6.87 12C6.87 14.83 9.17 17.13 12 17.13C14.83 17.13 17.13 14.83 17.13 12C17.13 9.17 14.83 6.87 12 6.87ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25ZM16.54 6.2C16.54 6.89 15.98 7.45 15.29 7.45C14.6 7.45 14.04 6.89 14.04 6.2C14.04 5.51 14.6 4.95 15.29 4.95C15.98 4.95 16.54 5.51 16.54 6.2Z" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 hover:scale-110 p-3 rounded-full text-white transition-all shadow-sm" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H16.92V14.88c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.133 1.445-2.133 2.938v5.671H9.41V9h3.38v1.561h.048c.47-.89 1.616-1.83 3.33-1.83 3.563 0 4.22 2.344 4.22 5.394v6.327h.059zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065A2.064 2.064 0 1 1 5.337 7.433zM7.108 20.452H3.568V9h3.54v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 hover:scale-110 p-3 rounded-full text-white transition-all shadow-sm" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 hover:scale-110 p-3 rounded-full text-white transition-all shadow-sm" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582 6.186a2.617 2.617 0 0 0-1.846-1.846C18.106 3.9 12 3.9 12 3.9s-6.106 0-7.736.44a2.617 2.617 0 0 0-1.846 1.846C1.98 7.816 1.98 12 1.98 12s0 4.184.438 5.814a2.617 2.617 0 0 0 1.846 1.846C5.894 20.1 12 20.1 12 20.1s6.106 0 7.736-.44a2.617 2.617 0 0 0 1.846-1.846C22.02 16.184 22.02 12 22.02 12s0-4.184-.438-5.814zM9.98 15.474v-6.948l6.05 3.474-6.05 3.474z" />
                </svg>
              </Link>
            </div>
            
            {/* Contact Button */}
            <div className="mt-2">
              <Link
                href="/contact"
                className="bg-[#ffff]/90 hover:bg-[#ffff]/70 text-black font-medium py-3 px-8 rounded-xl transition-colors inline-block text-base"
              >
                Contact
              </Link>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6"></div>

        {/* Bottom Bar - Centered inline text */}
        <div className="flex justify-center text-center">
          <p className="text-sm text-[#a8a5a0] flex flex-wrap justify-center items-center gap-2">
            <span>Copyright © 2026 Humanly</span>
            <span className="hidden sm:inline">|</span>
            <span>All Rights Reserved</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
          </p>
        </div>
        
      </div>
    </footer>
  );
};
