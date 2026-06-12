"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CircleOfServicesSectionProps {
  isDark?: boolean;
}

const carouselItems = [
  {
    src: "/images/HealthcareSvg.svg", alt: "Healthcare", label: "HEALTHCARE",
    details: ["Preventative/Proactive", "On-call Consultants", "Integrated Provider Access", "Emotional Intelligence Programs"]
  },
  {
    src: "/images/wellnessSvg.svg", alt: "Wellness", label: "WELLNESS",
    details: ["AI-Enabled Fitness", "Pro Sports Ambassador Events", "Fitness Studios & Programs", "Pool & Spa"]
  },
  {
    src: "/images/FoodSvg.svg", alt: "Food", label: "FOOD",
    details: ["Restaurant", "Food Market", "Commercial Garden", "On-Demand Delivery"]
  },
  {
    src: "/images/EducationSvg.svg", alt: "Education", label: "EDUCATION",
    details: ["AI-Based Learning Lab", "AI Tutoring", "Weekly Workshops", "Continuous Learning Programs"]
  },
  {
    src: "/images/workSvg.svg", alt: "Work", label: "WORK",
    details: ["Shared & Private Office Space", "Conference Rooms", "Resource & Network Hub", "Daycare Services"]
  },
  {
    src: "/images/TransportationSvg.svg", alt: "Transportation", label: "TRANSPORTATION",
    details: ["Autonomous Car Service", "Ride Sharing", "Optimized Parking", "Trail Systems"]
  },
  {
    src: "/images/EntertainmentSvg.svg", alt: "Entertainment", label: "ENTERTAINMENT",
    details: ["Movie Theater", "Music Events", "Cultural Events & Activities", "Podcasts"]
  },
  {
    src: "/images/GeneralSvg.svg", alt: "General", label: "GENERAL",
    details: ["Home Maintenance", "Landscaping", "Housekeeping", "Dog Park/Pet Services"]
  }
];

const OSCircleOfServices = ({ isDark = true }: CircleOfServicesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 45);
      setActiveIndex(prev => (prev - 1 + 8) % 8);
    }, 6000); // 6s cycle: 2.5s for rotation, 3.5s pause to read
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full flex flex-col items-center overflow-hidden pt-24 pb-32"
    >

      {/* Title & Description - Top Left */}
      <div className="w-full z-20 mb-16 md:mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col items-start">
          {/* <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#aeb6be] mb-6">
            p16 / INTEGRATED MARKETPLACE
          </p>
          <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-8"></div> */}

          <h2 className="text-left text-white font-serif leading-tight font-normal text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-tight uppercase drop-shadow-sm" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            Circle of Services<span className="text-[0.4em] align-super">®</span>
          </h2>
          <p className={`mt-4 md:mt-6 text-left text-[#e2e8f0] max-w-[22rem] md:max-w-lg lg:max-w-xl text-[1.1rem] md:text-[1.25rem] leading-relaxed font-sans font-light`}>
            Humanly’s Circle of Services is a fully integrated ecosystem designed to support the whole person by bringing everyday essentials together in one seamless experience.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center min-h-[42.5rem]">

        {/* Central Gradient Glow — matched to page palette (steel blue + burnt orange) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] rounded-full pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 55%, transparent 75%)',
            filter: 'blur(50px)',
            opacity: isDark ? 0.6 : 0.8
          }}
        />

        <div className="absolute z-[3] pointer-events-none flex flex-col justify-center items-center box-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="relative flex justify-center items-center w-[42.5rem] h-[42.5rem] transition-transform duration-[2500ms] ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {carouselItems.map((item, index) => {
              const angle = index * 45 - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 50 * Math.cos(rad);
              const y = 50 + 50 * Math.sin(rad);

              return (
                <div
                  key={index}
                  className={`absolute w-28 h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] overflow-hidden pointer-events-auto group cursor-pointer transition-all duration-[1000ms] ease-in-out ${activeIndex === index ? 'opacity-100 scale-125 z-20' : 'opacity-80 scale-95 z-10'}`}
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    backgroundColor: 'rgb(29, 44, 56)',
                    boxShadow: activeIndex === index
                      ? '0 0 40px rgba(45, 125, 210, 0.35), 0 0 12px rgba(45, 125, 210, 0.2)'
                      : '0 8px 24px rgba(0,0,0,0.25)',
                    transition: 'box-shadow 0.6s ease, opacity 0.6s ease, transform 0.6s ease',
                  }}
                >
                  {/* The Gradient Layers (The "Glows") */}
                  <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 80% 40%, rgba(215, 226, 232, 0.2) 0px, transparent 50%)" }} />
                  <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 20% 90%, rgba(215, 226, 232, 0.1) 0px, transparent 50%)" }} />
                  <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 5% 5%, rgba(215, 226, 232, 0.1) 0px, transparent 30%)" }} />
                  <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 65% 65%, rgba(216, 202, 155, 0.1) 0px, transparent 30%)" }} />

                  <div
                    className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] origin-center transition-transform duration-[2500ms] ease-in-out z-10 flex items-center justify-center"
                    style={{ transform: `rotate(${-rotation}deg)` }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={100}
                      height={100}
                      className="w-[60%] h-[60%] object-contain brightness-0 invert"
                    />
                    {/* Full Image Overlay & Text - Shown on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                      <p
                        className="text-white text-[11px] md:text-[13px] font-bold text-center leading-tight tracking-wider uppercase whitespace-pre-line"
                        style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Logo Component */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
            <div
              className={`w-32 h-32 md:w-44 md:h-44 rounded-full border ${isDark ? 'border-white/10' : 'border-white/20'} flex items-center justify-center pointer-events-auto shadow-2xl p-4 relative overflow-hidden`}
              style={{
                background: 'rgb(22, 35, 46)',
                boxShadow: '0 0 0 1px rgba(45,125,210,0.2), 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle at 40% 30%, rgba(215,226,232,0.12) 0%, transparent 60%)' }} />
              <Image
                src="/images/Humanly_Logo_Mark_Gradient on Dark.svg"
                alt="Humanly Logo Mark"
                width={200}
                height={200}
                className="w-full h-full object-contain relative z-10 scale-[0.85]"
              />
            </div>
          </div>
        </div>

        {/* Right Side Details Panel */}
        <div className="absolute left-[calc(50%+30rem)] top-1/2 -translate-y-1/2 w-72 md:w-80 lg:w-[26rem] z-20 pointer-events-none hidden lg:block">
          <div className="relative flex flex-col items-start w-full h-[22rem]">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 z-10 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-start ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >

                <h3
                  className="text-white text-[1.5rem] font-normal tracking-wide mb-6 uppercase"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  {item.label}
                </h3>
                <ul className="flex flex-col gap-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-[#e2e8f0] text-[1rem] leading-snug font-light">
                      <span className="mr-3 text-[#2d7dd2] font-bold mt-1">•</span>
                      <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.1rem' }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSCircleOfServices;
