"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register ScrollTrigger outside component to avoid re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const problems = [
  {
    id: "01",
    title: "Fragmented Development",
    tagline: "Siloed housing systems weaken outcomes.",
    description:
      "Housing, services, financing, and operations are built in silos. Every handoff adds cost, loses intelligence, and weakens resident outcomes.",
    stat1: { label: "Cost Inefficiency", value: "30%" },
    stat2: { label: "Intelligence Loss", value: "High" },
    stat3: { label: "Handover Gaps", value: "Frequent" },
    image: "/images/pexels-kalpesh-patel-1333170-19672044.jpg",
    badge: "30%",
    badgeLabel: "more expensive",
  },
  {
    id: "02",
    title: "Affordability Crisis",
    tagline: "Workforce families are routinely priced out.",
    description:
      "Workforce families earning 80–120% AMI are routinely priced out of quality housing options in the communities that rely on them.",
    stat1: { label: "AMI Target", value: "80-120%" },
    stat2: { label: "Housing Gap", value: "7M+" },
    stat3: { label: "Price Increase", value: "12%/yr" },
    image: "/images/pexels-khwanchai-4174740.jpg",
    badge: "120%",
    badgeLabel: "AMI average",
  },
  {
    id: "03",
    title: "Disconnected Services",
    tagline: "Residents navigate providers with no unified access.",
    description:
      "Residents must navigate disconnected providers for healthcare, education, food, transport, and support with no unified point of access.",
    stat1: { label: "Time Wasted", value: "15hr/mo" },
    stat2: { label: "Trust Gap", value: "Widening" },
    stat3: { label: "Unified Access", value: "0%" },
    image: "/images/pexels-digitaljames-31561003.jpg",
    badge: "15h",
    badgeLabel: "time lost",
  },
  {
    id: "04",
    title: "No Wealth Building",
    tagline: "Traditional rentership extracts value every month.",
    description:
      "Traditional rentership extracts value every month without helping residents build credit, savings, financial literacy, or long-term security.",
    stat1: { label: "Wealth Built", value: "$0" },
    stat2: { label: "Equity Gap", value: "$240k" },
    stat3: { label: "Savings Rate", value: "Neg." },
    image: "/images/pexels-joslyn-pickens-2185980-3848193.jpg",
    badge: "0$",
    badgeLabel: "equity built",
  },
];

const ChevronLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const WProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % problems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  // GSAP ScrollTrigger Animations
  useLayoutEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const body = bodyRef.current;
    const image = imageRef.current;
    const cover = coverRef.current;
    const imageContainer = imageContainerRef.current;

    if (!container || !title || !body || !image || !cover || !imageContainer)
      return;

    // 1. Split the title text into lines and characters
    const split = new SplitType(title, { types: "lines,chars" });

    // Immediately reveal the title container
    gsap.set(title, { opacity: 1 });

    let ctx = gsap.context(() => {
      // 2. Character sliding entrance animation (same as WHeroSection)
      gsap.to(split.chars, {
        y: "0%",
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          each: 0.02,
          from: "center",
          grid: "auto",
        },
      });

      // 4. THE REVEAL (The Curtain)
      // If the image container is already in the viewport, use a smooth timed transition.
      // Otherwise, let ScrollTrigger trigger it when it enters the viewport.
      const isImgInViewport = ScrollTrigger.isInViewport(".image-container");
      if (isImgInViewport) {
        gsap.fromTo(
          cover,
          { yPercent: 0 },
          {
            yPercent: 100,
            duration: 1.2,
            ease: "power3.inOut",
          },
        );
      } else {
        gsap.fromTo(
          cover,
          { yPercent: 0 },
          {
            yPercent: 100,
            scrollTrigger: {
              trigger: ".image-container",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            duration: 1.2,
            ease: "power3.inOut",
          },
        );
      }

      // 3. THE SLIDE (The Smooth Parallax)
      // This moves the image SLOWLY inside the frame as you scroll, synchronized with the title scaling.
      gsap.fromTo(
        image,
        { yPercent: 4 },
        {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: ".ac-animated-heading", // Same parent trigger as the title
            start: "top bottom", // Same start position as the title
            end: "bottom center", // Same end position as the title
            scrub: 1, // Same smooth scrub effect as the title
          },
        },
      );

      // 5. Image Container Slide Down (when title is large)
      gsap.fromTo(
        imageContainer,
        { y: window.innerWidth > 1024 ? 120 : 40 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".ac-animated-heading", // Same trigger as title and image
            start: "top bottom", // Same start point
            end: "bottom center", // Same end point
            scrub: 1, // Same smooth scrub effect
          },
        },
      );

      // 6. Body Text Reveal
      // If the body text is already in the viewport, fade and slide it up beautifully.
      // Otherwise, let it scrub on initial scroll.
      const isBodyInViewport = ScrollTrigger.isInViewport(body);
      if (isBodyInViewport) {
        gsap.fromTo(
          body,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
          },
        );
      } else {
        gsap.fromTo(
          body,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: body,
              start: "top 90%",
              end: "top 70%",
              scrub: true,
            },
          },
        );
      }
    }, containerRef); // Scope to container

    return () => {
      ctx.revert(); // Cleanup GSAP animations on unmount
      split.revert(); // Revert SplitType changes on unmount/re-run
    };
  }, [currentIndex]); // Re-run animation when slide index changes

  const p = problems[currentIndex];
  // Split title to emulate the snippet style
  const words = p.title.split(" ");
  const firstPart = words[0];
  const secondPart = words.slice(1).join(" ");
  return (
    <section
      ref={containerRef}
      className="gl-b-container w-full first:pt-[70px] z-30 relative pb-12 md:pb-[60px] font-['Albert_Sans',-apple-system,BlinkMacSystemFont,sans-serif] overflow-x-hidden"
    >
      <style>{`
        .ac-animated-heading {
            -webkit-tap-highlight-color: transparent;
            font-variation-settings: normal;
            tab-size: 4;
            box-sizing: border-box;
            scrollbar-width: thin;
            scrollbar-color: #111111 transparent;
        }

        .wp-problem-title {
            color: #111111;
            font-family: "Cormorant Garamond", Georgia, serif;
            font-size: clamp(30px, 3vw, 48px);
            font-weight: 400;
            line-height: 1.08;
            letter-spacing: -0.03em;
            font-variant-ligatures: no-common-ligatures;
            transform-origin: bottom left;
            white-space: nowrap;
            padding-right: 0.15em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            opacity: 0; /* Hidden until SplitType finishes */
        }

        /* SplitType adds .line automatically — overflow:hidden masks the sliding chars */
        .wp-problem-title .line {
          overflow: hidden;
          padding-bottom: 0.15em; /* Prevents clipping descenders */
        }

        /* SplitType adds .char — starts hidden below the line mask with organic scale/rotate */
        .wp-problem-title .char {
          display: inline-block;
          transform: translateY(105%) scale(1.1) rotate(2deg);
          transform-origin: bottom left;
          opacity: 0;
          will-change: transform, opacity;
        }

        .font-minionPro {
            font-family: "Cormorant Garamond", Georgia, serif;
        }

        .font-albertSans {
            font-family: "Albert Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .scaled-heading {
            transform-origin: bottom left;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }

        .image-container {
            position: relative;
            overflow: hidden;
        }

        .parallax-image {
            will-change: transform;
        }

        .reveal-cover {
            transform: translateY(0%);
            will-change: transform;
        }

        .body-text {
            opacity: 0;
            will-change: transform, opacity;
        }
      `}</style>

      <div className="content-container max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="acf-innerblocks-container">
          <div key={currentIndex} className="gl-b-alternating-column relative">
            <div className="ac-animated-heading lg:flex lg:flex-row lg:justify-between pt-[50px] md:pt-[100px] lg:pt-[120px] gap-16 lg:gap-[40px] !overflow-visible">
              {/* Left Content: Text */}
              <div className="information-container order-1 flex flex-col w-full lg:w-[45%] justify-center lg:justify-center">
                <div className="w-full lg:max-w-[500px]">
                  <h1
                    ref={titleRef}
                    className="wp-problem-title font-serif font-normal text-[#111111]"
                  >
                    {firstPart} <span>{secondPart}</span>
                  </h1>

                  <div
                    ref={bodyRef}
                    className="body-text mt-6 lg:mt-[30px] text-[#111111] text-[15px] leading-relaxed md:text-[16px] lg:text-[17px] font-normal"
                  >
                    <p className="font-bold mb-4 text-[#111111]">{p.tagline}</p>
                    <p className="text-[#5F646B]">{p.description}</p>

                    <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(17,17,17,0.08)] pt-6">
                      <div className="flex justify-between">
                        <span className="text-[#5F646B]">{p.stat1.label}</span>
                        <span className="font-bold text-[#111111]">
                          {p.stat1.value}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5F646B]">{p.stat2.label}</span>
                        <span className="font-bold text-[#111111]">
                          {p.stat2.value}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5F646B]">{p.stat3.label}</span>
                        <span className="font-bold text-[#111111]">
                          {p.stat3.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content: Image & Navigation */}
              <div
                ref={imageContainerRef}
                className="order-2 flex flex-col w-full lg:w-[50%] lg:max-w-[750px]"
              >
                <div className="image-container rounded-[12px] lg:rounded-xl relative overflow-hidden h-[360px] lg:h-auto lg:aspect-[750/450] w-full">
                  {/* THE COVER: Only slides once to reveal */}
                  <div
                    ref={coverRef}
                    className="reveal-cover absolute inset-0 z-20 bg-[#F5F2ED]"
                  ></div>

                  {/* THE IMAGE: Moves slightly inside the container on scroll */}
                  <img
                    ref={imageRef}
                    loading="lazy"
                    decoding="async"
                    src={p.image}
                    className="parallax-image w-full h-full object-cover absolute top-0 left-0 scale-110"
                    alt={p.title}
                  />
                </div>

                {/* Navigation Arrows below the image */}
                <div className="flex gap-4 mt-6 justify-end">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-[rgba(17,17,17,0.2)] bg-white/90 shadow-sm flex items-center justify-center text-[#111111] hover:bg-[#6E7C8D] hover:text-[#131416] hover:border-[#6E7C8D] transition-all cursor-pointer hover:scale-105 active:scale-95 duration-200"
                    aria-label="Previous Problem"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-[rgba(17,17,17,0.2)] bg-white/90 shadow-sm flex items-center justify-center text-[#111111] hover:bg-[#6E7C8D] hover:text-[#131416] hover:border-[#6E7C8D] transition-all cursor-pointer hover:scale-105 active:scale-95 duration-200"
                    aria-label="Next Problem"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
