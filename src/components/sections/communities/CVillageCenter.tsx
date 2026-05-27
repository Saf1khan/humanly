"use client";

import { useRef, useEffect } from "react";
import { RevealOnScroll } from "../../ui/RevealOnScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const carouselItems = [
  { name: "Primary Care Clinic", size: "8,000 SF", image: "/images/pexels-shkrabaanthony-5214992.jpg" },
  { name: "Behavioral Health", size: "4,000 SF", image: "/images/pexels-silverkblack-23496452.jpg" },
  { name: "Dental Care", size: "3,000 SF", image: "/images/pexels-cedric-fauntleroy-4269934.jpg" },
  { name: "Pharmacy", size: "3,500 SF", image: "/images/pexels-yuugen-rai-924575946-25242198.jpg" },
  { name: "Fitness Center", size: "6,000 SF", image: "/images/pexels-hiroom-17227606.jpg" },
  { name: "Childcare Center", size: "8,000 SF", image: "/images/pexels-kseniachernaya-8535629.jpg" },
  { name: "After-School Programs", size: "4,000 SF", image: "/images/pexels-anastasia-shuraeva-8466021.jpg" },
  { name: "Co-Working Space", size: "5,000 SF", image: "/images/pexels-enginakyurt-19996231.jpg" },
  { name: "Community Kitchen", size: "3,500 SF", image: "/images/pexels-rdne-6647050.jpg" },
  { name: "Fresh Market / Grocery", size: "12,000 SF", image: "/images/pexels-matthew-baxter-1366354232-33975355.jpg" },
  { name: "Restaurant / Café", size: "4,000 SF", image: "/images/pexels-tkirkgoz-19535595.jpg" },
  { name: "Event Space", size: "6,000 SF", image: "/images/pexels-cflaten-5767823.jpg" },
  { name: "Maker Space", size: "4,000 SF", image: "/images/pexels-cottonbro-7484164.jpg" },
  { name: "Business Incubator", size: "5,000 SF", image: "/images/pexels-tima-miroshnichenko-6914062.jpg" },
  { name: "Outdoor Amphitheater", size: "10,000 SF", image: "/images/pexels-maxchen2k-18090276.jpg" },
];

const STACK_CARDS = carouselItems.slice(0, 15);

/* ─── Component ─────────────────────────────────────────────────────────── */

export const CVillageCenter = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    const titles = titleRefs.current.filter(Boolean) as HTMLHeadingElement[];

    if (!wrapper || rows.length < 2 || cards.length < 2) return;

    const triggers: ScrollTrigger[] = [];

    rows.forEach((row, i) => {
      const card = cards[i];
      const image = images[i];
      const title = titles[i];

      if (!card) return;

      gsap.set(card, {
        transformOrigin: "top center",
        force3D: true,
        willChange: "transform",
      });

      if (image) {
        gsap.set(image, {
          force3D: true,
          willChange: "transform",
        });
      }

      if (title) {
        gsap.set(title, {
          force3D: true,
          willChange: "transform",
        });
      }

      const setCardScale = gsap.quickSetter(card, "scale");
      const setCardY = gsap.quickSetter(card, "yPercent");
      const setCardRotateX = gsap.quickSetter(card, "rotationX");

      const setImageScale = image ? gsap.quickSetter(image, "scale") : null;
      const setImageY = image ? gsap.quickSetter(image, "y") : null;
      const setTitleY = title ? gsap.quickSetter(title, "y") : null;

      const st = ScrollTrigger.create({
        trigger: row,
        start: `top ${120 + 8 * i}px`,
        endTrigger: wrapper,
        end: "bottom bottom",
        pin: row,
        pinSpacing: false,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const p = self.progress;

          setCardScale(1 - p * 0.011);
          setCardY(p * 0.55);
          setCardRotateX(p * -2.2);

          if (setImageScale) setImageScale(1 + p * 0.055);
          if (setImageY) setImageY(p * -5.2);
          if (setTitleY) setTitleY(p * -2.8);
        },
      });

      triggers.push(st);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative w-full bg-[#faf8f1] overflow-x-clip">
      {/* ── Background gradients ────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255,182,55,0.08), rgba(255,182,55,0.04) 50%, rgba(255,182,55,0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-[-35%] w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255,182,55,0.08), rgba(255,182,55,0.04) 50%, rgba(255,182,55,0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255,182,55,0.08), rgba(255,182,55,0.04) 50%, rgba(255,182,55,0))" }}
      />

      {/* ── Heading block ───────────────────────────────────────────────── */}
      <div className="pt-14 lg:pt-24 pb-10 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-2 md:gap-3">
              <RevealOnScroll>
                <h2 className="text-[2rem] tracking-tight md:text-[2.5rem] lg:text-[3.5rem] text-left leading-tight text-sandstone-500 font-bold">
                  Village Center
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay="delay-100">
                <p className="text-sandstone-500/80 text-base md:text-lg tracking-wide font-normal">
                  15 Integrated facilities · 90,000+ SF of community space
                </p>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay="delay-100">
              <div className="h-[1px] w-full bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full" />
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* ── Stacking cards sequential containers ────────────────────────── */}
      <div ref={wrapperRef} className="relative w-full flex flex-col bg-transparent pb-[60vh]">
        {/* Card counter */}

        {STACK_CARDS.map((item, i) => (
          <div
            key={item.name}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className="relative w-full h-[520px] flex items-center justify-center"
          >
            {i === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80">
                <span className="text-sandstone-500/60 text-[10px] uppercase tracking-[0.25em] font-medium">
                  Scroll to explore
                </span>
                <span className="block w-px h-8 bg-gradient-to-b from-sandstone-500/40 to-transparent animate-pulse" />
              </div>
            )}

            <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 h-[520px]">
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="w-full h-full overflow-hidden relative"
                style={{
                  zIndex: i + 1,
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">
                      {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(STACK_CARDS.length).padStart(2, "0")}
                    </p>
                    <h3
                      ref={(el) => {
                        titleRefs.current[i] = el;
                      }}
                      className="text-white text-2xl md:text-3xl font-bold leading-snug drop-shadow-lg"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white/90 text-sm font-semibold tracking-wide">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom breathing room */}
      <div className="pb-14 lg:pb-24" />
    </section>
  );
};