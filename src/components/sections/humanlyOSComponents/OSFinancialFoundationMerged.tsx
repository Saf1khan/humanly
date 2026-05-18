import React from 'react';

const OSFinancialFoundationMerged = () => {
  return (
    <section className="bg-[#4C5C68] py-[clamp(4rem,10vw,8rem)] relative overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/AdobeStock_386176147.jpeg"
          alt="Financial Foundation Background"
          className="w-full h-full object-cover object-center block "
        />
        <div className="absolute inset-0 bg-[#4C5C68]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#4C5C68] via-transparent to-[#4C5C68]"></div>
      </div>

      {/* Ambient background glow */}
      <div
        className="absolute z-0 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(45,125,210,0.2) 0%, transparent 70%)',
        }}
      />
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#aeb6be] mb-5">
              p15 / FINANCIAL FOUNDATION
            </p>
            <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-8" />
            
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] my-4 text-white text-balance drop-shadow-sm">
              Your home becomes a foundation for financial literacy, wealth creation, and equity stewardship.
            </h2>
            <p className="text-[1.05rem] text-[#94a3b8] font-light leading-[1.75] text-pretty mt-6">
              The resident outcome is the investor return. Every payment builds equity. Every year builds wealth. Every neighbor strengthens the community. We don't just build homes. We create the conditions for families to build wealth and change their financial trajectory.
            </p>
          </div>
          
          {/* Right Column - Glassmorphic Card */}
          <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
            
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 rounded-[24px] pointer-events-none border border-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />

            <ul className="list-none flex flex-col gap-0 m-0 p-0 border-t border-white/10 relative z-10">
              {[
                "Access to embedded financial services and support",
                "Integrated mortgage and insurance products",
                "Financial literacy programs",
                "Structured wealth programs yielding real outcomes",
                "Financial stewardship and accountability",
                "Favorable HELOC and debt restructuring support"
              ].map((item, idx) => (
                <li key={idx} className="relative py-4 border-b border-white/10 text-[0.95rem] font-light text-[#e2e8f0] pl-6 transition-colors hover:text-white">
                  <div className="absolute left-0 top-[1.4rem] w-1.5 h-1.5 rounded-full bg-[#2d7dd2] shadow-[0_0_8px_rgba(45,125,210,0.6)]"></div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-5 border-l-2 border-[#d96a2b] bg-white/[0.03] rounded-r-xl font-serif italic text-[#e2e8f0] text-[1.05rem] leading-[1.55] relative z-10">
              “The resident journey is not charity. It is the flywheel. The human story. The trajectory change. The before and after. The result is compounding wealth, health, education, and connection.”
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OSFinancialFoundationMerged;
