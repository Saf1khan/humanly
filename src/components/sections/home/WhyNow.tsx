"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhyNow = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const sliderRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  const cards = [
    {
      badge: "Legislative",
      title: "Legislative Tailwinds",
      desc: "Zoning reform, YIMBY legislation, and federal workforce housing incentives are opening land markets at unprecedented scale.",
    },
    {
      badge: "Technology",
      title: "AI-Native Moment",
      desc: "For the first time, AI can manage community operations, predict maintenance, and personalize resident services at scale.",
    },
    {
      badge: "Capital",
      title: "ESG Capital Demand",
      desc: "Institutional investors are allocating billions to workforce housing and impact real estate. Humanly is purpose-built to capture this capital.",
    },
  ];

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(slider.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const itemCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(sliderCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentSlide) {
      setCurrentSlide(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const slide = slider.children[index] as HTMLElement;

    slider.scrollTo({
      left: slide.offsetLeft - 16,
      behavior: "smooth",
    });
  };

  const CardInner = ({ card }: { card: (typeof cards)[0] }) => (
    <>
      <div>
        <div className="text-[10px] text-sandstone-500 font-albert font-medium tracking-wider uppercase mb-3 block">
          {card.badge}
        </div>
        <h2 className="text-3xl text-sandstone-500 leading-tight font-light font-cormorant m-0">
          {card.title}
        </h2>
        <p className="text-sm font-albert font-light leading-relaxed text-sandstone-500 mt-3">
          {card.desc}
        </p>
      </div>

      <div className="flex justify-end mt-6">
        <a
          href="#"
          className="group bg-stone-700 text-[#f7f1e8] w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 md:hover:bg-[#1c1b1a] md:hover:scale-105"
          aria-label={`Learn more about ${card.title}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5"
          >
            <path
              d="M7 17L17 7"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 7H17V15"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  );

  const CardContent = ({
    card,
    index,
  }: {
    card: (typeof cards)[0];
    index: number;
  }) => {
    const className =
      "bg-white border border-[#1c1b1a]/10 text-[#1c1b1a] p-6 rounded-3xl flex flex-col justify-between h-full transition-colors duration-200 shadow-sm";

    if (isMobile) {
      return (
        <article className={className}>
          <CardInner card={card} />
        </article>
      );
    }

    return (
      <motion.article
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CardInner card={card} />
      </motion.article>
    );
  };

  return (
    <section className="py-16 text-[#1c1b1a] font-sans box-border relative z-10 overflow-visible md:overflow-x-clip">
      <div
        className="absolute pointer-events-none right-0 top-1/2 -translate-x-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] z-0"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.15), rgba(var(--radial-gradient-color, 107, 206, 255), 0.08) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))",
        }}
      />

      <div className="grid max-w-[1440px] mx-auto grid-cols-[repeat(24,1fr)] px-6 md:px-12 lg:px-16 box-border w-full relative z-10">
        <div className="col-span-full md:col-[1/15] row-start-1 md:row-start-2 md:h-full">
          <article className="relative h-[540px] md:h-full rounded-3xl overflow-hidden flex flex-col">
            <div className="absolute inset-0 z-[1]">
              <img
                src="/images/pexels-pixabay-265755.jpg"
                alt="Why Humanly Why Now"
                className="w-full h-[115%] object-cover -translate-y-[8.7%] block"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/80" />
            </div>

            <div className="relative z-[2] h-full p-8 flex flex-col justify-end">
              <div className="bottom-content">
                <motion.h2
                  className="text-[#f7f1e8] text-4xl md:text-5xl font-cormorant leading-10 md:leading-[60px] tracking-tight m-0 mb-8 font-light max-w-[90%]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Why Humanly.
                  <br />
                  Why Now.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="bg-[#f7f1e8] text-sandstone-500 py-3 px-6 rounded-full no-underline inline-flex items-center gap-2 font-albert font-medium text-sm transition-colors duration-200 w-fit md:hover:bg-[#dcd7d0]"
                  >
                    Explore the Platform
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M12.5303 6.53033C12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </article>
        </div>

        <div className="col-span-full md:col-[16/-1] row-start-2 md:row-start-2 pt-4 md:pt-0">
          <div className="hidden md:flex md:flex-col gap-y-6 h-full">
            {cards.map((card, index) => (
              <div key={index} className="flex-1">
                <CardContent card={card} index={index} />
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex flex-col-reverse">
              <div className="my-4 pr-2 flex items-center justify-between">
                <p className="text-base tracking-normal text-left text-sandstone-500 font-sans leading-normal font-normal pl-2">
                  {currentSlide + 1} / {cards.length}
                </p>

                <ul className="flex justify-center gap-2">
                  {cards.map((_, index) => (
                    <li key={index}>
                      <button
                        aria-current={currentSlide === index}
                        aria-label={`Go to slide ${index + 1}`}
                        className="p-2"
                        type="button"
                        onClick={() => scrollToSlide(index)}
                      >
                        <div
                          className={`size-2 rounded-full ${currentSlide === index
                              ? "bg-sandstone-500"
                              : "bg-stone-300"
                            }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="-mr-6 overflow-y-hidden pb-2">
                <ul
                  ref={sliderRef}
                  onScroll={handleScroll}
                  className="no-scrollbar flex overflow-x-auto overflow-y-hidden gap-x-4 pr-6 snap-x snap-proximity scroll-smooth [-webkit-overflow-scrolling:touch]"
                  tabIndex={0}
                >
                  {cards.map((card, index) => (
                    <li key={index} className="w-[74vw] shrink-0 snap-start">
                      <CardContent card={card} index={index} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};