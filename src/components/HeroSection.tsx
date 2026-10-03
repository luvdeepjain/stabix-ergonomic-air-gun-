import React, { useState } from 'react';
import { PRODUCT_HOTSPOTS } from '../data/productData';
import { Hotspot } from '../types';
import { ArrowRight, Gauge, Activity, ShieldCheck, Zap, Info, RotateCcw, Eye, Layers } from 'lucide-react';

const CUTAWAY_IMG = "/src/assets/images/cad_cutaway_3d_section_1791018324940.jpg";
const VIEWS_IMG = "/src/assets/images/cad_views_multiview_1791018310937.jpg";

interface HeroSectionProps {
  onRequestPilot: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(PRODUCT_HOTSPOTS[0]);
  const [imageMode, setImageMode] = useState<'cutaway' | 'views'>('cutaway');

  const currentDisplayImage = imageMode === 'cutaway' ? CUTAWAY_IMG : VIEWS_IMG;

  return (
    <section id="overview" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-neutral-950">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle / Trust signal */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase">TN-IMPACT 2026</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Challenge TNI26020</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Sona College of Technology & TIDCO</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">CFD Validated (ANSYS Fluent)</span>
        </div>

        {/* Primary Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Industrial Air Gun Re-engineered for <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-wavy decoration-2">Zero Fatigue</span> and <span className="text-sky-400 font-extrabold">42% Air Savings</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              Conventional pneumatic blow guns waste costly compressed air and cause cumulative wrist strain. 
              Our redesigned prototype pairs weapon-systems ergonomic biomechanics with a supersonic Venturi nozzle—entraining 
              ambient air to maximize cleaning momentum while reducing plant compressor kilowatt loads.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end gap-3 pt-2">
            <div className="flex items-center gap-3">
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                <span>Request Industrial Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#roi-calculator"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Calculate ROI
              </a>
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full compliance with OSHA 1910.242(b) & ISO 6358 standards</span>
            </div>
          </div>
        </div>

        {/* High-Impact Proof Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 px-6 rounded-xl border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-sm mb-10">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums font-mono">
              -42.0%
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">
              Compressed Air Consumption
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">210 vs 362 NL/min @ 7 bar</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-white tabular-nums font-mono">
              108°
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">
              Neutral Wrist Bio-Grip
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">Prevents RSI & Carpal Tunnel</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 tabular-nums font-mono">
              76.1 <span className="text-base font-normal text-sky-200">dBA</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">
              Acoustic Noise Floor
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">-13.3 dB quieter than stock</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums font-mono">
              148 <span className="text-base font-normal text-amber-200">g</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">
              Ultra-light Chassis Mass
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">-61.5% mass vs zinc guns</div>
          </div>
        </div>

        {/* Product Visual Container with Image Switcher & Hotspots */}
        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-3 sm:p-5 overflow-hidden">
          
          {/* Top header bar for the viewer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800/80 text-xs">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-neutral-200">Design Validation Explorer</span>
              <span className="text-neutral-500 hidden sm:inline">· Original Prototype Figures (3d.png & views.png)</span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800 text-xs font-mono">
              <button
                onClick={() => setImageMode('cutaway')}
                className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer ${
                  imageMode === 'cutaway' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Figure 2: Final Coloured View
              </button>
              <button
                onClick={() => setImageMode('views')}
                className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer ${
                  imageMode === 'views' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Figure 3: Final View
              </button>
            </div>
          </div>

          {/* Interactive Canvas Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 items-center">
            
            {/* Visual with Hotspots */}
            <div className="lg:col-span-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 group">
              <img
                src={currentDisplayImage}
                alt="StabiX VenturiFlow Redesigned Industrial Air Gun Prototype"
                className="w-full h-full object-contain object-center select-none bg-neutral-950 p-2"
                referrerPolicy="no-referrer"
              />

              {/* Grid overlay for technical blueprint effect */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

              {/* Interactive Hotspot Dots (shown when in Cutaway mode) */}
              {imageMode === 'cutaway' && (
                <>
                  {/* Nozzle tip */}
                  <button
                    onClick={() => setSelectedHotspot(PRODUCT_HOTSPOTS[0])}
                    style={{ left: '85%', top: '27%' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full cursor-pointer z-20 group/dot"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-emerald-400" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-neutral-950 bg-emerald-400" />
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover/dot:block whitespace-nowrap bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-neutral-700 shadow-lg pointer-events-none z-30">
                      Venturi Nozzle Tip
                    </span>
                  </button>

                  {/* Induction Ports */}
                  <button
                    onClick={() => setSelectedHotspot(PRODUCT_HOTSPOTS[1])}
                    style={{ left: '72%', top: '27%' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full cursor-pointer z-20 group/dot"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-sky-400" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-neutral-950 bg-sky-400" />
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover/dot:block whitespace-nowrap bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-neutral-700 shadow-lg pointer-events-none z-30">
                      Secondary Induction Ports
                    </span>
                  </button>

                  {/* Progressive Trigger */}
                  <button
                    onClick={() => setSelectedHotspot(PRODUCT_HOTSPOTS[2])}
                    style={{ left: '50%', top: '44%' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full cursor-pointer z-20 group/dot"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-amber-400" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-neutral-950 bg-amber-400" />
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover/dot:block whitespace-nowrap bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-neutral-700 shadow-lg pointer-events-none z-30">
                      Ergonomic Trigger
                    </span>
                  </button>

                  {/* Green Handle Grip */}
                  <button
                    onClick={() => setSelectedHotspot(PRODUCT_HOTSPOTS[4])}
                    style={{ left: '22%', top: '65%' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full cursor-pointer z-20 group/dot"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-emerald-400" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-neutral-950 bg-emerald-400" />
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover/dot:block whitespace-nowrap bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-neutral-700 shadow-lg pointer-events-none z-30">
                      Green Damping Grip
                    </span>
                  </button>

                  {/* 108 Grip Incline */}
                  <button
                    onClick={() => setSelectedHotspot(PRODUCT_HOTSPOTS[3])}
                    style={{ left: '32%', top: '48%' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full cursor-pointer z-20 group/dot"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-sky-400" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-neutral-950 bg-sky-400" />
                    </span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover/dot:block whitespace-nowrap bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-neutral-700 shadow-lg pointer-events-none z-30">
                      108° Biomechanical Incline
                    </span>
                  </button>
                </>
              )}

              {/* Watermark badge in bottom corner */}
              <div className="absolute bottom-3 left-3 bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
                <span className="text-emerald-400">● 7.0 BAR CFD CERTIFIED</span>
                <span className="text-neutral-600">|</span>
                <span>MODEL: SX-VF70-PRO</span>
              </div>
            </div>

            {/* Selected Hotspot Detail Card */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full bg-neutral-950/90 rounded-xl p-5 border border-neutral-800">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                  <span className="text-emerald-400 font-semibold uppercase">Feature Detail</span>
                  <span>{selectedHotspot.spec}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {selectedHotspot.title}
                </h3>
                
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  {selectedHotspot.subtitle}
                </p>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {selectedHotspot.description}
                </p>

                <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Performance Gain:</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">
                    {selectedHotspot.metric}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <div className="text-xs text-neutral-400 mb-2">Switch hotspot callouts:</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {PRODUCT_HOTSPOTS.map((spot, i) => (
                    <button
                      key={spot.id}
                      onClick={() => {
                        setSelectedHotspot(spot);
                        setImageMode('cutaway');
                      }}
                      className={`text-left px-2 py-1.5 rounded text-[11px] font-mono truncate transition-colors cursor-pointer ${
                        selectedHotspot.id === spot.id
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                          : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                      }`}
                    >
                      {`0${i + 1}. ${spot.id.replace('-', ' ')}`}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
