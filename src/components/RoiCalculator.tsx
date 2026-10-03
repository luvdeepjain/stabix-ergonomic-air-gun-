import React, { useState } from 'react';
import { Calculator, TrendingDown, DollarSign, Leaf, Zap, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onRequestPilot: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onRequestPilot }) => {
  const [gunCount, setGunCount] = useState<number>(25);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3.5);
  const [daysPerYear, setDaysPerYear] = useState<number>(260);
  const [costPerKwh, setCostPerKwh] = useState<number>(0.14);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const currencySymbol = currency === 'USD' ? '$' : '₹';
  const currencyMultiplier = currency === 'USD' ? 1 : 86; // approx USD to INR

  // Engineering calculation constants:
  // Conventional: 362 NL/min = 0.362 m3/min
  // StabiX Venturi: 210 NL/min = 0.210 m3/min
  // Delta air saved per minute = 0.152 m3/min
  const deltaAirPerMinM3 = 0.152;
  const annualTriggerMinutesPerGun = hoursPerDay * 60 * daysPerYear;
  
  // Total air volume saved in m3
  const annualAirSavedM3 = deltaAirPerMinM3 * annualTriggerMinutesPerGun * gunCount;

  // Typical industrial screw compressor efficiency: ~0.11 kWh per m3 of compressed air at 7 bar
  const kwhPerM3 = 0.11;
  const annualKwhSaved = Math.round(annualAirSavedM3 * kwhPerM3);

  // Financial savings
  const annualFinancialSavings = Math.round(annualKwhSaved * costPerKwh * (currency === 'INR' ? 8.5 : 1));

  // CO2 reduction (approx 0.72 kg CO2 per kWh grid average)
  const co2TonsSaved = ((annualKwhSaved * 0.72) / 1000).toFixed(1);

  // Estimated payback period (assuming replacement cost of ~$45 per tool)
  const toolCostTotal = gunCount * 45 * currencyMultiplier;
  const paybackMonths = ((toolCostTotal / (annualFinancialSavings || 1)) * 12).toFixed(1);

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-neutral-900/50 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
            Energy Economics & Payback Model
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Factory Compressed Air Utility Savings Calculator
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Compressed air is the most expensive industrial utility—over 85% of electrical compressor energy is lost as heat. 
            Calculate the exact utility cost and carbon savings for your factory floor by replacing conventional blow guns with StabiX VenturiFlow.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs">
                <span className="font-mono text-neutral-400 font-medium">PLANT OPERATING PARAMETERS</span>
                <div className="flex bg-neutral-900 p-0.5 rounded border border-neutral-800 text-[11px] font-mono">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2.5 py-0.5 rounded transition-colors ${currency === 'USD' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400'}`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-2.5 py-0.5 rounded transition-colors ${currency === 'INR' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-neutral-400'}`}
                  >
                    INR (₹)
                  </button>
                </div>
              </div>

              {/* Slider 1: Number of Blow Guns */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Active Shop Floor Blow Guns:</span>
                  <span className="text-emerald-400 font-bold">{gunCount} Units</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="150"
                  step="1"
                  value={gunCount}
                  onChange={(e) => setGunCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>2 guns (Cell)</span>
                  <span>50 guns (Line)</span>
                  <span>150 guns (Plant)</span>
                </div>
              </div>

              {/* Slider 2: Operating Hours / Day */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Trigger-On Usage per Gun:</span>
                  <span className="text-sky-400 font-bold">{hoursPerDay.toFixed(1)} Hours/Day</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="8.0"
                  step="0.5"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>0.5h (Intermittent)</span>
                  <span>4.0h (Assembly)</span>
                  <span>8.0h (Continuous line)</span>
                </div>
              </div>

              {/* Slider 3: Days per Year */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Operating Days per Year:</span>
                  <span className="text-white font-bold">{daysPerYear} Days/Year</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="365"
                  step="5"
                  value={daysPerYear}
                  onChange={(e) => setDaysPerYear(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-300"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>200 (Single shift)</span>
                  <span>260 (Standard 5-day)</span>
                  <span>365 (Continuous 24/7)</span>
                </div>
              </div>

              {/* Slider 4: Power Tariff */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Electricity Tariff Rate:</span>
                  <span className="text-amber-400 font-bold">
                    {currency === 'USD' ? `$${costPerKwh.toFixed(2)}/kWh` : `₹8.50/kWh`}
                  </span>
                </div>
                {currency === 'USD' && (
                  <input
                    type="range"
                    min="0.08"
                    max="0.30"
                    step="0.01"
                    value={costPerKwh}
                    onChange={(e) => setCostPerKwh(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                )}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Modelled on 7 bar screw compressor specific energy consumption (0.11 kWh / Nm³ air delivered).
            </div>
          </div>

          {/* Results Display Board */}
          <div className="lg:col-span-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-neutral-950 via-neutral-950 to-emerald-950/20 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                Projected Annual Savings
              </div>
              
              {/* Massive Primary Number */}
              <div className="py-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight tabular-nums">
                  {currencySymbol}{annualFinancialSavings.toLocaleString()}
                  <span className="text-xl sm:text-2xl text-neutral-400 font-normal ml-2">/year</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  Direct utility electricity expense saved on plant air compressors
                </p>
              </div>

              {/* 3 Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Compressor Power Saved</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">
                    {annualKwhSaved.toLocaleString()} <span className="text-xs font-normal text-neutral-400">kWh</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <TrendingDown className="w-3.5 h-3.5 text-sky-400" />
                    <span>Air Volume Conserved</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">
                    {Math.round(annualAirSavedM3).toLocaleString()} <span className="text-xs font-normal text-neutral-400">m³</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Estimated Payback</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                    ~{paybackMonths} <span className="text-xs font-normal text-emerald-300">Months</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CO₂ Averted</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">
                    {co2TonsSaved} <span className="text-xs font-normal text-neutral-400">Metric Tons</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Prompt */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 text-center sm:text-left">
                Ready to validate these savings on your production line?
              </div>
              <button
                onClick={onRequestPilot}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Request 3-Unit Pilot Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
