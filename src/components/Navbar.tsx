import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRequestPilot: () => void;
  onOpenSpecs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot, onOpenSpecs }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            SX
          </span>
          <span className="font-heading font-black tracking-wider text-neutral-100">
            STABIX <span className="text-emerald-400 font-medium">VENTURIFLOW</span>
          </span>
        </a>

        {/* Zone 2: Clean 4-6 text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#overview" className="transition-colors hover:text-emerald-400">
            Overview
          </a>
          <a href="#ergonomics" className="transition-colors hover:text-emerald-400">
            Ergonomics
          </a>
          <a href="#aerodynamics" className="transition-colors hover:text-emerald-400">
            Venturi Tech
          </a>
          <a href="#cfd-validation" className="transition-colors hover:text-emerald-400">
            CFD Validation
          </a>
          <a href="#roi-calculator" className="transition-colors hover:text-emerald-400">
            Plant ROI
          </a>
          <a href="#blueprint" className="transition-colors hover:text-emerald-400">
            Figures 2 & 3
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSpecs}
            className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-800 rounded-lg hover:border-neutral-700 whitespace-nowrap"
          >
            Datasheet
          </button>
          <button
            onClick={onRequestPilot}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm hover:shadow-emerald-500/20 whitespace-nowrap"
          >
            <span>Request Pilot Kit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            Overview
          </a>
          <a
            href="#ergonomics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            Ergonomics
          </a>
          <a
            href="#aerodynamics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            Venturi Tech
          </a>
          <a
            href="#cfd-validation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            CFD Validation
          </a>
          <a
            href="#roi-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            Plant ROI
          </a>
          <a
            href="#blueprint"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-emerald-400"
          >
            Figures 2 & 3
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpecs();
              }}
              className="w-full text-center py-2 text-xs font-medium text-neutral-300 border border-neutral-800 rounded-lg"
            >
              Engineering Datasheet
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPilot();
              }}
              className="w-full text-center py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 rounded-lg"
            >
              Request Pilot Kit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
