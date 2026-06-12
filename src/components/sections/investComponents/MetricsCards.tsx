"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: "series-a",
    title: "Series A Target",
    description:
      "Humanly® is raising $200M in Series A capital to fund the Texas Flagship community development, site acquisition, and workforce housing platform build-out.",
    value: "$200M",
    label: "Series A raise for Workforce Housing Platform",
  },
  {
    id: "communities",
    title: "Communities Planned",
    description:
      "Our Texas Flagship community plus 3 priority pipeline sites are planned for groundbreak by 2028, establishing Humanly® across key Sun Belt and Midwest markets.",
    value: "4",
    label: "Texas Flagship + 3 priority pipeline sites by 2028",
  },
  {
    id: "scale",
    title: "Communities by 2032",
    description:
      "One Humanly® community in every state by 2032 — delivering missing-middle workforce housing and HumanlyOS® platform coverage at national scale.",
    value: "50",
    label: "One Humanly® community in every state",
  },
];

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const MetricsCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeItem = items[activeIndex];

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const lastIndex = items.length - 1;
    let nextIndex = activeIndex;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        nextIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const goToPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  return (
    <section className="relative overflow-x-clip bg-transparent py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl font-display font-cormorant font-normal leading-[1.08] tracking-tight text-sandstone-500 sm:text-4xl lg:hidden">
            Investment at a Glance
          </h2>
        </motion.div>

        {/* Mobile: below 640 */}
        <div className="space-y-8 sm:hidden">
          <div>
            <p className="mb-5 text-[10px] font-semibold font-albert uppercase tracking-[0.24em] text-sandstone-500">
              Explore Metrics
            </p>
          </div>

          {items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="space-y-3"
            >

              <div className="relative aspect-square w-full overflow-hidden rounded-[1.35rem] bg-[rgba(255,97,54,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(74,58,57,0.28)_0,transparent_30%),radial-gradient(circle_at_90%_40%,rgba(92,73,62,0.30)_0,transparent_30%),radial-gradient(circle_at_5%_80%,rgba(70,57,56,0.26)_0,transparent_30%),radial-gradient(circle_at_90%_70%,rgba(93,71,61,0.22)_0,transparent_20%),radial-gradient(circle_at_60%_99%,rgba(98,63,62,0.20)_0,transparent_30%)]" />

                <div className="absolute inset-[13%] rounded-[1.1rem] border border-white/45 bg-white/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_40px_rgba(61,43,36,0.10)] backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.14))]" />

                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="max-w-[12rem] text-center">
                      <div className="text-5xl font-display font-normal font-albert leading-none text-sandstone-500">
                        {item.value}
                      </div>
                      <p className="mt-3 text-[10px] font-normal font-albert uppercase leading-[1.55] tracking-[0.12em] text-sandstone-500/70">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SM: one horizontal row, no wrap */}
        <div className="hidden sm:block lg:hidden">
          <div>
            <p className="mb-6 text-[10px] font-semibold font-albert uppercase tracking-[0.24em] text-sandstone-500 sm:text-xs">
              Explore Metrics
            </p>
          </div>

          <div className="flex flex-nowrap items-start justify-between gap-4 overflow-x-auto">
            {items.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="min-w-0 flex-1"
              >
                <div className="space-y-3">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-[rgba(255,97,54,0.10)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(92,74,73,0.26)_0,transparent_30%),radial-gradient(circle_at_90%_40%,rgba(109,85,74,0.28)_0,transparent_30%),radial-gradient(circle_at_5%_80%,rgba(84,69,67,0.24)_0,transparent_30%),radial-gradient(circle_at_90%_70%,rgba(111,84,72,0.18)_0,transparent_20%),radial-gradient(circle_at_60%_99%,rgba(109,71,70,0.16)_0,transparent_30%)]" />

                    <div className="absolute inset-[16%] rounded-[1.15rem] border border-white/45 bg-white/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_40px_rgba(61,43,36,0.10)] backdrop-blur-2xl">
                      <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.14))]" />
                      <div className="absolute left-[12%] top-[10%] h-14 w-14 rounded-full bg-white/20 blur-3xl" />
                      <div className="absolute bottom-[12%] right-[10%] h-16 w-16 rounded-full bg-[#FF6136]/10 blur-3xl" />

                      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5 md:p-6">
                        <div className="max-w-[10rem] text-center">
                          <div className="font-display font-normal font-albert leading-none text-sandstone-500 sm:text-[32px] md:text-[36px]">
                            {item.value}
                          </div>
                          <p className="mx-auto mt-3 max-w-[10rem] text-[9px] font-normal font-albert uppercase leading-[1.45] tracking-[0.1em] text-sandstone-500/70 sm:text-[10px] md:text-[11px]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="flex h-full flex-col pb-16">
              <h2 className="order-1 text-4xl font-display font-cormorant font-normal leading-[1.08] tracking-tight text-sandstone-500 md:text-5xl">
                Investment at a Glance
              </h2>

              <div className="order-2 mt-auto">
                <p className="mb-6 text-xs font-semibold font-albert uppercase tracking-[0.28em] text-sandstone-500">
                  Explore Metrics
                </p>

                <div
                  role="tablist"
                  aria-label="Investment metrics"
                  aria-orientation="vertical"
                  onKeyDown={onKeyDown}
                  className="flex flex-col gap-y-5"
                >
                  {items.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        transition={{
                          layout: {
                            duration: 0.45,
                            ease: easeOutExpo,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <button
                          ref={(el) => {
                            tabRefs.current[index] = el;
                          }}
                          id={`metric-tab-${item.id}`}
                          role="tab"
                          type="button"
                          aria-selected={isActive}
                          aria-controls={`metric-panel-${item.id}`}
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => setActiveIndex(index)}
                          className={`w-full text-left transition-opacity duration-300 ${isActive
                              ? "opacity-100"
                              : "opacity-50 hover:opacity-100"
                            }`}
                        >
                          <h3
                            className={`text-2xl font-display font-light font-cormorant leading-tight tracking-tight md:text-4xl ${isActive ? "text-[#FF6136]" : "text-sandstone-500"
                              }`}
                          >
                            {item.title}
                          </h3>
                        </button>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key={`${item.id}-description`}
                              layout
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: {
                                  duration: 0.42,
                                  ease: easeOutExpo,
                                },
                                opacity: {
                                  duration: 0.2,
                                  ease: "easeOut",
                                },
                              }}
                              className="overflow-hidden"
                            >
                              <motion.p
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="mt-4 max-w-[36rem] text-base font-light font-albert leading-relaxed text-sandstone-500 xl:text-lg"
                              >
                                {item.description}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <div
              id={`metric-panel-${activeItem.id}`}
              role="tabpanel"
              aria-labelledby={`metric-tab-${activeItem.id}`}
              tabIndex={0}
              className="w-full"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[1.9rem] bg-[rgba(255,97,54,0.10)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(92,74,73,0.26)_0,transparent_30%),radial-gradient(circle_at_90%_40%,rgba(109,85,74,0.28)_0,transparent_30%),radial-gradient(circle_at_5%_80%,rgba(84,69,67,0.24)_0,transparent_30%),radial-gradient(circle_at_90%_70%,rgba(111,84,72,0.18)_0,transparent_20%),radial-gradient(circle_at_60%_99%,rgba(109,71,70,0.16)_0,transparent_30%)]" />

                <div className="absolute inset-[22%] rounded-[1.4rem] border border-white/45 bg-white/34">
                  <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.14))]" />
                  <div className="absolute left-[12%] top-[10%] h-20 w-20 rounded-full bg-white/20 blur-3xl" />
                  <div className="absolute bottom-[12%] right-[10%] h-24 w-24 rounded-full bg-[#FF6136]/10 blur-3xl" />

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeItem.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28, ease: easeOutExpo }}
                      className="absolute inset-0 flex items-center justify-center p-8 xl:p-10"
                    >
                      <div className="max-w-[22rem] text-center xl:max-w-[24rem]">
                        <div className="text-5xl font-display font-medium font-albert leading-none text-sandstone-500 xl:text-[4.4rem]">
                          {activeItem.value}
                        </div>

                        <p className="mx-auto mt-5 max-w-[16rem] text-[10px] font-normal font-albert uppercase leading-relaxed tracking-[0.14em] text-sandstone-500/70 xl:text-xs">
                          {activeItem.label}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-6 flex w-full justify-end">
              <div className="relative z-10 flex items-center gap-x-6 pr-2 text-sandstone-500">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="-rotate-90"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-20 stroke-current"
                      cx="12"
                      cy="12"
                      r="10.5"
                      strokeWidth="3"
                    />
                    <circle
                      className="stroke-current transition-all duration-300"
                      cx="12"
                      cy="12"
                      r="10.5"
                      strokeWidth="3"
                      strokeDasharray="66"
                      strokeDashoffset={66 - ((activeIndex + 1) / items.length) * 66}
                    />
                  </svg>

                  <div aria-hidden="true" className="w-10 whitespace-nowrap text-sm">
                    {activeIndex + 1}/{items.length}
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <button
                    aria-label="Go to previous metric"
                    type="button"
                    onClick={goToPrev}
                    disabled={activeIndex === 0}
                    className={`flex size-10 items-center justify-center ${activeIndex === 0 ? "cursor-not-allowed opacity-30" : ""
                      }`}
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="12"
                      viewBox="0 0 21 12"
                      width="21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696698C6.01041 0.403804 5.53553 0.403804 5.24264 0.696698L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Go to next metric"
                    type="button"
                    onClick={goToNext}
                    disabled={activeIndex === items.length - 1}
                    className={`flex size-10 items-center justify-center ${activeIndex === items.length - 1
                        ? "cursor-not-allowed opacity-30"
                        : ""
                      }`}
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="12"
                      viewBox="0 0 21 12"
                      width="21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"
                        fill="currentColor"
                      />
                    </svg>
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