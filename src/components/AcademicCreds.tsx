import React from 'react';
import { PROJECT_METADATA } from '../data/productData';
import { Award, Users, BookOpen, Building, CheckCircle2 } from 'lucide-react';

export const AcademicCreds: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner with clean unboxed styling */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
                <Award className="w-4 h-4" />
                <span>TN-IMPACT 2026 RESEARCH & PROTOTYPING INITIATIVE</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                Problem Statement TNI26020: Industrial Tool Modernization
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-2xl leading-relaxed">
                Developed in partnership with Tamil Nadu Industrial Development Corporation (TIDCO) and 
                Dassault Systèmes to modernize legacy manufacturing equipment through advanced 
                computer-aided design and computational aerodynamics.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 text-xs font-mono text-neutral-400 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <div><span className="text-white font-semibold">Institution:</span> {PROJECT_METADATA.institution}</div>
              <div><span className="text-white font-semibold">Faculty Guide:</span> {PROJECT_METADATA.guide}</div>
              <div><span className="text-white font-semibold">Team:</span> {PROJECT_METADATA.teamName} (Mechanical Engg)</div>
            </div>
          </div>

          {/* Student Contributors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {PROJECT_METADATA.authors.map((author, index) => (
              <div key={index} className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                <div className="text-xs font-mono text-emerald-400 mb-1">TEAM MEMBER 0{index + 1}</div>
                <div className="text-base font-bold text-white">{author.name}</div>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">Reg. No: {author.roll}</div>
                <div className="text-xs text-neutral-300 mt-2 font-medium">{author.role}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
