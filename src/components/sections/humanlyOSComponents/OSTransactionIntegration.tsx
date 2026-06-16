"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

// Icon Helper for the top four cards
const CardIcon = ({ type, color = "currentColor" }: { type: string, color?: string }) => {
  const props = {
    className: "w-5 h-5 shrink-0 transition-colors duration-300",
    style: { color },
    stroke: color,
    fill: "none",
    strokeWidth: "1.75",
    viewBox: "0 0 24 24"
  };

  switch (type) {
    case 'lock':
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'car':
      return (
        <svg {...props}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'directory':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'home':
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'document':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case 'trending':
      return (
        <svg {...props}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case 'percent':
      return (
        <svg {...props}>
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    case 'credit':
      return (
        <svg {...props}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case 'zap':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'activity':
      return (
        <svg {...props}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'map':
      return (
        <svg {...props}>
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    default:
      return null;
  }
};

const topCardsData = [
  {
    title: 'Community',
    subtitle: 'Consolidated Living',
    image: '/images/pexels-anastasia-shuraeva-8466021.jpg',
    color: '#2d7dd2',
    items: [
      { text: 'Smart lock & access control', icon: 'lock' },
      { text: 'Premium lounge & event booking', icon: 'calendar' },
      { text: 'Shared community electric vehicles', icon: 'car' },
      { text: 'Localized services directory', icon: 'directory' }
    ],
    cta: 'Explore Community',
    link: '#community'
  },
  {
    title: 'Home Buying',
    subtitle: 'Ownership Redefined',
    image: '/images/pexels-lukasz-pajzert-643361052-18501298.jpg',
    color: '#4a8fd4',
    items: [
      { text: 'Fractional & full ownership portals', icon: 'home' },
      { text: 'Direct digital closing & title transfer', icon: 'document' },
      { text: 'Real-time equity growth charts', icon: 'trending' },
      { text: 'Automated tax optimization alerts', icon: 'shield' }
    ],
    cta: 'View Ownership',
    link: '#buying'
  },
  {
    title: 'Home Financing',
    subtitle: 'Modern Mortgages',
    image: '/images/pexels-tima-miroshnichenko-4841700.jpg',
    color: '#6aa3d8',
    items: [
      { text: 'AI-assisted instant underwriting', icon: 'cpu' },
      { text: 'Guaranteed low-rate lock-in periods', icon: 'percent' },
      { text: 'One-click refinancing triggers', icon: 'refresh' },
      { text: 'Comprehensive payment dashboard', icon: 'credit' }
    ],
    cta: 'Compare Rates',
    link: '#financing'
  },
  {
    title: 'Home Insurance',
    subtitle: 'Proactive Protection',
    image: '/images/pexels-vlada-karpovich-7433837.jpg',
    color: '#d96a2b',
    items: [
      { text: 'Instant claim filing & approval', icon: 'zap' },
      { text: 'IoT leak & hazard sensor discounts', icon: 'activity' },
      { text: 'Fully integrated liability coverage', icon: 'heart' },
      { text: 'Localized climate hazard mapping', icon: 'map' }
    ],
    cta: 'Get Coverage',
    link: '#insurance'
  }
];

const subscriptionServices = [
  {
    title: 'Healthcare',
    subtitle: 'Proactive Care',
    src: "/images/HealthcareSvg.svg",
    desc: 'Preventative / Proactive, On-call Consultants, Emotional Intelligence Programs',
    accent: '#2d7dd2',
    details: ["Preventative/Proactive Care", "On-call Consultants", "Integrated Provider Access", "Emotional Intelligence Programs"]
  },
  {
    title: 'Wellness',
    subtitle: 'Holistic Energy',
    src: "/images/wellnessSvg.svg",
    desc: 'AI-Enabled Fitness, Pro Sports Ambassador Events, Fitness Studios & Programs, Pool & Spa',
    accent: '#4a8fd4',
    details: ["AI-Enabled Fitness", "Pro Sports Ambassador Events", "Fitness Studios & Programs", "Pool & Spa"]
  },
  {
    title: 'Food',
    subtitle: 'Organic & Fresh',
    src: "/images/FoodSvg.svg",
    desc: 'Restaurant, Food Market, Commercial Garden, On-Demand Delivery',
    accent: '#6aa3d8',
    details: ["Restaurant Access", "Organic Food Market", "Commercial Garden Share", "On-Demand Delivery"]
  },
  {
    title: 'Education',
    subtitle: 'Continuous Growth',
    src: "/images/EducationSvg.svg",
    desc: 'AI-Based Learning Lab, AI Tutoring, Weekly Workshops, Continuous Learning Programs',
    accent: '#2d7dd2',
    details: ["AI-Based Learning Lab", "AI Tutoring", "Weekly Workshops", "Continuous Learning Programs"]
  },
  {
    title: 'General',
    subtitle: 'Cozy Living',
    src: "/images/GeneralSvg.svg",
    desc: 'Home Maintenance, Landscaping, Housekeeping, Dog Park / Pet Services',
    accent: '#4a8fd4',
    details: ["Home Maintenance", "Landscaping & Lawn", "Housekeeping Services", "Dog Park & Pet Care"]
  },
  {
    title: 'Entertainment',
    subtitle: 'Joyful Moments',
    src: "/images/EntertainmentSvg.svg",
    desc: 'Movie Theater, Music Events, Daily Events & Activities',
    accent: '#d96a2b',
    details: ["Movie Theater Access", "Music & Live Events", "Daily Activities", "Exclusive Podcast Hub"]
  },
  {
    title: 'Transportation',
    subtitle: 'Seamless Transit',
    src: "/images/TransportationSvg.svg",
    desc: 'Autonomous Car Service, Ride Sharing, Trail Systems',
    accent: '#6aa3d8',
    details: ["Autonomous Car Fleet", "Integrated Ride Sharing", "Optimized Parking", "Community Trail Systems"]
  },
  {
    title: 'Work & Business',
    subtitle: 'Modern Workspace',
    src: "/images/workSvg.svg",
    desc: 'Shared & Private Office Space, Conference Rooms, Daycare Services',
    accent: '#d96a2b',
    details: ["Shared & Private Offices", "Conference Room Booking", "Professional Resource Hub", "On-site Daycare Services"]
  },
];

const OSTransactionIntegration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-80px' });

  // Auto-advance the active step (top cards)
  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => {
      setActiveStep(p => (p + 1) % topCardsData.length);
    }, 4500);
    return () => clearInterval(t);
  }, [isInView]);

  // Cycle the subscription services (single circle SVGs)
  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => {
      setActiveServiceIdx(prev => (prev + 1) % subscriptionServices.length);
    }, 2800);
    return () => clearInterval(t);
  }, [isInView]);

  const currentService = subscriptionServices[activeServiceIdx];

  return (
    <section
      ref={sectionRef}
      className="pt-[clamp(5rem,10vw,8rem)] pb-[clamp(5rem,10vw,8rem)] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] text-white text-center lg:text-left min-[360px]:max-[767px]:text-[36px] min-[360px]:max-[767px]:leading-[48px] min-[360px]:max-[767px]:tracking-normal max-[359px]:text-[28px] md:text-[48px] md:leading-[60px] md:text-center lg:text-left" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Transaction Integration
            </h2>
            <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light max-w-md text-center lg:text-left mx-auto lg:mx-0">
              Every resident payment flows through a single intelligent layer — from home acquisition to daily subscriptions — consolidating revenue across the community ecosystem.
            </p>
          </div>
        </motion.div>

        {/* ─── Top Four Cards Redesign ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {topCardsData.map((card, idx) => {
            const isActive = idx === activeStep;
            return (
              <motion.article
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative h-[480px] md:h-[540px] px-4 md:px-6 py-6 flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ${
                  isActive ? 'ring-2 ring-white/30 shadow-2xl' : 'opacity-85 hover:opacity-100 border border-white/5'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Content Card */}
                <div className="relative z-10 w-full h-[310px] md:h-[320px] p-5 flex flex-col bg-gradient-to-t from-stone-700/40 to-stone-700/10 backdrop-blur-md rounded-xl border border-white/15 transition-all duration-300 group-hover:border-white/25">
                  <header className="flex flex-col gap-1 pb-3 border-b border-white/10 mb-4">
                    <h3 className="font-serif text-xl text-white font-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-[0.72rem] text-white/50 tracking-wide font-light lg:hidden xl:block">{card.subtitle}</p>
                  </header>

                  <ul className="flex flex-col gap-2.5 mb-4">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-[0.74rem] text-white/85 leading-snug font-light">
                        <CardIcon type={item.icon} color="#ffffff" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ─── Curved Converging SVG Connector Line ─── */}
        <div className="relative w-full h-20 my-6 overflow-hidden hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
            {/* Base Background Lines */}
            <path d="M 150,0 C 150,40 600,40 600,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 450,0 C 450,40 600,40 600,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 750,0 C 750,40 600,40 600,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <path d="M 1050,0 C 1050,40 600,40 600,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

            {/* Glowing Active Path */}
            <motion.path
              key={activeStep}
              d={
                activeStep === 0 ? "M 150,0 C 150,40 600,40 600,80" :
                activeStep === 1 ? "M 450,0 C 450,40 600,40 600,80" :
                activeStep === 2 ? "M 750,0 C 750,40 600,40 600,80" :
                "M 1050,0 C 1050,40 600,40 600,80"
              }
              stroke={`url(#active-grad-${activeStep})`}
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            <defs>
              {topCardsData.map((card, idx) => (
                <linearGradient key={idx} id={`active-grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={card.color} stopOpacity="1" />
                  <stop offset="100%" stopColor={card.color} stopOpacity="0.4" />
                </linearGradient>
              ))}
            </defs>
          </svg>
        </div>

        {/* ─── Subscription Services ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-8 pt-8"
        >
          {/* Section label */}
          <div className="flex items-center gap-5 mb-12">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-[0.63rem] font-semibold tracking-[0.2em] uppercase text-[#aeb6be]">
              Subscription Services Flow
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Circle & Details Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 max-w-4xl mx-auto">
            
            {/* The Single Cycling Circle */}
            <div className="relative flex items-center justify-center">
              {/* Radial glow matches active service accent */}
              <motion.div
                key={`glow-${activeServiceIdx}`}
                className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full pointer-events-none z-0"
                style={{
                  background: `radial-gradient(circle, ${currentService.accent}33 0%, transparent 70%)`,
                  filter: 'blur(30px)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              <div
                className="w-36 h-36 md:w-48 md:h-48 rounded-full border border-white/15 flex items-center justify-center relative z-10 shadow-2xl p-6 overflow-hidden bg-rgb(22, 35, 46)"
                style={{
                  background: 'rgb(22, 35, 46)',
                  boxShadow: `0 0 0 1px ${currentService.accent}30, 0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)`,
                  transition: 'box-shadow 0.6s ease'
                }}
              >
                {/* Backdrop overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 40% 30%, rgba(215,226,232,0.12) 0%, transparent 60%)' }} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeServiceIdx}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={currentService.src}
                      alt={currentService.title}
                      width={120}
                      height={120}
                      className="w-[68%] h-[68%] object-contain brightness-0 invert"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Service details panel */}
            <div className="flex-1 w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <span
                    className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase mb-2"
                    style={{ color: currentService.accent }}
                  >
                    {currentService.subtitle}
                  </span>
                  
                  <h3
                    className="text-white text-2xl font-serif font-normal mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                  >
                    {currentService.title}
                  </h3>

                  <p className="text-[0.88rem] text-white/70 leading-relaxed font-light mb-6">
                    {currentService.desc}
                  </p>

                  <ul className="flex flex-col gap-3 w-full items-center md:items-start">
                    {currentService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-[#e2e8f0] text-[0.85rem] leading-snug font-light gap-2.5">
                        <span className="text-[0.7rem] font-bold mt-1.5" style={{ color: currentService.accent }}>●</span>
                        <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1rem' }} className="text-white/85">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OSTransactionIntegration;
