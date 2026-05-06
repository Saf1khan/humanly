"use client";

import { useRef, useCallback } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg">
    {direction === "left" ? (
      <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696698C6.01041 0.403804 5.53553 0.403804 5.24264 0.696698L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z" fill="currentColor" />
    ) : (
      <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor" />
    )}
  </svg>
);

const cards = [
  {
    id: "problem-1",
    title: "Fragmented Development",
    description: "Housing, services, and technology developed in silos with no integration.",
    image: "/images/pexels-pavel-danilyuk-7937750.jpg"
  },
  {
    id: "problem-2",
    title: "Affordability Crisis",
    description:
      "Workforce families priced out of quality housing in thriving communities.",
    image: "/images/AdobeStock_322369552.jpeg",
  },
  {
    id: "problem-3",
    title: "Disconnected Services",
    description:
      "Residents navigate dozens of providers with no unified access point.",
    image: "/images/AdobeStock_308963762.jpeg",
  },
  {
    id: "problem-4",
    title: "No Wealth Building",
    description:
      "Traditional rentership extracts value with zero path to financial growth.",
    image: "/images/AdobeStock_289876368.jpeg",
  },
  {
    id: "problem-5",
    title: "Isolated Communities",
    description:
      "A lack of central gathering spaces leads to social isolation and reduced community engagement.",
    image: "/images/AdobeStock_416790222.jpeg", 
  }
];

export const ProblemSection = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    if (slideRef.current && slideRef.current.children.length > 0) {
      slideRef.current.appendChild(slideRef.current.children[0]);
    }
  }, []);

  const prev = useCallback(() => {
    if (slideRef.current && slideRef.current.children.length > 0) {
      slideRef.current.prepend(slideRef.current.children[slideRef.current.children.length - 1]);
    }
  }, []);

  return (
    <section className="gridContainerV3 relative w-full overflow-hidden pt-14 lg:py-20  ">
      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 1312px;
          height: 750px;
          background: #f5f5f5;
          box-shadow: 0 30px 50px #dbdbdb;
          border-radius: 24px;
          overflow: hidden;
          margin: 0 auto;
        }

        .carousel-container .slide {
          width: 100%;
          height: 100%;
        }

        .carousel-container .slide .item {
          width: 300px;
          height: 400px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 24px;
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.4);
          background-position: 50% 50%;
          background-size: cover;
          display: inline-block;
          transition: all 0.5s;
        }

        .slide .item:nth-child(1),
        .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          box-shadow: none;
          transition: all 0.5s;
        }

        .slide .item:nth-child(3) {
          left: 50%;
        }
        .slide .item:nth-child(4) {
          left: calc(50% + 330px);
        }
        .slide .item:nth-child(5) {
          left: calc(50% + 660px);
        }
        .slide .item:nth-child(n + 6) {
          left: calc(50% + 990px);
          opacity: 0;
        }

        .item .content {
          position: absolute;
          top: 50%;
          left: 120px;
          width: 400px;
          text-align: left;
          color: #eee;
          transform: translate(0, -50%);
          font-family: system-ui;
          display: none;
          z-index: 10;
        }

        .slide .item:nth-child(2) .content {
          display: block;
        }

        .content .name {
          font-size: 3rem;
          text-transform: uppercase;
          font-weight: 800;
          opacity: 0;
          animation: animate 1s ease-in-out 1 forwards;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .content .des {
          margin-top: 20px;
          margin-bottom: 30px;
          opacity: 0;
          animation: animate 1s ease-in-out 0.3s 1 forwards;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .nav-button-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          bottom: 24px;
          z-index: 60;
        }

        .nav-button-container button {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin: 0 5px;
          border: 1px solid rgba(255,255,255,0.8);
          transition: 0.3s;
          background: rgba(255, 255, 255, 0.8);
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .nav-button-container button:hover {
          color: #000000;
          border: 2px solid #ffffffbd;
          transform: scale(1.1);
          background: #ffffff;
        }

        .nav-button-container button:active {
          transform: scale(1.02);
        }
      `}</style>

      {/* Section Header */}
      <div className="col-start-main col-end-main relative z-10 pl-6 md:pl-16 lg:pl-24 xl:pl-32 ">
        <RevealOnScroll>
          <div className="mb-10 lg:mb-14">
            <p className="mb-3 text-xs font-normal uppercase tracking-widest text-sandstone-500">
              The Problem
            </p>

            <div className="mb-3 h-[1px] w-[96px] rounded-full bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)]" />

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-sandstone-500 md:text-5xl lg:text-[3.5rem]">
              Housing is broken.
              <br />
              Communities are fragmented.
            </h2>
          </div>
        </RevealOnScroll>
      </div>

      {/* Carousel */}
      <div className="col-[1/-1] w-full px-4 md:px-8 relative z-10">
        <RevealOnScroll delay="delay-100">
          <div className="carousel-container" aria-live="polite">
            <div className="slide" ref={slideRef}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="item"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30 rounded-[inherit]" />

                  <div className="content">
                    <div className="name">{card.title}</div>
                    <div className="des">{card.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="nav-button-container">
              <button
                type="button"
                aria-label="go to previous slide"
                onClick={prev}
                className="prev"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                aria-label="go to next slide"
                onClick={next}
                className="next"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};