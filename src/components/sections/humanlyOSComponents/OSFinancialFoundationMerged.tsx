import React from 'react';

const OSFinancialFoundationMerged = () => {
  return (
    <section className="bg-[#ffffff] py-[clamp(3rem,7vw,5rem)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="h-[3px] rounded-[2px] w-[120px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-5"></div>
            <h2 className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.18] my-4 text-[#1a1a1a] text-balance">
              Your home becomes a foundation for financial literacy, wealth creation, and equity stewardship.
            </h2>
            <p className="text-[1.05rem] text-[#5a5a5a] leading-[1.75] text-pretty">
              The resident outcome is the investor return. Every payment builds equity. Every year builds wealth. Every neighbor strengthens the community. We don't just build homes. We create the conditions for families to build wealth and change their financial trajectory.
            </p>
          </div>
          <div className="bg-[#f2f0eb] rounded-[24px] p-[1.5rem_1.5rem_1.75rem] shadow-[0_1px_4px_rgba(0,0,0,0.07)]">
            <ul className="list-none flex flex-col gap-0 m-0 p-0 border-t border-[rgba(0,0,0,0.1)]">
              {[
                "Access to embedded financial services and support",
                "Integrated mortgage and insurance products",
                "Financial literacy programs",
                "Structured wealth programs yielding real outcomes",
                "Financial stewardship and accountability",
                "Favorable HELOC and debt restructuring support"
              ].map((item, idx) => (
                <li key={idx} className="relative py-4 border-b border-[rgba(0,0,0,0.1)] text-[1rem] text-[#1a1a1a] pl-5">
                  <div className="absolute left-0 top-[1.55rem] w-2 h-2 rounded-full bg-[#2d7dd2]"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-[1.2rem_1.25rem] border-l-4 border-[#d96a2b] bg-[#d96a2b0f] rounded-[0_12px_12px_0] font-serif italic text-[#5c3b32] text-[1.05rem] leading-[1.55]">
              “The resident journey is not charity. It is the flywheel. The human story. The trajectory change. The before and after. The result is compounding wealth, health, education, and connection.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSFinancialFoundationMerged;
