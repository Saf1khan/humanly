import React from 'react';

const OSPlatformMatrix = () => {
  return (
    <section className="bg-[#0e1b26] py-[clamp(3rem,7vw,5rem)] text-[#f7f6f2]">
      <div className="max-w-[1240px] mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <p className="text-[0.75rem] font-bold tracking-[0.14em] uppercase text-[#3daf98] mb-4">
          Platform Logic
        </p>
        <h2 className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.18] my-4 text-balance">
          One platform. Three-sided impact.
        </h2>
        
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse min-w-[880px]">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-[#ffffff1a] text-[0.82rem] uppercase tracking-[0.08em] text-[#ffffffb3]">Feature</th>
                <th className="p-4 text-left border-b border-[#ffffff1a] text-[0.82rem] uppercase tracking-[0.08em] text-[#5ba3e0] font-bold">Resident</th>
                <th className="p-4 text-left border-b border-[#ffffff1a] text-[0.82rem] uppercase tracking-[0.08em] text-[#f09050] font-bold">Operator</th>
                <th className="p-4 text-left border-b border-[#ffffff1a] text-[0.82rem] uppercase tracking-[0.08em] text-[#3daf98] font-bold">Municipality</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Service Access', r: true, o: true, m: false },
                { feature: 'Financial Tools', r: true, o: true, m: false },
                { feature: 'AI Navigator', r: true, o: true, m: false },
                { feature: 'Property Management', r: false, o: true, m: false },
                { feature: 'Data Insights', r: false, o: true, m: true },
                { feature: 'Community Events', r: true, o: true, m: true },
                { feature: 'Maintenance Requests', r: true, o: true, m: false },
                { feature: 'Reporting & Compliance', r: false, o: true, m: true },
                { feature: 'Digital Twin Access', r: false, o: true, m: true },
                { feature: 'Licensing & Scale', r: false, o: true, m: true },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 text-left border-b border-[#ffffff1a] font-semibold text-white">{row.feature}</td>
                  <td className="p-4 text-left border-b border-[#ffffff1a]">{row.r ? <span className="text-white font-bold">✅</span> : <span className="text-[#ffffff59]">—</span>}</td>
                  <td className="p-4 text-left border-b border-[#ffffff1a]">{row.o ? <span className="text-white font-bold">✅</span> : <span className="text-[#ffffff59]">—</span>}</td>
                  <td className="p-4 text-left border-b border-[#ffffff1a]">{row.m ? <span className="text-white font-bold">✅</span> : <span className="text-[#ffffff59]">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.85rem] text-[#ffffff8c]">
          HumanlyOS® aligns resident experience, operator efficiency, and municipal visibility inside one vertically integrated system.
        </p>
      </div>
    </section>
  );
};

export default OSPlatformMatrix;
