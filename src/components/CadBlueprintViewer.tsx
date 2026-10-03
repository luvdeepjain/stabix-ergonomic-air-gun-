import React, { useState } from 'react';
import { BLUEPRINT_CALLOUTS, PROJECT_METADATA } from '../data/productData';
import { BlueprintCallout } from '../types';
import { Layers, Maximize2, FileText, Check, Eye, ZoomIn } from 'lucide-react';

const CUTAWAY_3D_IMG = "/src/assets/images/cad_cutaway_3d_section_1791018324940.jpg";
const VIEWS_IMG = "/src/assets/images/cad_views_multiview_1791018310937.jpg";

export const CadBlueprintViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cutaway' | 'views'>('cutaway');
  const [selectedCallout, setSelectedCallout] = useState<BlueprintCallout>(BLUEPRINT_CALLOUTS[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const getCurrentImage = () => {
    switch (activeTab) {
      case 'cutaway': return { 
        url: CUTAWAY_3D_IMG, 
        title: "Figure 2: Final Coloured View (3d.png)", 
        desc: "Internal fluid dynamics cutaway assembly revealing the high-pressure air canal, spring valve spindle, and Shore 65A green vibration-damping grip." 
      };
      case 'views': return { 
        url: VIEWS_IMG, 
        title: "Figure 3: Final View Orthographic Projections (views.png)", 
        desc: "SolidWorks 4-quadrant CAD viewports: Front Elevation, Left End Nozzle View, Plan/Top View, and Isometric 3D Projection." 
      };
    }
  };

  const current = getCurrentImage();

  return (
    <section id="blueprint" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
              <span>DESIGN VALIDATION & PROTOTYPE TESTING</span>
              <span>·</span>
              <span>FIGURES 2 & 3</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Design Validation: Figures 2 & 3
            </h2>
            <p className="mt-2 text-neutral-300 text-sm sm:text-base max-w-2xl">
              Authentic prototype validation figures extracted directly from the TN-IMPACT 2026 report submitted by Team StabiX.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800 self-start md:self-auto text-xs font-mono">
            <button
              onClick={() => setActiveTab('cutaway')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'cutaway'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Figure 2: Final Coloured View</span>
            </button>
            <button
              onClick={() => setActiveTab('views')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === 'views'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Figure 3: Final View</span>
            </button>
          </div>
        </div>

        {/* Display Canvas Container */}
        <div className="rounded-2xl border border-neutral-800 bg-[#060a12] p-4 sm:p-6 overflow-hidden relative shadow-2xl">
          
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-blueprint-subgrid opacity-20 pointer-events-none" />

          {/* Top Info Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-sky-900/40 text-xs font-mono text-sky-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-semibold">{current.title}</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400">PART: NOZZLE GUN (TNI26020)</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <button
                onClick={() => setLightboxOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors cursor-pointer text-xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enlarge Image</span>
              </button>
              <span className="text-neutral-600">|</span>
              <span className="text-emerald-400">SOLIDWORKS EXPORT</span>
            </div>
          </div>

          {/* Visual Canvas Area */}
          <div className="relative z-10 my-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Main Image Display */}
              <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-neutral-900 border border-sky-900/50 group cursor-pointer" onClick={() => setLightboxOpen(true)}>
                <img
                  src={current.url}
                  alt={current.title}
                  className="w-full h-[420px] sm:h-[480px] object-contain object-center bg-neutral-950 p-2 select-none group-hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle overlay badge */}
                <div className="absolute bottom-3 left-3 bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">● AUTHENTIC HACKATHON ASSET</span>
                  <span className="text-neutral-600">|</span>
                  <span>Click to expand</span>
                </div>

                <div className="absolute top-3 right-3 bg-neutral-950/70 p-2 rounded-lg text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Side Technical Details & Callout Panel */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full bg-neutral-950/90 rounded-xl p-5 border border-sky-900/40">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold">
                    Report Extract
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {activeTab === 'cutaway' ? 'Figure 2: Final Coloured View' : 'Figure 3: Final View'}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {current.desc}
                  </p>

                  {/* Feature Breakdown */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-neutral-400 uppercase">
                      {activeTab === 'cutaway' ? 'Internal Mechanical Callouts:' : 'Orthographic Viewport Layout:'}
                    </div>

                    {activeTab === 'cutaway' ? (
                      <>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-emerald-400 font-bold mb-1">01. Green Vibration-Damping Grip</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Shore 65A soft elastomer overmold absorbing continuous pneumatic vibration, contoured for palm support.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-sky-400 font-bold mb-1">02. Internal High-Pressure Air Passage</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Smoothened internal channel routing 7-bar air from 1/4" BSP base inlet to the valve chamber with minimal friction drop.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-amber-400 font-bold mb-1">03. Brass Venturi Nozzle Core</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Precision converging-diverging profile converting pressure to kinetic thrust while inducing ambient secondary air.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-emerald-400 font-bold mb-1">Top-Left: Front Elevation</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Elevation profile highlighting the 108° handle angle, low-force trigger, and nozzle induction ports.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-sky-400 font-bold mb-1">Top-Right: Left End View</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Cross-sectional alignment demonstrating symmetry and nozzle exit diameter.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs">
                          <div className="font-mono text-amber-400 font-bold mb-1">Bottom-Right: 3D Isometric View</div>
                          <p className="text-[11px] text-neutral-400 leading-normal">
                            Axonometric projection showing volume distribution and ergonomic contours.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
                  Modelled in Dassault Systèmes 3DEXPERIENCE & SolidWorks
                </div>
              </div>

            </div>
          </div>

          {/* Quick thumbnail switcher (Figure 2 & Figure 3) */}
          <div className="relative z-10 pt-4 border-t border-sky-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setActiveTab('cutaway')}
              className={`p-3 rounded-lg border text-left flex items-center gap-4 transition-colors cursor-pointer ${
                activeTab === 'cutaway' ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <img src={CUTAWAY_3D_IMG} alt="3d.png" className="w-16 h-12 object-contain rounded bg-neutral-950 p-1 border border-neutral-800" referrerPolicy="no-referrer" />
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white">Figure 2: Final Coloured View</div>
                <div className="text-[11px] text-neutral-400">Internal Cutaway Assembly (3d.png)</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('views')}
              className={`p-3 rounded-lg border text-left flex items-center gap-4 transition-colors cursor-pointer ${
                activeTab === 'views' ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <img src={VIEWS_IMG} alt="views.png" className="w-16 h-12 object-contain rounded bg-neutral-950 p-1 border border-neutral-800" referrerPolicy="no-referrer" />
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white">Figure 3: Final View</div>
                <div className="text-[11px] text-neutral-400">4-View Orthographic Projections (views.png)</div>
              </div>
            </button>
          </div>

          {/* Bottom engineering signature */}
          <div className="relative z-10 pt-4 mt-3 border-t border-sky-900/40 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 font-mono">
            <div>
              AUTHORS: LUVDEEP JAIN N · CHANDRA MOULISHWARAN P · KATHIRAVAN R
            </div>
            <div>
              GUIDE: DR. VENKATESH RAJA (SONA COLLEGE OF TECHNOLOGY)
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <div className="text-sm font-mono text-emerald-400 mb-2">{current.title}</div>
            <img
              src={current.url}
              alt={current.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-neutral-800 shadow-2xl bg-neutral-950"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-neutral-400 mt-3 text-center">Click anywhere to close full screen view</p>
          </div>
        </div>
      )}
    </section>
  );
};
