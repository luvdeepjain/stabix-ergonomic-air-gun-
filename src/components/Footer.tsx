import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-xs text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-850">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-white tracking-wider">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                SX
              </span>
              <span>STABIX VENTURIFLOW</span>
            </div>
            <p className="mt-1.5 text-neutral-400 max-w-md">
              Next-generation ergonomic pneumatic blow gun with supersonic Venturi airflow amplification. 
              Developed for TN-IMPACT 2026 Challenge TNI26020.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-neutral-300 font-medium">
            <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
            <a href="#ergonomics" className="hover:text-emerald-400 transition-colors">Ergonomics</a>
            <a href="#aerodynamics" className="hover:text-emerald-400 transition-colors">Aerodynamics</a>
            <a href="#cfd-validation" className="hover:text-emerald-400 transition-colors">ANSYS CFD</a>
            <a href="#roi-calculator" className="hover:text-emerald-400 transition-colors">ROI Calculator</a>
            <a href="#blueprint" className="hover:text-emerald-400 transition-colors">Figures 2 & 3</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            © 2026 Team StabiX · Sona College of Technology · Mechanical Engineering
          </div>
          <div className="flex items-center gap-4">
            <span>OSHA 1910.242(b)</span>
            <span>·</span>
            <span>ISO 6358 / ISO 11228-3</span>
            <span>·</span>
            <span>ANSYS Fluent 2024 Validated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
