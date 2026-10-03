import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Building2, Mail, User } from 'lucide-react';

interface PilotRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotRequestModal: React.FC<PilotRequestModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [plantLocation, setPlantLocation] = useState('');
  const [gunCountEstimate, setGunCountEstimate] = useState('10-50 units');
  const [primaryFocus, setPrimaryFocus] = useState('Both Energy & Ergonomics');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !company) return;

    // Generate reference code
    const generatedId = `SX-PILOT-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setPlantLocation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-1">
              Industrial Pilot Program
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Request StabiX Evaluation Test Pack
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              Equip your maintenance line with 2 trial units (pre-fitted with 1/4" NPT or BSP fittings) 
              to conduct live air-consumption audits and operator fatigue assessments.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Full Name & Title <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance, Plant Maintenance Lead"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Corporate / Work Email <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="engineer@plant.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Manufacturing Company <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Precision Auto Components"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Facility Air Drops (Approx)
                  </label>
                  <select
                    value={gunCountEstimate}
                    onChange={(e) => setGunCountEstimate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="1-10 units">1 - 10 air drops</option>
                    <option value="10-50 units">10 - 50 air drops</option>
                    <option value="50-200 units">50 - 200 air drops</option>
                    <option value="200+ units">200+ continuous line</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Primary Evaluation Priority
                  </label>
                  <select
                    value={primaryFocus}
                    onChange={(e) => setPrimaryFocus(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Both Energy & Ergonomics">Air Energy & Ergonomics</option>
                    <option value="Compressed Air Energy Reduction">Compressor Utility Reduction</option>
                    <option value="Operator Fatigue / Carpal Tunnel">Operator Comfort & Safety</option>
                    <option value="Noise Level Compliance">OSHA Noise Compliance</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  <span>Submit Pilot Dispatch Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation. Direct shipment from StabiX Engineering Lab.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white">Pilot Kit Request Dispatched</h3>
            
            <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{fullName}</span>. Your factory evaluation request for <span className="text-white font-medium">{company}</span> has been logged under:
            </p>

            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 inline-block font-mono text-emerald-400 font-bold text-sm tracking-widest">
              {referenceId}
            </div>

            <p className="text-[11px] text-neutral-400">
              An engineering evaluation dossier with technical flow benchmarks has been routed to <span className="text-neutral-200">{email}</span>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
