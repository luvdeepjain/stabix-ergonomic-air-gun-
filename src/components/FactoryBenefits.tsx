import React, { useState } from 'react';
import { ShieldCheck, Factory, Zap, Wrench, CheckCircle2 } from 'lucide-react';

const FACTORY_IMAGE_URL = "/src/assets/images/factory_floor_usage_1791016976478.jpg";

export const FactoryBenefits: React.FC = () => {
  const [activeApp, setActiveApp] = useState<number>(0);

  const applications = [
    {
      title: "CNC Machining & Milling Swarf Removal",
      env: "Automotive & Aerospace Precision Machining",
      description: "Clearing aluminum chips, steel turnings, and viscous coolant from deep blind holes. The 3.2 N focused Venturi jet flushes stubborn swarf in a single pass without scattering metal filings onto adjacent workstations.",
      metric: "40% Faster Cycle Cleaning"
    },
    {
      title: "Automotive Paint & Degreasing Blow-Off",
      env: "Assembly & Surface Treatment Lines",
      description: "Drying stampings and pre-treating car body panels. The laminar flow curtain prevents water entrapment in hem flanges without turbulent droplet atomization.",
      metric: "Zero Droplet Atomization"
    },
    {
      title: "Toolroom Maintenance & Continuous Assembly",
      env: "MRO Maintenance & Repair Depots",
      description: "Operators using blow guns for 4+ hours per day experience immediate relief from wrist fatigue. The 108° handle alignment and 148g lightweight design eliminate end-of-shift forearm stiffness.",
      metric: "-82% Reported Wrist Strain"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-900/40 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Factory Floor Deployment & MRO Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Engineered for Industrial Maintenance Teams & High-Volume Assembly
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Factory trials show that tool comfort directly correlates with operator throughput and reduced absentee rates. 
            Coupled with mandatory OSHA dead-end safety relief, StabiX VenturiFlow protects both your workforce and your energy budget.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Manufacturing Application Image with Context Callout */}
          <div className="lg:col-span-6 rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden relative flex flex-col justify-end p-6 min-h-[380px]">
            <img
              src={FACTORY_IMAGE_URL}
              alt="Technician operating air gun in CNC machining workshop"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

            {/* Inset Safety Protocol Banner */}
            <div className="relative z-10 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>OSHA 1910.242(b) DEAD-END SAFETY COMPLIANT</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                If the nozzle tip is inadvertently blocked against an operator's skin or flat surface, the 4× secondary radial induction ports instantly vent supply pressure to under 30 PSI, preventing catastrophic air embolism accidents.
              </p>
            </div>
          </div>

          {/* Right: Industrial Use-Cases */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                onClick={() => setActiveApp(index)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeApp === index
                    ? 'bg-neutral-950 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs font-mono mb-1.5">
                  <span className="text-neutral-400">{app.env}</span>
                  <span className="text-emerald-400 font-semibold">{app.metric}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{app.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>Drop-in replacement for existing 1/4" NPT & BSP air lines</span>
              <span className="text-white font-mono font-semibold">Zero Plant Retrofit Needed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
