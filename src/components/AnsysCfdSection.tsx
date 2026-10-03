import React, { useState } from 'react';
import { SIMULATION_RESULTS } from '../data/productData';
import { Activity, Gauge, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const CFD_IMAGE_URL = "/src/assets/images/ansys_cfd_simulation_1791016963338.jpg";

export const AnsysCfdSection: React.FC = () => {
  const [activeContour, setActiveContour] = useState<'velocity' | 'pressure' | 'turbulent'>('velocity');

  return (
    <section id="cfd-validation" className="py-16 md:py-24 bg-neutral-900/60 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Computational Fluid Dynamics Validation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            ANSYS Fluent CFD Modeling at 7.0 Bar Operating Pressure
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Theoretical flow claims were validated through rigorous computational simulations in ANSYS Fluent. 
            Steady-state compressible flow models proved that the converging-diverging profile accelerates velocity 
            through the throat while dramatically reducing mass flow consumption.
          </p>
        </div>

        {/* Top Grid: CFD Visual & Boundary Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* CFD Contour Visualization */}
          <div className="lg:col-span-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">ANSYS Fluent 2024 · CFD Contour Analysis</span>
              </div>
              <div className="flex bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-[11px] font-mono">
                <button
                  onClick={() => setActiveContour('velocity')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeContour === 'velocity' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Velocity (m/s)
                </button>
                <button
                  onClick={() => setActiveContour('pressure')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeContour === 'pressure' ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Static Pressure
                </button>
                <button
                  onClick={() => setActiveContour('turbulent')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeContour === 'turbulent' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Turbulence (k-ε)
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 mt-3 group">
              <img
                src={CFD_IMAGE_URL}
                alt="ANSYS Fluent Velocity and Streamline Contours"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay based on selected contour mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40 pointer-events-none" />

              {/* Color spectrum bar overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md p-3 rounded-lg border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-400">Scale:</span>
                  <div className="w-36 sm:w-48 h-2.5 rounded bg-gradient-to-r from-blue-600 via-cyan-400 via-amber-400 to-red-600" />
                </div>
                <div className="flex items-center gap-4 text-[11px] text-neutral-300">
                  {activeContour === 'velocity' && (
                    <>
                      <span>Inlet: 45 m/s</span>
                      <span className="text-emerald-400 font-bold">Throat Peak: 248 m/s</span>
                      <span>Exit Jet: 215 m/s</span>
                    </>
                  )}
                  {activeContour === 'pressure' && (
                    <>
                      <span>Supply: 7.0 bar</span>
                      <span className="text-sky-400 font-bold">Throat Depression: 0.88 bar</span>
                      <span>Discharge: 1.0 bar (atm)</span>
                    </>
                  )}
                  {activeContour === 'turbulent' && (
                    <>
                      <span>Laminar Core: 0.02 m²/s²</span>
                      <span className="text-amber-400 font-bold">Vorticity Reduction: 68%</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-neutral-400 font-mono">Throat Pressure Drop</div>
                <div className="text-base font-bold text-sky-400 font-mono mt-0.5">ΔP = 6.12 bar</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">High conversion to kinetic energy</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-neutral-400 font-mono">Exit Air Speed</div>
                <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">+34.1% vs stock</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">248 m/s accelerated discharge</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-neutral-400 font-mono">Mass Flow Consumption</div>
                <div className="text-base font-bold text-amber-400 font-mono mt-0.5">-42.0% compressor air</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Lower primary air mass required</div>
              </div>
            </div>
          </div>

          {/* Boundary Conditions Specification Card */}
          <div className="lg:col-span-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Simulation Setup
              </div>
              <h3 className="text-lg font-bold text-white mb-4">
                Boundary Conditions & Physics Setup
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="pb-3 border-b border-neutral-800">
                  <div className="font-semibold text-neutral-200">Inlet Boundary:</div>
                  <div className="text-neutral-400 font-mono mt-0.5">Pressure Inlet = 7.00 bar (gauge)</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Constant factory air main line supply</div>
                </div>

                <div className="pb-3 border-b border-neutral-800">
                  <div className="font-semibold text-neutral-200">Outlet Boundary:</div>
                  <div className="text-neutral-400 font-mono mt-0.5">Pressure Outlet = 1.00 bar (atmospheric)</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Free discharge into ambient factory air</div>
                </div>

                <div className="pb-3 border-b border-neutral-800">
                  <div className="font-semibold text-neutral-200">Working Fluid:</div>
                  <div className="text-neutral-400 font-mono mt-0.5">Air (Ideal Gas, Compressible)</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Density modeled via ideal gas law</div>
                </div>

                <div className="pb-3 border-b border-neutral-800">
                  <div className="font-semibold text-neutral-200">Wall Condition:</div>
                  <div className="text-neutral-400 font-mono mt-0.5">No-slip viscous boundary layer</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Internal surface roughness Ra = 0.8 µm</div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-200">Turbulence Model:</div>
                  <div className="text-neutral-400 font-mono mt-0.5">Realizable k-epsilon with Enhanced Wall Treatment</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Captures adverse pressure gradient attachment</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
              Validated per TN-IMPACT 2026 Technical Report · Section 6
            </div>
          </div>

        </div>

        {/* Comparative ANSYS Results Table */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white">
                Direct Simulation Comparison: Conventional vs StabiX Redesign
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Full numerical results extracted from ANSYS Fluent 2024 simulation runs at 7.0 bar supply
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              ISO 6358 / ISO 11228 Compliant
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-900/90 text-neutral-400 font-mono uppercase text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Performance Parameter</th>
                  <th className="py-3 px-4">Conventional Straight Gun</th>
                  <th className="py-3 px-4 text-emerald-400 font-bold">StabiX VenturiFlow</th>
                  <th className="py-3 px-4">Net Variance</th>
                  <th className="py-3 px-4 hidden md:table-cell">Operational Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 font-sans">
                {SIMULATION_RESULTS.map((res, i) => (
                  <tr key={i} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                      {res.metric}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-400 tabular-nums">
                      {res.conventional} <span className="text-[11px] text-neutral-500">{res.unit}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-emerald-400 font-bold tabular-nums">
                      {res.redesigned} <span className="text-[11px] text-emerald-600">{res.unit}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold tabular-nums">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        res.change.startsWith('-') && !res.change.includes('Air') 
                          ? 'bg-emerald-500/15 text-emerald-300' 
                          : res.change.startsWith('+') 
                            ? 'bg-sky-500/15 text-sky-300' 
                            : 'bg-emerald-500/15 text-emerald-300'
                      }`}>
                        {res.change}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-neutral-400 text-xs hidden md:table-cell">
                      {res.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
