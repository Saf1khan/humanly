"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export const DataRoomForm = () => {
  return (
    <section className="relative w-full bg-[#111213] py-24 overflow-hidden text-sandstone-200 font-sans rounded-b-[40px] md:rounded-b-[64px] z-20">
      
      {/* Background Gradients (matching the Oura blue glow) */}
      <div 
        className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]" 
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.15), rgba(105, 165, 255, 0.05) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div 
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]" 
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.12), rgba(105, 165, 255, 0.05) 50%, rgba(105, 165, 255, 0))" }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">
        
        {/* Aside Image Container (Now on the left in the grid, matching the 2nd request) */}
        <div className="relative z-10 w-full h-[400px] lg:h-full min-h-[400px] overflow-hidden rounded-2xl shadow-2xl">
          <Image 
            src="/images/pexels-thirdman-8470773.jpg" 
            alt="Humanly Data Room" 
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Subtle gradient overlay to match Oura style */}
          <div className="z-10 absolute bottom-0 right-0 h-full w-full bg-gradient-to-t from-[#111213]/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Form Container */}
        <div className="flex flex-col gap-8 relative z-10 bg-neutral-900/40 backdrop-blur-md border border-white/5 p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl h-full">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Request Data Room Access</h2>
            <p className="text-neutral-400 text-lg">Please fill out the form below to receive exclusive access to the Humanly Data Room.</p>
          </div>
          
          <form className="flex flex-col gap-6 mt-2" onSubmit={(e) => e.preventDefault()}>
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-sandstone-200">Full Name <span className="text-[#A8A5A0]">*</span></label>
                <input type="text" placeholder="Your name" required className="w-full bg-[#1d1e20] border border-neutral-700/50 rounded-lg p-3.5 text-white placeholder-neutral-500 focus:border-[#A8A5A0] focus:ring-1 focus:ring-[#A8A5A0] transition-all outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-sandstone-200">Email <span className="text-[#A8A5A0]">*</span></label>
                <input type="email" placeholder="you@example.com" required className="w-full bg-[#1d1e20] border border-neutral-700/50 rounded-lg p-3.5 text-white placeholder-neutral-500 focus:border-[#A8A5A0] focus:ring-1 focus:ring-[#A8A5A0] transition-all outline-none" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-sandstone-200">Firm / Organization <span className="text-[#A8A5A0]">*</span></label>
                <input type="text" placeholder="Company name" required className="w-full bg-[#1d1e20] border border-neutral-700/50 rounded-lg p-3.5 text-white placeholder-neutral-500 focus:border-[#A8A5A0] focus:ring-1 focus:ring-[#A8A5A0] transition-all outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-sandstone-200">Investor Type <span className="text-[#A8A5A0]">*</span></label>
                <select required className="w-full bg-[#1d1e20] border border-neutral-700/50 rounded-lg p-3.5 text-white focus:border-[#A8A5A0] focus:ring-1 focus:ring-[#A8A5A0] transition-all outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%238f96a3%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[position:right_1rem_center] bg-no-repeat">
                  <option value="" disabled selected>Select...</option>
                  <option value="Venture Capital">Venture Capital</option>
                  <option value="Private Equity">Private Equity</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="Family Office">Family Office</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-sandstone-200">Message (optional)</label>
              <textarea rows={4} placeholder="Tell us about your interest..." className="w-full bg-[#1d1e20] border border-neutral-700/50 rounded-lg p-3.5 text-white placeholder-neutral-500 focus:border-[#A8A5A0] focus:ring-1 focus:ring-[#A8A5A0] transition-all outline-none resize-none"></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button type="submit" className="w-full md:w-auto px-10 py-3.5 bg-white text-[#111213] font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                Request Data Room Access
              </button>
            </div>
            
            {/* Legal Consent */}
            <p className="text-sm text-[#8f96a3] mt-2 leading-relaxed">
              Humanly needs the contact information you provide to us to contact you regarding your inquiry about our products and services. You may unsubscribe from these communications at any time. By clicking submit below, you consent to allow Humanly to store and process the personal information submitted above.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};
