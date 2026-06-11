import React from 'react';

const OSFinancialFoundationMerged = () => {
  return (
    <section 
      className="py-[clamp(4rem,10vw,8rem)] relative overflow-hidden"
    >
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <img
          src="/images/AdobeStock_386176147.jpeg"
          alt="Financial Foundation Background"
          className="w-full h-full object-cover object-center block "
        /> */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(75, 95, 104, 0.7)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(75,95,104)] via-transparent to-[rgb(75,95,104)]"></div>
      </div>
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <div>
            
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] my-4 text-white text-balance drop-shadow-sm" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Your home becomes a foundation for financial literacy, wealth creation, and equity stewardship.
            </h2>
            <p className="text-[1.05rem] text-[#94a3b8] font-light leading-[1.75] text-pretty mt-6">
              The resident outcome is the investor return. Every payment builds equity. Every year builds wealth. Every neighbor strengthens the community. We don't just build homes. We create the conditions for families to build wealth and change their financial trajectory.
            </p>
          </div>
          
          {/* Right Column - Glassmorphic Card */}
          <div className="relative overflow-hidden rounded-[24px] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-white/[0.08]" style={{ background: 'rgb(29, 44, 56)' }}>
            
            {/* Glass glow overlays */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 40%, rgba(215, 226, 232, 0.18) 0px, transparent 50%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 90%, rgba(215, 226, 232, 0.1) 0px, transparent 50%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 5% 5%, rgba(215, 226, 232, 0.1) 0px, transparent 30%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 65% 65%, rgba(216, 202, 155, 0.09) 0px, transparent 30%)" }} />

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
            
            <div className="mt-8 p-5 border-l-2 border-[#d96a2b] bg-white/[0.03] rounded-r-xl font-serif italic text-[#e2e8f0] text-[1.05rem] leading-[1.55] relative z-10" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              “The resident journey is not charity. It is the flywheel. The human story. The trajectory change. The before and after. The result is compounding wealth, health, education, and connection.”
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OSFinancialFoundationMerged;
