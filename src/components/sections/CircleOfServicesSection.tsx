"use client";
import React from 'react';

const carouselItems = [
  { src: "/images/HealthcareSvg.svg", alt: "Healthcare", label: "HEALTHCARE" },
  { src: "/images/wellnessSvg.svg", alt: "Fitness Studios & Programs", label: "Fitness Studios & Programs" },
  { src: "/images/FoodSvg.svg", alt: "Food On-Demand Delivery", label: "FOOD On-Demand Delivery" },
  { src: "/images/EducationSvg.svg", alt: "AI Tutoring", label: "AI Tutoring" },
  { src: "/images/workSvg.svg", alt: "Private Office Space", label: "Private Office\nSpace" },
  { src: "/images/TransportationSvg.svg", alt: "Car Service", label: "Car Service" },
  { src: "/images/EntertainmentSvg.svg", alt: "Entertainment", label: "ENTERTAINMENT" },
  { src: "/images/GeneralSvg.svg", alt: "Pet Services", label: "Pet Services" }
];

export const CircleOfServicesSection = () => {
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
      <div className="relative w-full flex justify-center items-center min-h-[42.5rem]">
      
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
        <style>{`
          @keyframes spin-carousel {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-spin-carousel {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-spin-carousel {
            animation: spin-carousel 40s linear infinite;
          }
          .animate-counter-spin-carousel {
            animation: counter-spin-carousel 40s linear infinite;
          }
        `}</style>
        
        <div className="relative flex justify-center items-center w-[42.5rem] h-[42.5rem] animate-spin-carousel">
          {carouselItems.map((item, index) => {
            const angle = index * 45 - 90; 
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 50 * Math.cos(rad);
            const y = 50 + 50 * Math.sin(rad);
            
            return (
              <div 
                key={index}
                className="absolute w-28 h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)] pointer-events-auto group cursor-pointer"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] origin-center animate-counter-spin-carousel">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="absolute w-[60%] h-[60%] top-[20%] left-[20%] object-contain"
                    loading="lazy"
                  />
                  {/* Full Image Overlay & Text - Shown on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 transform-gpu backface-hidden">
                    <p className="text-white text-[11px] md:text-[13px] font-bold text-center leading-tight tracking-wider drop-shadow-md uppercase whitespace-pre-line antialiased">
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
            <img 
              src="/images/asset%200.png" 
              alt="Humanly Logo" 
              className="w-full h-full object-contain relative z-10 scale-[1.15]"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
