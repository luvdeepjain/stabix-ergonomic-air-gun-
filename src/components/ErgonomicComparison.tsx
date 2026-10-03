import React, { useState } from 'react';
import { Activity, ShieldCheck, Check, AlertTriangle, Scale, Volume2 } from 'lucide-react';

const ERGONOMIC_IMAGE_URL = "/src/assets/images/ergonomic_comparison_1791016987247.jpg";
const CUTAWAY_IMAGE_URL = "/src/assets/images/cad_cutaway_3d_section_1791018324940.jpg";

export const ErgonomicComparison: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'redesigned' | 'conventional'>('redesigned');
  const [visualMode, setVisualMode] = useState<'biomechanics' | 'cad_cutaway'>('biomechanics');
  const [sliderAngle, setSliderAngle] = useState<number>(108);

  return (
    <section id="ergonomics" className="py-16 md:py-24 bg-neutral-900/50 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Biomechanical Engineering & Human Factors
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Defense-Grade Biomechanics to Eliminate Workplace Hand Fatigue
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Conventional blow guns haven't changed in four decades. Operators hold them with bent wrists, 
            enduring high trigger tension and continuous pneumatic micro-vibrations that cause Carpal Tunnel 
            Syndrome and repetitive strain injuries. We adopted military firearm ergonomics to place the wrist 
            in its natural rest angle.
          </p>
        </div>

        {/* Comparison Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual & Interactive Angle Simulator */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400">
                  {selectedView === 'redesigned' ? 'PROPOSED DESIGN: 108° NEUTRAL POSTURE' : 'CONVENTIONAL DESIGN: 87° FORCED BEND'}
                </span>
                <div className="flex bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-xs">
                  <button
                    onClick={() => {
                      setSelectedView('redesigned');
                      setSliderAngle(108);
                    }}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      selectedView === 'redesigned' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    StabiX Design
                  </button>
                  <button
                    onClick={() => {
                      setSelectedView('conventional');
                      setSliderAngle(87);
                    }}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      selectedView === 'conventional' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Conventional
                  </button>
                </div>
              </div>

              {/* View Toggle Bar (Biomechanics vs Fig 2 3D Cutaway) */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-neutral-400 font-mono text-[11px]">VISUALIZATION SOURCE:</span>
                <div className="flex gap-1 bg-neutral-900 p-0.5 rounded border border-neutral-800 text-[11px] font-mono">
                  <button
                    onClick={() => setVisualMode('biomechanics')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      visualMode === 'biomechanics' ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Biomechanics Lab
                  </button>
                  <button
                    onClick={() => setVisualMode('cad_cutaway')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      visualMode === 'cad_cutaway' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Fig 2 Cutaway (3d.png)
                  </button>
                </div>
              </div>

              {/* Graphical illustration / Visual representation */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <img
                  src={visualMode === 'biomechanics' ? ERGONOMIC_IMAGE_URL : CUTAWAY_IMAGE_URL}
                  alt={visualMode === 'biomechanics' ? "Industrial Biomechanics Study" : "Figure 2: StabiX 3D Cutaway Assembly"}
                  className="w-full h-full object-contain sm:object-cover object-center bg-neutral-950"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Biomechanical Angle Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono">
                      <span>Handle Incline: </span>
                      <span className={`font-bold ${selectedView === 'redesigned' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {sliderAngle}°
                      </span>
                    </div>

                    <div className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                      selectedView === 'redesigned' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}>
                      {selectedView === 'redesigned' ? 'Zero Wrist Deviation' : 'Severe Ulnar Stress'}
                    </div>
                  </div>

                  {/* Dynamic Posture Callout */}
                  <div className="bg-neutral-950/90 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
                    <div className="text-xs text-neutral-400 font-mono mb-1">
                      {visualMode === 'cad_cutaway' 
                        ? 'Internal Mechanism Callout:' 
                        : (selectedView === 'redesigned' ? 'Biomechanical Status:' : 'Health Risk Factor:')}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {visualMode === 'cad_cutaway'
                        ? 'Dual-shot molded Shore 65A green elastomer handle isolates micro-vibrations from high-pressure internal air tube.'
                        : (selectedView === 'redesigned'
                          ? 'Aligns carpal tunnel with forearm axis; distributes 3.2 N reaction force through palm.'
                          : 'Forces wrist into 23° extension, compressing median nerve and multiplying tendon sheath friction.')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Handle Angle Slider */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                  <span>Handle Incline Angle Range:</span>
                  <span className="text-white font-bold">{sliderAngle}°</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="115"
                  value={sliderAngle}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSliderAngle(val);
                    if (val >= 100) setSelectedView('redesigned');
                    else setSelectedView('conventional');
                  }}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>80° (Straight Pistol)</span>
                  <span className="text-emerald-400 font-semibold">108° (Optimal StabiX)</span>
                  <span>115°</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Tested for continuous 8-hour shift compliance
              </span>
              <span className="font-mono text-neutral-500">ISO 11228-3 Ergonomics</span>
            </div>
          </div>

          {/* Core Ergonomic Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            
            {/* Card 1: Grip Angle & Posture */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-medium">01. Natural Wrist Posture</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">108° Bio-Engineered Grip Incline</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    By mirroring natural hand rest angles used in defense small arms, the grip keeps forearm muscles relaxed and eliminates the chronic radial deviation typical of legacy 90° blow guns.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">108°</span>
                  <div className="text-[11px] text-neutral-500">vs 87° conventional</div>
                </div>
              </div>
            </div>

            {/* Card 2: Reduced Trigger Tension */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-medium">02. Progressive Actuation</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">58% Lower Trigger Pull Force</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    A repositioned pivot fulcrum and progressive internal metering needle require only 7.5 N of trigger force (compared to 18 N on standard guns), allowing effortless feathering without finger cramps.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">7.5 N</span>
                  <div className="text-[11px] text-neutral-500">vs 18.0 N conventional</div>
                </div>
              </div>
            </div>

            {/* Card 3: Vibration Dampening */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-medium">03. Tactile Isolation</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Vibration-Damped Polymer Chassis</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    A dual-shot molded Shore 65A thermoplastic elastomer wrap absorbs high-frequency pneumatic pulsation, protecting delicate hand nerves while maintaining a secure grip even in oily environments.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">65A</span>
                  <div className="text-[11px] text-neutral-500">TPE elastomer</div>
                </div>
              </div>
            </div>

            {/* Card 4: Ultralight Weight */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-medium">04. Weight Reduction</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">148g Ultralight Mass Distribution</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Replaced heavy die-cast zinc with structural glass-filled polymer, concentrating weight directly over the hand center of gravity to completely eliminate front-heavy lever droop.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">148 g</span>
                  <div className="text-[11px] text-neutral-500">vs 385 g zinc gun</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
