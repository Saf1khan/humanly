"use client";
import React, { useState } from "react";

const slides = [
  {
    title: "Housing Shortage",
    count: "7M",
    sub: "+ units",
    description:
      "Unit housing shortage nationwide — workforce families earning 80–120% AMI are systematically excluded from quality options.",
    image: "/images/pexels-ninobur-19443316.jpg",
    color: "#6E7C8D",
  },
  {
    title: "Market Opportunity",
    count: "$1T",
    sub: "+ gap",
    description:
      "Market opportunity gap left untapped by fragmented, siloed development that fails to serve the workforce segment.",
    image: "/images/pexels-brettjordan-35011601.jpg",
    color: "#A3B2C3",
  },
  {
    title: "Cost Burden",
    count: "40",
    sub: "% burdened",
    description:
      "Workforce families cost-burdened — spending more than 30% of income on housing, leaving little for savings or stability.",
    image: "/images/pexels-khwanchai-4174740.jpg",
    color: "#6E7C8D",
  },
];

export const WStatsSection = () => {
  const [active, setActive] = useState(2); // default last item, like reference

  return (
    <section
      className="py-20 overflow-hidden"
      // style={{
      //   background:
      //     "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(110,124,141,.05) 0, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(163,178,195,.04) 0, transparent 50%), #F5F2ED",
      // }}
    >
      <div className="flex gap-5 w-full max-w-[1440px] mx-auto px-5 lg:px-10 lg:flex-row flex-col">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`flex-none w-full h-auto border-l-0 border-t border-[rgba(17,17,17,0.08)] pl-0 pt-5 transition-[flex] duration-450 ease-in-out cursor-pointer overflow-hidden lg:shrink lg:basis-0 lg:min-w-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0 ${i === active ? "lg:grow-[41] active" : "lg:grow-[20]"}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className="flex flex-col h-auto lg:flex-row lg:h-[400px] w-full">
              <div className="flex-none w-full lg:flex-[0_0_320px] flex flex-col h-full pr-5">
                <p className="text-2xl font-serif text-[#5F646B] mb-5">
                  {s.title}
                </p>
                <p
                  className="text-[clamp(64px,6vw,99px)] font-serif font-normal m-0 leading-none text-[#111111]"
                >
                  {s.count}
                  <sub className="text-base font-normal align-baseline ml-1 text-[#5F646B]">
                    {s.sub}
                  </sub>
                </p>
                <div className="w-10 h-[1px] bg-[rgba(17,17,17,0.08)] my-5" />
                <p
                  className={`text-lg text-[#5F646B] mt-auto pb-5 transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  {s.description}
                </p>
              </div>
              <div
                className={`flex-none w-full h-[300px] mt-5 lg:mt-0 lg:h-auto lg:flex-1 transition-opacity duration-300 overflow-hidden rounded-xl ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
