import React from 'react';

const OSJourney = () => {
  return (
    <section className="bg-[#f2f0eb] py-[clamp(3rem,7vw,5rem)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <div className="h-[3px] rounded-[2px] w-[84px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4"></div>
        <h2 className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.18] my-4 text-[#1a1a1a] text-balance">
          Every payment builds a better future.
        </h2>
        
        <div className="mt-8 overflow-x-auto pb-2">
          <div className="grid grid-cols-[repeat(7,minmax(140px,1fr))] gap-4 min-w-[980px] relative">
            <div className="absolute top-[38px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#3daf98] z-0"></div>
            
            {[
              { num: 1, title: 'Move In', desc: 'Start with stability and a home base.', color: 'bg-[#1a4f82]' },
              { num: 2, title: 'Build Credit', desc: 'Establish stronger financial footing through payment history.', color: 'bg-[#2d7dd2]' },
              { num: 3, title: 'Financial Literacy', desc: 'Learn planning, budgeting, and decision-making tools.', color: 'bg-[#0d7d6a]' },
              { num: 4, title: 'Savings Program', desc: 'Create buffers and intentional savings habits.', color: 'bg-[#d96a2b]' },
              { num: 5, title: 'Access HELOC', desc: 'Unlock responsible tools for growth and resilience.', color: 'bg-[#5b3f9e]' },
              { num: 6, title: 'Build Wealth', desc: 'Turn recurring payments into long-term progress.', color: 'bg-[#c9a227]' },
              { num: 7, title: 'Equity Stewardship', desc: 'Protect and compound household value over time.', color: 'bg-[#3a7d44]' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className={`w-[76px] h-[76px] rounded-full grid place-items-center mx-auto mb-4 text-white font-serif text-[1.35rem] shadow-[0_4px_16px_rgba(0,0,0,0.10)] ${step.color}`}>
                  {step.num}
                </div>
                <h4 className="font-serif text-[1rem] mb-1">{step.title}</h4>
                <p className="text-[0.82rem] text-[#5a5a5a]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSJourney;
