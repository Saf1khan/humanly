"use client";

import React, { useState, useEffect } from "react";

const slideImages = {
  attainableHousing: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  integratedServices: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  financialEmpowerment: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  communityConnection: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
  economicMobility: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  healthWellness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
};

const slides = [
  {
    title: "ATTAINABLE HOUSING",
    text: "High-quality manufactured, modular, multi-family, and site-built homes priced for the 80–120% AMI workforce — making ownership achievable.",
    imageKey: "attainableHousing",
    icon: "🏠",
    color: "#1a4f82",
    script: "Achievable Ownership"
  },
  {
    title: "INTEGRATED SERVICES",
    text: "Medical, educational, wellness, and community services embedded within walking distance — removing barriers that fracture daily life.",
    imageKey: "integratedServices",
    icon: "🏥",
    color: "#0d7d6a",
    script: "Embedded Support"
  },
  {
    title: "FINANCIAL EMPOWERMENT",
    text: "Ground lease structures lower entry costs. Residents build equity in their home while the operator stewards long-term community value.",
    imageKey: "financialEmpowerment",
    icon: "💰",
    color: "#d96a2b",
    script: "Equity & Value"
  },
  {
    title: "COMMUNITY CONNECTION",
    text: "Walkable design, shared spaces, and a village center that fosters real human connection — engineered for belonging, not just density.",
    imageKey: "communityConnection",
    icon: "🤝",
    color: "#5b3f9e",
    script: "Engineered Belonging"
  },
  {
    title: "ECONOMIC MOBILITY",
    text: "On-site employment, training centers, and AI-assisted resident navigation create pathways for upward mobility from within the community.",
    imageKey: "economicMobility",
    icon: "📈",
    color: "#2d7dd2",
    script: "Pathways Upward"
  },
  {
    title: "HEALTH & WELLNESS",
    text: "Integrated preventive care, occupational therapy, IDD services, and recreational spaces designed for whole-person community health.",
    imageKey: "healthWellness",
    icon: "🌱",
    color: "#3daf98",
    script: "Whole-Person Health"
  }
];

export const COutcomeCards = () => {
  const [index, setIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // cardOrder[slotPosition] = which DOM card node lives in that slot (0=front,1=mid,2=back)
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  // Each DOM card has its own pinned slide index — never changes mid-animation
  const [cardSlides, setCardSlides] = useState([0, 1, 2]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsLeaving(true);

    const nextIndex = (index + 1) % slides.length;
    const nextNextIndex = (index + 2) % slides.length;

    // Step 1: BEFORE the transition, pre-assign the card that will rotate to the back
    // with the image it needs to show when it arrives at the front in future slides.
    // cardOrder[2] is the current back card — it becomes front on next next cycle.
    // We assign it nextNextIndex so it already has the right image when it rotates forward.
    setCardOrder((prev) => {
      const nextOrder = [prev[1], prev[2], prev[0]];
      // Pre-assign images: next front = nextIndex, next mid = nextNextIndex, next back = current front
      setCardSlides(() => {
        const newCardSlides = [0, 0, 0];
        newCardSlides[nextOrder[0]] = nextIndex;        // new front card shows nextIndex
        newCardSlides[nextOrder[1]] = nextNextIndex;    // new mid card shows nextNextIndex
        newCardSlides[nextOrder[2]] = index;            // new back card keeps current (will be overwritten next time)
        return newCardSlides;
      });
      return nextOrder;
    });

    // Step 2: Blur out text and swap to next text mid-transition
    setTimeout(() => {
      setIndex(nextIndex);
      setIsLeaving(false);
      setIsEntering(true);

      setTimeout(() => {
        setIsEntering(false);
        setIsAnimating(false);
      }, 310);
    }, 210);
  };

  // Desktop slots
  const desktopSlots = [
    { x: "0px", y: "0px", a: "1", z: "3" },
    { x: "-56px", y: "-22px", a: ".98", z: "2" },
    { x: "-112px", y: "-44px", a: ".92", z: "1" }
  ];

  // Mobile slots
  const mobileSlots = [
    { x: "0px", y: "0px", a: "1", z: "3" },
    { x: "0px", y: "-18px", a: ".97", z: "2" },
    { x: "0px", y: "-36px", a: ".92", z: "1" }
  ];

  const slots = isMobileView ? mobileSlots : desktopSlots;

  return (
    <section className="relative bg-transparent py-20 lg:py-32 overflow-x-clip">
      {/* Violet radial gradient overlay */}
      <div
        className="absolute pointer-events-none left-0 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(170, 61, 173, 0.10), rgba(170, 61, 173, 0.06) 50%, rgba(170, 61, 173, 0))",
        }}
      />
      <div
        className="absolute pointer-events-none left-3/4 top-1/3 -translate-x-1/2 -translate-y-1/3 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(170, 61, 173, 0.15), rgba(170, 61, 173, 0.06) 50%, rgba(170, 61, 173, 0))",
        }}
      />
      {/* Font imports & custom declarations only */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500&display=swap");

        @font-face {
          font-family: "IvyOraDisplay";
          src: url("https://khufus.com/wp-content/uploads/2026/02/IvyOraDisplay-Light.woff2") format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GoldenHopes";
          src: url("https://khufus.com/wp-content/uploads/2026/02/GoldenHopes.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .exp-card-transition {
          transition: transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1), opacity 520ms cubic-bezier(0.2, 0.9, 0.2, 1);
          will-change: transform, opacity;
        }
      ` }} />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 justify-between">
          
          {/* LEFT NARRATIVE COLUMN */}
          <div className="relative w-full flex flex-col justify-between items-center text-center lg:items-start lg:text-left lg:w-[420px] lg:flex-shrink-0 min-h-auto pb-10 lg:pb-0">
            <div className="relative w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div 
                className="absolute -top-12 left-1/2 -translate-x-1/2 lg:-left-2.5 lg:translate-x-0 font-light text-[clamp(58px,18vw,130px)] lg:text-[130px] leading-[0.8] tracking-[0.02em] text-[#5C472B]/[0.06] select-none pointer-events-none z-0"
                style={{ fontFamily: "'IvyOraDisplay', serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div 
                className="relative z-10 mb-3.5 text-[11px] tracking-[0.3em] uppercase text-[#8B715C] font-normal"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                GLOBAL RECOGNITION &amp; STANDARDS
              </div>

              <h2 
                className="relative z-10 m-0 font-light text-[clamp(28px,4vw,36px)] leading-[0.98] tracking-normal uppercase text-[#3F2C1F]"
                style={{ fontFamily: "'IvyOraDisplay', serif" }}
              >
                COMMUNITY OUTCOMES<br />
                BY SYSTEM DESIGN
                <span 
                  className="block mt-1 ml-0 lg:ml-[60px] text-[26px] leading-none tracking-[0.02em] capitalize text-[#7B5E4A] -rotate-[2deg]"
                  style={{ fontFamily: "'GoldenHopes', cursive" }}
                >
                  {slides[index].script}
                </span>
              </h2>

              <p 
                className="mt-7 max-w-[380px] text-sm leading-[1.85] font-light text-[#3F2C1F]/74"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Every Humanly® community is engineered to deliver sustained structural advantages. 
                We combine thoughtful master planning, land stewardship, and digital infrastructure 
                to redefine suburban wellness and attainable living. From structural land design to resident pathways, our frameworks foster an integrated dining, living, and thriving ecosystem.
              </p>
            </div>
          </div>

          {/* RIGHT INTERACTIVE COLUMN */}
          <div className="w-full lg:w-[640px] lg:flex-shrink-0">
            <div className="relative grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center gap-0 w-full">
              <div 
                className="relative h-[clamp(400px,118vw,580px)] md:h-[clamp(320px,72vw,420px)] lg:h-[clamp(380px,42vw,560px)] max-h-[600px] isolate z-[3] rounded-[2000px_2000px_0_0] md:rounded-none cursor-pointer md:cursor-default" 
                aria-label="Experience images"
                onClick={() => {
                  if (isMobileView) goNext();
                }}
              >
                {/* Render 3 card DOM nodes. Each has a pinned image (cardSlides[cardIdx])
                    that is pre-assigned BEFORE animation starts — so image never changes mid-motion */}
                {[0, 1, 2].map((cardIdx) => {
                  const slotIndex = cardOrder.indexOf(cardIdx);
                  const slot = slots[slotIndex];

                  // Use per-card pinned slide — immune to mid-animation swaps
                  const pinnedSlide = slides[cardSlides[cardIdx]];
                  const imageUrl = slideImages[pinnedSlide.imageKey as keyof typeof slideImages];

                  return (
                    <figure 
                      key={cardIdx}
                      className={`absolute inset-0 w-full h-full rounded-[2000px_2000px_0_0] md:rounded-none overflow-hidden bg-gray-200 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backface-hidden exp-card-transition`}
                      style={{
                        transform: `translate3d(${slot.x}, ${slot.y}, 0)`,
                        opacity: slot.a,
                        zIndex: slot.z
                      } as React.CSSProperties}
                    >
                      <img 
                        src={imageUrl} 
                        alt={pinnedSlide.title} 
                        className="w-full h-full object-cover block"
                        loading="lazy"
                      />
                    </figure>
                  );
                })}

                {/* Gradient overlay for mobile card depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/18 via-[#0a0a0a]/42 via-[#0a0a0a]/68 to-[#0a0a0a]/88 pointer-events-none z-[1] md:hidden" />

                <div className="flex md:hidden absolute inset-0 z-10 items-end justify-center px-[22px] py-[28px] pointer-events-none" aria-hidden="true">
                  <div className="w-full max-w-[320px] text-center text-white">
                    <h3 
                      className="m-0 font-normal text-2xl leading-[1.02] tracking-[0.03em] uppercase text-white"
                      style={{ fontFamily: "'IvyOraDisplay', serif" }}
                    >
                      {slides[index].title}
                    </h3>
                    <div className="mt-3">
                      <p 
                        className="m-0 text-xs font-light leading-[1.72] text-white/88"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {slides[index].text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative md:justify-self-end w-full md:max-w-[500px] bg-[#5C472B] text-white rounded-none p-[35px] shadow-none md:shadow-[0_20px_70px_rgba(0,0,0,0.10)] z-[2] min-h-[300px] md:h-[320px] flex flex-col pb-[calc(35px+44px)] before:content-[''] before:absolute before:-left-[92px] before:top-0 before:w-[92px] before:h-full before:bg-[#5C472B] before:z-[-1] before:hidden md:before:block mt-[23px] md:mt-0 bg-transparent md:bg-[#5C472B]">
                <div 
                  className={`hidden md:block will-change-[opacity,filter,transform] transition-all duration-[240ms] ease-out ${isLeaving ? "opacity-0 blur-[10px] translate-y-1.5" : ""} ${isEntering ? "opacity-0 blur-[10px] -translate-y-1.5" : ""}`}
                >
                  <h3 
                    className="m-0 mb-3 text-2xl font-normal leading-[1.12] tracking-[0.8px] uppercase text-white"
                    style={{ fontFamily: "'IvyOraDisplay', serif" }}
                  >
                    {slides[index].title}
                  </h3>
                  <p 
                    className="m-0 text-xs font-light leading-[1.75] tracking-[0.2px] text-white/86 max-w-[60ch]"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {slides[index].text}
                  </p>
                </div>

                <button 
                  className="group absolute md:left-[35px] md:bottom-[35px] left-1/2 -translate-x-1/2 md:translate-x-0 bottom-auto p-0 border-0 bg-transparent text-white cursor-pointer inline-flex items-center justify-center gap-3 text-2xl font-normal leading-none tracking-[0.8px] uppercase select-none outline-none text-[#3F2C1F] md:text-white"
                  type="button" 
                  onClick={goNext}
                  aria-label={`Next outcome (${index + 1}/${slides.length})`}
                >
                  <span 
                    className="relative inline-block text-[#3F2C1F] md:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-[1px] after:bg-[#3F2C1F]/34 md:after:bg-white/35 after:scale-x-0 after:origin-left after:transition-transform after:duration-220 group-hover:after:scale-x-100 group-hover:after:hidden md:group-hover:after:block"
                    style={{ fontFamily: "'IvyOraDisplay', serif" }}
                  >
                    {index + 1}/{slides.length}
                  </span>
                  <span className="flex-shrink-0 w-[9px] h-[9px] mt-[1px] border-r-[1.5px] border-b-[1.5px] border-[#3F2C1F]/90 md:border-white/90 -rotate-45 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true"></span>
                </button>
              </div>

              <div className="block md:hidden w-full mt-10 text-center" aria-hidden="true">
                <div className="w-[84px] h-[1px] bg-[#3F2C1F]/14 mx-auto mb-3"></div>
                <p 
                  className="m-0 max-w-[320px] mx-auto text-[11px] leading-[1.7] font-light text-[#3F2C1F]/60 text-center"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  From structural land design to resident pathways, our frameworks foster an integrated living and thriving ecosystem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


