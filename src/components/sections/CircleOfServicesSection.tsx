"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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

export const CircleOfServicesSection = () => {
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
    <section className="relative w-full bg-[#020108] flex flex-col items-center overflow-hidden pt-24 pb-32">
      
      {/* Title & Description - Top Left */}
      <div className="w-full z-20 mb-16 md:mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col items-start">
          <h2 className="text-left text-white font-sans leading-tight font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-tight">
            Circle of Services
          </h2>
          <p className="mt-4 md:mt-6 text-left text-white/80 max-w-[22rem] md:max-w-lg lg:max-w-xl text-[1.1rem] md:text-[1.25rem] leading-relaxed font-sans">
            Humanly’s Circle of Services is a fully integrated ecosystem designed to support the whole person by bringing everyday essentials together in one seamless experience.
          </p>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center min-h-[42.5rem]">
      
      {/* Central Gradient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] rounded-full pointer-events-none z-[1]"
        style={{ 
          background: 'linear-gradient(90deg, #4179F2 0%, #F55D33 50%, #FFE366 100%)',
          filter: 'blur(80px)',
          opacity: 0.25
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
                className={`absolute w-28 h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] overflow-hidden pointer-events-auto group cursor-pointer transition-all duration-[1000ms] ease-in-out ${activeIndex === index ? 'opacity-100 scale-125 shadow-[0_0_40px_rgba(255,255,255,0.15)] z-20' : 'opacity-40 scale-95 shadow-[0_8px_24px_rgba(0,0,0,0.2)] z-10'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div 
                  className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] origin-center transition-transform duration-[2500ms] ease-in-out"
                  style={{ transform: `rotate(${-rotation}deg)` }}
                >
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={100}
                    height={100}
                    className="absolute w-[60%] h-[60%] top-[20%] left-[20%] object-contain"
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
            className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-white/20 flex items-center justify-center pointer-events-auto shadow-2xl p-4 relative overflow-hidden"
            style={{ 
              backgroundImage: 'url("/images/Humanly_HeroGradient_NoGrain_CMYK.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Image 
              src="/images/asset%200.png" 
              alt="Humanly Logo" 
              width={200}
              height={200}
              className="w-full h-full object-contain relative z-10 scale-[1.15]"
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

              <h3 className="text-[#f7f1e8] text-[1.5rem] font-bold tracking-tight mb-6 uppercase">
                {item.label}
              </h3>
              <ul className="flex flex-col gap-4">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-white/80 text-[1.05rem] leading-snug">
                    <span className="mr-3 text-white/50 font-bold mt-1">•</span>
                    <span>{detail}</span>
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
