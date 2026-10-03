import React, { useState } from 'react';
import { TECHNICAL_SPECIFICATIONS } from '../data/productData';
import { Download, Search, CheckCircle, FileText, Printer } from 'lucide-react';

export const TechSpecsTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const categories = ['All', 'Pneumatics & Performance', 'Ergonomics & Human Factors', 'Materials & Construction', 'Pneumatic Connections'];

  const filteredSpecs = TECHNICAL_SPECIFICATIONS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.parameter.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleExportDatasheet = () => {
    // Generate text/markdown export of technical specifications
    const lines = [
      `========================================================================`,
      `STABIX VENTURIFLOW 7B (SX-VF70-PRO) - ENGINEERING DATASHEET`,
      `TN-IMPACT 2026 HACKATHON · CHALLENGE TNI26020`,
      `Sona College of Technology · Department of Mechanical Engineering`,
      `========================================================================\n`,
      `CATEGORIES & TECHNICAL SPECIFICATIONS:\n`,
      ...TECHNICAL_SPECIFICATIONS.map(s => 
        `[${s.category}] ${s.parameter}: ${s.value} (Conventional: ${s.baseline} | Delta: ${s.variance}) - ${s.note || ''}`
      ),
      `\n========================================================================`,
      `ANSYS Fluent 2024 CFD Validated at 7.0 bar supply pressure`,
      `Compliant with OSHA 1910.242(b) and ISO 6358 pneumatic testing standards`,
      `========================================================================`
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StabiX_VenturiFlow_Datasheet_TNI26020.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="specifications" className="py-16 md:py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
              Full Technical Specifications
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Engineering Parameters & Industrial Benchmarks
            </h2>
            <p className="mt-2 text-neutral-300 text-sm sm:text-base max-w-2xl">
              Certified mechanical and pneumatic tolerances per ISO 6358 and ISO 11228-3. 
              Review the detailed comparison against legacy straight-nozzle industrial blow guns.
            </p>
          </div>

          <button
            onClick={handleExportDatasheet}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors cursor-pointer self-start md:self-auto whitespace-nowrap shadow-sm"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Datasheet Exported</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Export Technical Spec Sheet</span>
              </>
            )}
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-900 rounded-xl border border-neutral-800 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search parameters, materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>
        </div>

        {/* Specifications Data Table */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-950 text-neutral-400 font-mono uppercase text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Category</th>
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4 text-emerald-400 font-bold">StabiX VenturiFlow</th>
                  <th className="py-3 px-4 text-neutral-400">Legacy Air Gun</th>
                  <th className="py-3 px-4 hidden md:table-cell">Standard / Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 font-sans">
                {filteredSpecs.map((item, index) => (
                  <tr key={index} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-neutral-400 font-mono text-[11px] whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {item.parameter}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-emerald-400 font-bold tabular-nums">
                      {item.value}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-400 tabular-nums">
                      {item.baseline}
                    </td>
                    <td className="py-3.5 px-4 text-neutral-400 text-xs hidden md:table-cell">
                      {item.note || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSpecs.length === 0 && (
            <div className="p-8 text-center text-xs text-neutral-500 font-mono">
              No specifications matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
