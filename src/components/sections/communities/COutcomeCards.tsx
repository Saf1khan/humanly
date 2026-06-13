"use client";

import React, { useEffect, useState } from "react";

const slideImages = {
  attainableHousing:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  integratedServices:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  financialEmpowerment:
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  communityConnection:
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
  economicMobility:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  healthWellness:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
};

const slides = [
  {
    title: "ATTAINABLE HOUSING",
    text: "High-quality manufactured, modular, multi-family, and site-built homes priced for the 80–120% AMI workforce — making ownership achievable.",
    imageKey: "attainableHousing",
    icon: "🏠",
    color: "#1a4f82",
    script: "Achievable Ownership",
  },
  {
    title: "INTEGRATED SERVICES",
    text: "Medical, educational, wellness, and community services embedded within walking distance — removing barriers that fracture daily life.",
    imageKey: "integratedServices",
    icon: "🏥",
    color: "#0d7d6a",
  },
  {
    title: "FINANCIAL EMPOWERMENT",
    text: "Ground lease structures lower entry costs. Residents build equity in their home while the operator stewards long-term community value.",
    imageKey: "financialEmpowerment",
    icon: "💰",
    color: "#d96a2b",
  },
  {
    title: "COMMUNITY CONNECTION",
    text: "Walkable design, shared spaces, and a village center that fosters real human connection — engineered for belonging, not just density.",
    imageKey: "communityConnection",
    icon: "🤝",
    color: "#5b3f9e",
  },
  {
    title: "ECONOMIC MOBILITY",
    text: "On-site employment, training centers, and AI-assisted resident navigation create pathways for upward mobility from within the community.",
    imageKey: "economicMobility",
    icon: "📈",
    color: "#2d7dd2",
  },
  {
    title: "HEALTH & WELLNESS",
    text: "Integrated preventive care, occupational therapy, IDD services, and recreational spaces designed for whole-person community health.",
    imageKey: "healthWellness",
    icon: "🌱",
    color: "#3daf98",
  },
];

export const COutcomeCards = () => {
  const CARD_ANIMATION_MS = 1500;
  const CONTENT_SWAP_DELAY_MS = 750;
  const CONTENT_REVEAL_MS = 900;

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
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
    setContentVisible(false);

    const nextIndex = (index + 1) % slides.length;
    const nextNextIndex = (index + 2) % slides.length;

    setCardOrder((prev) => {
      const nextOrder = [prev[1], prev[2], prev[0]];

      setCardSlides(() => {
        const newCardSlides = [0, 0, 0];
        newCardSlides[nextOrder[0]] = nextIndex;
        newCardSlides[nextOrder[1]] = nextNextIndex;
        newCardSlides[nextOrder[2]] = index;
        return newCardSlides;
      });

      return nextOrder;
    });

    setTimeout(() => {
      setIndex(nextIndex);
      setContentVisible(true);
    }, CONTENT_SWAP_DELAY_MS);

    setTimeout(() => {
      setIsAnimating(false);
    }, CARD_ANIMATION_MS);
  };

  const desktopSlots = [
    { x: "0px", y: "0px", a: "1", z: "3" },
    { x: "-56px", y: "-22px", a: ".98", z: "2" },
    { x: "-112px", y: "-44px", a: ".92", z: "1" },
  ];

  const mobileSlots = [
    { x: "0px", y: "0px", a: "1", z: "3" },
    { x: "0px", y: "-18px", a: ".97", z: "2" },
    { x: "0px", y: "-36px", a: ".92", z: "1" },
  ];

  const slots = isMobileView ? mobileSlots : desktopSlots;

  return (
    <section className="relative overflow-x-clip bg-transparent py-20 lg:py-32">
      <div
        className="absolute pointer-events-none left-0 top-1/4 h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.15), rgba(var(--radial-gradient-color, 170, 61, 173), 0.06) 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0))",
        }}
      />
      <div
        className="absolute pointer-events-none left-3/4 top-1/3 h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] -translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.10), rgba(var(--radial-gradient-color, 170, 61, 173), 0.04) 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0))",
        }}
      />

      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-24">
          <div className="relative min-h-auto w-full flex-shrink-0 pb-10 text-center lg:w-[420px] lg:pb-0 lg:text-left">
            <div className="relative flex w-full flex-col items-center text-center lg:items-start lg:text-left">
              <div className="pointer-events-none absolute -top-28 left-1/2 z-0 -translate-x-1/2 select-none font-ivy-ora text-[80px] font-light tracking-widest text-[#5C472B]/[0.06] lg:-left-2.5 lg:translate-x-0 md:text-[130px]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 font-albert text-[10px] font-medium uppercase tracking-widest text-sandstone-500">
                GLOBAL RECOGNITION &amp; STANDARDS
              </div>

              <h2 className="relative z-10 m-0 font-cormorant text-3xl font-normal leading-[40px] tracking-tight text-sandstone-500 md:text-5xl md:leading-[60px]">
                Community Outcomes
                <br />
                by <span className="italic">System Design</span>
              </h2>

              <p className="mt-7 max-w-[400px] font-albert text-base font-light leading-[28px] text-sandstone-500 md:text-lg md:leading-[30px]">
                Every Humanly® community provides sustained structural advantages.
                We blend master planning, land stewardship, and digital
                infrastructure to redefine suburban wellness and attainable
                living. From land design to resident pathways, our frameworks
                foster an integrated ecosystem for dining, living, and thriving.
              </p>
            </div>
          </div>

          <div className="w-full flex-shrink-0 lg:w-[640px]">
            <div className="relative grid w-full grid-cols-1 items-center gap-0 md:grid-cols-[1.15fr_1fr]">
              <div
                className="relative isolate z-[3] h-[clamp(400px,118vw,580px)] max-h-[600px] cursor-pointer rounded-[2000px_2000px_0_0] md:h-[clamp(320px,72vw,420px)] md:cursor-default md:rounded-none lg:h-[clamp(380px,42vw,560px)]"
                aria-label="Experience images"
                onClick={() => {
                  if (isMobileView) goNext();
                }}
              >
                {[0, 1, 2].map((cardIdx) => {
                  const slotIndex = cardOrder.indexOf(cardIdx);
                  const slot = slots[slotIndex];
                  const pinnedSlide = slides[cardSlides[cardIdx]];
                  const imageUrl =
                    slideImages[
                      pinnedSlide.imageKey as keyof typeof slideImages
                    ];

                  return (
                    <figure
                      key={cardIdx}
                      className="absolute inset-0 h-full w-full overflow-hidden rounded-[2000px_2000px_0_0] bg-gray-200 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backface-hidden transition-[transform,opacity] will-change-transform motion-reduce:transition-none md:rounded-3xl"
                      style={{
                        transform: `translate3d(${slot.x}, ${slot.y}, 0)`,
                        opacity: slot.a,
                        zIndex: slot.z,
                        transitionDuration: `${CARD_ANIMATION_MS}ms`,
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={pinnedSlide.title}
                        className="block h-full w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  );
                })}

                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#0a0a0a]/18 via-[#0a0a0a]/42 via-[#0a0a0a]/68 to-[#0a0a0a]/88 md:hidden" />

                <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center px-[22px] py-[28px] md:hidden" aria-hidden="true">
                  <div className="w-full max-w-[320px] text-center text-white">
                    <h3 className="m-0 font-cormorant text-xl font-light uppercase tracking-tight text-white leading-[28px]">
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

              <div className="relative z-[2] mt-[23px] flex min-h-[300px] w-full flex-col rounded-r-3xl bg-transparent p-[35px] pb-[calc(35px+44px)] text-white shadow-none before:absolute before:-left-[92px] before:top-0 before:z-[-1] before:hidden before:h-full before:w-[92px] before:bg-[#5C472B] before:content-[''] md:mt-0 md:h-[320px] md:max-w-[500px] md:justify-self-end md:bg-[#5C472B] md:shadow-[0_20px_70px_rgba(0,0,0,0.10)] md:before:block">
                <div
                  className={`hidden md:block transition-[opacity,transform,filter] will-change-transform motion-reduce:transition-none ${
                    contentVisible
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-[22px] opacity-0 blur-[12px]"
                  }`}
                  style={{
                    transitionDuration: `${CONTENT_REVEAL_MS}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <h3 className="m-0 mb-3 font-cormorant text-2xl font-light uppercase leading-[36px] tracking-wide text-white">
                    {slides[index].title}
                  </h3>
                  <p className="m-0 max-w-50 font-albert text-sm font-light leading-[24px] text-white/86">
                    {slides[index].text}
                  </p>
                </div>

                <button
                  className="group absolute left-1/2 bottom-auto inline-flex -translate-x-1/2 items-center justify-center gap-3 border-0 bg-transparent p-0 text-2xl font-normal uppercase leading-none tracking-[0.8px] text-white outline-none md:left-[35px] md:bottom-[35px] md:translate-x-0"
                  type="button"
                  onClick={goNext}
                  aria-label={`Next outcome (${index + 1}/${slides.length})`}
                >
                  <span
                    className="relative inline-block text-[#3F2C1F] after:absolute after:left-0 after:bottom-[-8px] after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#3F2C1F]/34 after:transition-transform after:duration-200 after:content-[''] group-hover:after:scale-x-100 md:text-white md:after:bg-white/35 md:group-hover:after:block"
                    style={{ fontFamily: "'IvyOraDisplay', serif" }}
                  >
                    {index + 1}/{slides.length}
                  </span>
                  <span
                    className="mt-[1px] h-[9px] w-[9px] flex-shrink-0 -rotate-45 border-r-[1.5px] border-b-[1.5px] border-[#3F2C1F]/90 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] md:border-white/90"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};