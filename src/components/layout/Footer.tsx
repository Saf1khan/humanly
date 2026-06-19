"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-sandstone-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-16 pb-16">
        {/* Top Section: Logo & Payment Options */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between text-gray-400 gap-10 lg:gap-2 mb-10 lg:mb-16">
          {/* Logo - Humanly */}
          <div className="text-white">
            <h2 className="text-2xl font-bold tracking-tighter">HUMANLY</h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex lg:flex-row flex-col-reverse gap-12">
          {/* Newsletter Column */}
          <div className="w-full lg:w-64 xl:w-96 shrink-0 grow-0 flex flex-col gap-6">
            <span className="text-2xl md:text-3xl text-[#a8a5a0] font-serif leading-tight font-light tracking-tight">
              Receive articles, tips, and offers from Humanly
            </span>

            <div className="flex flex-col gap-4">
              <form
                className="relative w-full xl:w-80"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  aria-label="Email address"
                  autoComplete="email"
                  className="w-full rounded-xl bg-[#4a4741] placeholder-white/60 text-white pl-5 py-3 pr-12 tracking-wide focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="Email address"
                  required
                  type="email"
                />
                <button
                  aria-label="submit email for newsletter"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-transparent rounded-lg transition-colors text-white/60 hover:text-white"
                  type="submit"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="12"
                    viewBox="0 0 21 12"
                    width="21"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </form>

              <div className="text-xs text-[#a8a5a0] font-sans">
                <p>We care about protecting your data.</p>
                <p>
                  Read more in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {/* Our Company */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">
                Our Company
              </span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {["About Us", "Team", "Impact", "Careers", "Newsroom"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href={link === "Team" ? "/team" : "#"}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">
                Support
              </span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {[
                  "Help Center",
                  "Resident Support",
                  "Leasing Help",
                  "Financial FAQs",
                  "Invest",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner With Us */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">
                Partner With Us
              </span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {[
                  "Municipalities",
                  "Investors",
                  "Developers",
                  "Affiliates",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-bold text-[#a8a5a0]">
                Connect
              </span>
              <ul className="flex flex-col gap-2 text-sandstone-200">
                {["Blog", "LinkedIn", "Instagram", "X", "YouTube"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mt-12 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[#a8a5a0] text-xs">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Accessibility",
                "IP Notice",
                "Security Center",
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#a8a5a0]">
              © 2026 Humanly. All rights reserved. HUMANLY, HUMANLY OS, and the
              Humanly logo are trademarks of Humanly.
            </p>
          </div>

          <button
            type="button"
            className="border border-white/20 rounded-full py-2 px-6 text-white flex flex-row gap-2 items-center hover:bg-white/5 transition-all text-sm"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              viewBox="0 0 19 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 19.5C8.1975 19.5 6.96833 19.2503 5.8125 18.751C4.65667 18.2517 3.64867 17.5718 2.7885 16.7115C1.92817 15.8513 1.24833 14.8433 0.749 13.6875C0.249667 12.5317 0 11.3025 0 10C0 8.68717 0.249667 7.45542 0.749 6.30475C1.24833 5.15408 1.92817 4.14867 2.7885 3.2885C3.64867 2.42817 4.65667 1.74833 5.8125 1.249C6.96833 0.749667 8.1975 0.5 9.5 0.5C10.8128 0.5 12.0446 0.749667 13.1953 1.249C14.3459 1.74833 15.3513 2.42817 16.2115 3.2885C17.0718 4.14867 17.7517 5.15408 18.251 6.30475C18.7503 7.45542 19 8.68717 19 10C19 11.3025 18.7503 12.5317 18.251 13.6875C17.7517 14.8433 17.0718 15.8513 16.2115 16.7115C15.3513 17.5718 14.3459 18.2517 13.1953 18.751C12.0446 19.2503 10.8128 19.5 9.5 19.5Z"
                fill="currentColor"
              ></path>
            </svg>
            English
          </button>
        </div>
      </div>
    </footer>
  );
};
