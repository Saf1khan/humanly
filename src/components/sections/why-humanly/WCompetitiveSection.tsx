"use client";
import React, { useEffect, useRef, useCallback } from "react";

const axes = [
  {
    color: "#4179F2",
    title: "Vertical Integration",
    desc: "From land to living, Humanly controls the stack instead of relying on disconnected intermediaries.",
  },
  {
    color: "#6BCEFF",
    title: "AMI / Workforce Focus",
    desc: "The business is intentionally designed around workforce households often overlooked by market-rate players.",
  },
  {
    color: "#AA3DAD",
    title: "Recurring Revenue Layers",
    desc: "Revenue is designed to extend beyond rent into services, finance, data, and licensing.",
  },
  {
    color: "#FF6136",
    title: "Data & OS Ownership",
    desc: "Humanly owns the operational layer and digital feedback loop rather than outsourcing community intelligence.",
  },
  {
    color: "#FFE366",
    title: "Community Design Depth",
    desc: "The neighborhood itself is designed as a human outcomes system, not just an asset container.",
  },
];

export const WCompetitiveSection = () => {
  const headRefs = useRef<(HTMLElement | null)[]>([]);
  const axisRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radarStarted = useRef(false);

  // Defined before useEffect to avoid stale-closure issue
  const startRadar = useCallback(async () => {
    const { Chart, registerables } = await import("chart.js");
    Chart.register(...registerables);
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Vertical Integration",
          "AMI / Workforce Focus",
          "Recurring Revenue Layers",
          "Data & OS Ownership",
          "Community Design Depth",
        ],
        datasets: [
          {
            label: "Humanly®",
            data: [10, 10, 10, 10, 10],
            fill: true,
            backgroundColor: "rgba(0,153,255,.2)",
            borderColor: "#0099ff",
            borderWidth: 2.5,
            pointBackgroundColor: "#0099ff",
            pointBorderColor: "#0099ff",
            pointRadius: 2.5,
            pointHoverRadius: 4,
          },
          {
            label: "Traditional Developer",
            data: [4, 3, 2, 1, 3],
            fill: false,
            borderColor: "rgba(17,17,17,.4)",
            borderDash: [7, 7],
            borderWidth: 1.6,
            pointRadius: 0,
          },
          {
            label: "PropTech",
            data: [3, 1, 4, 5, 1],
            fill: false,
            borderColor: "rgba(17,17,17,.25)",
            borderDash: [7, 7],
            borderWidth: 1.4,
            pointRadius: 0,
          },
          {
            label: "REIT",
            data: [5, 4, 3, 2, 2],
            fill: false,
            borderColor: "rgba(17,17,17,.15)",
            borderDash: [7, 7],
            borderWidth: 1.2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: { duration: 1600, easing: "easeOutQuart" },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(255,255,255,.95)",
            borderColor: "rgba(17,17,17,.08)",
            borderWidth: 1,
            titleColor: "#111",
            bodyColor: "rgba(17,17,17,.75)",
            padding: 12,
          },
        },
        scales: {
          r: {
            min: 0,
            max: 10,
            beginAtZero: true,
            angleLines: { color: "rgba(17,17,17,.08)" },
            grid: { color: "rgba(17,17,17,.07)" },
            pointLabels: {
              color: "rgba(17,17,17,.72)",
              font: { size: 11, weight: 600, family: "Plus Jakarta Sans" },
            },
            ticks: { display: false, stepSize: 2 },
          },
        },
      },
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wh-on");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    headRefs.current.forEach((el) => el && obs.observe(el));
    if (axisRef.current) obs.observe(axisRef.current);
    if (chartRef.current) obs.observe(chartRef.current);

    // Radar chart — fires once when the canvas enters the viewport
    const radarObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !radarStarted.current) {
            radarStarted.current = true;
            startRadar();
            radarObs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (canvasRef.current) radarObs.observe(canvasRef.current);

    return () => {
      obs.disconnect();
      radarObs.disconnect();
    };
  }, [startRadar]);

  return (
    <section className="py-[140px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-12 md:px-6">
        <p
          className="wh-eyebrow wh-rv text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff7e5d]"
          ref={(el) => { headRefs.current[0] = el; }}
        >
          Competitive Landscape
        </p>
        <div
          className="wh-gline wh-rv h-[2px] w-16 bg-gradient-to-r from-[#ff7e5d] to-[#0099ff] rounded-[1px] my-4 mb-3"
          ref={(el) => { headRefs.current[1] = el as HTMLElement | null; }}
        />
        <h2
          className="wh-rv text-[clamp(26px,2.8vw,40px)] font-extrabold tracking-[-1.2px] max-w-[760px] text-[#111111]"
          ref={(el) => { headRefs.current[2] = el; }}
        >
          Humanly occupies a category no traditional housing player fully covers.
        </h2>

        <div className="wh-matrix-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          {/* Left — axis list */}
          <div>
            <div className="wh-axis-list wh-rvl grid gap-[9px]" ref={axisRef}>
              {axes.map((a, i) => (
                <div key={i} className="wh-axis-item flex gap-3 items-start p-[10px_16px] rounded-xl bg-white border border-[#e0e4e5]">
                  <div
                    className="wh-axis-dot w-[10px] h-[10px] rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: a.color }}
                  />
                  <div>
                    <h5 className="text-sm font-bold mb-1 text-[#111111]">{a.title}</h5>
                    <p className="text-xs leading-normal text-[#827e7a]">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="wh-tagline wh-rvl mt-5 text-sm font-bold text-[#0099ff]"
              style={{ transitionDelay: "0.1s" }}
            >
              Control the full vertical. Compound the intelligence. No one else
              does both.
            </p>
          </div>

          {/* Right — radar chart */}
          <div className="wh-chart-shell wh-rvs p-6 rounded-[20px] bg-white border border-[#e0e4e5] shadow-[0_4px_20px_rgba(0,0,0,0.03)]" ref={chartRef}>
            <canvas
              ref={canvasRef}
              id="whRadarChart"
              width={560}
              height={560}
              aria-label="Competitive radar chart"
              role="img"
            />
            <div className="wh-chart-legend flex flex-wrap gap-4 mt-4">
              <div className="wh-leg flex items-center gap-2 text-xs text-[#827e7a]">
                <span className="wh-sw w-[10px] h-[10px] rounded-full inline-block" style={{ background: "#0099ff" }} />
                Humanly®
              </div>
              <div className="wh-leg flex items-center gap-2 text-xs text-[#827e7a]">
                <span
                  className="wh-sw w-[10px] h-[10px] rounded-full inline-block"
                  style={{ background: "rgba(17,17,17,.4)" }}
                />
                Traditional Developer
              </div>
              <div className="wh-leg flex items-center gap-2 text-xs text-[#827e7a]">
                <span
                  className="wh-sw w-[10px] h-[10px] rounded-full inline-block"
                  style={{ background: "rgba(17,17,17,.25)" }}
                />
                PropTech
              </div>
              <div className="wh-leg flex items-center gap-2 text-xs text-[#827e7a]">
                <span
                  className="wh-sw w-[10px] h-[10px] rounded-full inline-block"
                  style={{ background: "rgba(17,17,17,.15)" }}
                />
                REIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
