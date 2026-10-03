import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ErgonomicComparison } from './components/ErgonomicComparison';
import { VenturiAerodynamics } from './components/VenturiAerodynamics';
import { AnsysCfdSection } from './components/AnsysCfdSection';
import { CadBlueprintViewer } from './components/CadBlueprintViewer';
import { RoiCalculator } from './components/RoiCalculator';
import { FactoryBenefits } from './components/FactoryBenefits';
import { TechSpecsTable } from './components/TechSpecsTable';
import { AcademicCreds } from './components/AcademicCreds';
import { Footer } from './components/Footer';
import { PilotRequestModal } from './components/PilotRequestModal';

export default function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  const handleOpenPilotModal = () => {
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  const handleScrollToSpecs = () => {
    const el = document.getElementById('specifications');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-neutral-950">
      {/* Top 3-Zone Bar */}
      <Navbar 
        onRequestPilot={handleOpenPilotModal} 
        onOpenSpecs={handleScrollToSpecs} 
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with interactive hotspots */}
        <HeroSection onRequestPilot={handleOpenPilotModal} />

        {/* Section 1: Biomechanics & Ergonomic Angle Comparison */}
        <ErgonomicComparison />

        {/* Section 2: Venturi Aerodynamics & Entrainment Physics */}
        <VenturiAerodynamics />

        {/* Section 3: ANSYS Fluent CFD Simulation & Velocity Contours */}
        <AnsysCfdSection />

        {/* Section 4: SolidWorks CAD Blueprint & 4-Quadrant Orthographic Views */}
        <CadBlueprintViewer />

        {/* Section 5: Plant Utility ROI & Compressed Air Cost Calculator */}
        <RoiCalculator onRequestPilot={handleOpenPilotModal} />

        {/* Section 6: Factory Floor Application & OSHA Safety */}
        <FactoryBenefits />

        {/* Section 7: Full Technical Specifications & Exportable Datasheet */}
        <TechSpecsTable />

        {/* Section 8: TN-IMPACT 2026 Academic & Research Attribution */}
        <AcademicCreds />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pilot Pack Request Modal */}
      <PilotRequestModal 
        isOpen={isPilotModalOpen} 
        onClose={handleClosePilotModal} 
      />
    </div>
  );
}
