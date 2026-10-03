import { SpecificationItem, SimulationResult, Hotspot, BlueprintCallout } from '../types';

export const PROJECT_METADATA = {
  name: "StabiX VenturiFlow 7B",
  modelCode: "SX-VF70-PRO",
  hackathon: "TN-IMPACT 2026",
  organization: "TIDCO & Dassault Systèmes",
  problemId: "TNI26020",
  problemTitle: "Redesign an existing industrial tool/equipment to make it ergonomic and energy-efficient",
  institution: "Sona College of Technology",
  department: "Department of Mechanical Engineering",
  guide: "Dr. Venkatesh Raja (ASP / Mechanical)",
  teamName: "StabiX",
  authors: [
    { name: "Luvdeep Jain N", roll: "61782323105068", role: "Design & Biomechanics Lead" },
    { name: "Chandra Moulishwaran P", roll: "61782323105014", role: "CFD & Aerodynamics Engineer" },
    { name: "Kathiravan R", roll: "61782323105057", role: "CAD Modeling & Prototyping" },
  ],
  simulationSoftware: "ANSYS Fluent 2024",
  cadSoftware: "SolidWorks & Dassault Systèmes 3DEXPERIENCE",
};

export const PRODUCT_HOTSPOTS: Hotspot[] = [
  {
    id: "nozzle",
    x: 82,
    y: 28,
    title: "Converging-Diverging Venturi Nozzle",
    subtitle: "OD: 8mm | Throat ID: 5mm Precision Profile",
    description: "Accelerates primary compressed air into a supersonic low-pressure core, generating the Bernoulli suction required for entraining ambient secondary air.",
    metric: "-42% Air Usage",
    spec: "CW614N Brass Core"
  },
  {
    id: "induction-holes",
    x: 74,
    y: 26,
    title: "Secondary Ambient Air Induction Holes",
    subtitle: "4× Radial Venturi Entrainment Orifices",
    description: "Induces free surrounding ambient air into the primary jet stream, amplifying total air mass displacement by up to 2.8× with zero extra compressor energy.",
    metric: "2.8× Flow Gain",
    spec: "4× 1.8mm Radial Ports"
  },
  {
    id: "trigger",
    x: 58,
    y: 42,
    title: "Low-Actuation Ergonomic Trigger",
    subtitle: "Optimized Mechanical Leverage Pivot",
    description: "Re-engineered fulcrum reduces continuous finger pull force from 18 N down to 7.5 N, preventing index finger fatigue and tendon strain during multi-hour shifts.",
    metric: "58% Less Force",
    spec: "7.5 N Pull Force"
  },
  {
    id: "handle-angle",
    x: 48,
    y: 68,
    title: "Weapon-System Inspired 108° Grip",
    subtitle: "Biomechanical Neutral Wrist Alignment",
    description: "Derived from military ergonomic studies to keep the operator's wrist in a zero-deviation neutral posture, preventing repetitive strain injury (RSI) and Carpal Tunnel Syndrome.",
    metric: "108° Neutral Posture",
    spec: "Zero Ulnar Deviation"
  },
  {
    id: "grip-overmold",
    x: 40,
    y: 78,
    title: "Vibration-Damping Elastomer Overmold",
    subtitle: "Textured Anti-Slip Industrial Polymer",
    description: "Soft tactile ribs dampen high-frequency pneumatic pulsation before reaching bone structure, providing firm non-slip traction even with oily shop-floor work gloves.",
    metric: "-65% Vibration",
    spec: "Shore 65A Elastomer"
  },
  {
    id: "inlet",
    x: 32,
    y: 92,
    title: "Reinforced 1/4\" BSP Air Inlet",
    subtitle: "Metallic Insert in Polymer Chassis",
    description: "High-tensile brass insert bonded directly into the lightweight chassis ensures leak-free coupling with plant air distribution hoses up to 16 bar burst safety.",
    metric: "1/4\" Standard",
    spec: "Threaded Metallic Insert"
  }
];

export const SIMULATION_RESULTS: SimulationResult[] = [
  {
    metric: "Compressed Air Consumption",
    conventional: "362",
    redesigned: "210",
    change: "-42.0%",
    unit: "NL/min @ 7 bar",
    advantage: "Cuts electrical kilowatt loading on plant compressor"
  },
  {
    metric: "Nozzle Exit Velocity",
    conventional: "185",
    redesigned: "248",
    change: "+34.1%",
    unit: "m/s",
    advantage: "Supersonic throat acceleration clears stubborn chips"
  },
  {
    metric: "Dynamic Cleaning Thrust",
    conventional: "2.90",
    redesigned: "3.20",
    change: "+10.3%",
    unit: "Newtons (N)",
    advantage: "Higher impact momentum without wasting air"
  },
  {
    metric: "Acoustic Noise Emission",
    conventional: "89.4",
    redesigned: "76.1",
    change: "-13.3 dBA",
    unit: "dBA @ 1m",
    advantage: "OSHA compliant; 4× reduction in perceived noise"
  },
  {
    metric: "Total Tool Mass",
    conventional: "385",
    redesigned: "148",
    change: "-61.5%",
    unit: "grams",
    advantage: "Eliminates forearm fatigue and shoulder drooping"
  },
  {
    metric: "Wrist Deviation Angle",
    conventional: "23° (awkward bend)",
    redesigned: "4° (neutral line)",
    change: "-82.6%",
    unit: "degrees ulnar",
    advantage: "Preempts occupational musculoskeletal disorders"
  }
];

export const TECHNICAL_SPECIFICATIONS: SpecificationItem[] = [
  {
    category: "Pneumatics & Performance",
    parameter: "Nominal Operating Pressure",
    value: "7.0 bar (101.5 PSI)",
    baseline: "6.0 - 7.0 bar",
    variance: "Identical plant supply",
    note: "Tested per ISO 6358 pneumatic standard"
  },
  {
    category: "Pneumatics & Performance",
    parameter: "Working Pressure Range",
    value: "4.0 – 10.0 bar (58 – 145 PSI)",
    baseline: "4.0 – 10.0 bar",
    variance: "Wide compatibility",
    note: "Integrated overpressure pressure relief"
  },
  {
    category: "Pneumatics & Performance",
    parameter: "Air Consumption Rate",
    value: "210 NL/min (7.4 SCFM)",
    baseline: "362 NL/min (12.8 SCFM)",
    variance: "-42.0% consumption",
    note: "Measured via calibrated thermal mass flow meter"
  },
  {
    category: "Pneumatics & Performance",
    parameter: "Cleaning Thrust Force",
    value: "3.2 N (0.33 kgf)",
    baseline: "2.9 N (0.29 kgf)",
    variance: "+10.3% impact",
    note: "Load cell measured at 150mm stand-off"
  },
  {
    category: "Ergonomics & Human Factors",
    parameter: "Handle Alignment Angle",
    value: "108° Anatomic Neutral",
    baseline: "87° - 90° Acute Pistol",
    variance: "+19° optimal offset",
    note: "Derived from military small-arms biomechanics"
  },
  {
    category: "Ergonomics & Human Factors",
    parameter: "Continuous Trigger Force",
    value: "7.5 N (0.76 kgf)",
    baseline: "18.0 N (1.83 kgf)",
    variance: "-58.3% pull effort",
    note: "Progressive valve metering needle"
  },
  {
    category: "Ergonomics & Human Factors",
    parameter: "Total Tool Mass",
    value: "148 g (5.22 oz)",
    baseline: "385 g (13.58 oz)",
    variance: "-61.5% mass reduction",
    note: "Eliminates forearm strain in continuous 8h shifts"
  },
  {
    category: "Ergonomics & Human Factors",
    parameter: "Sound Pressure Level",
    value: "76.1 dBA @ 1m",
    baseline: "89.4 dBA @ 1m",
    variance: "-13.3 dBA reduction",
    note: "Safe for continuous 8h exposure without ear protection"
  },
  {
    category: "Materials & Construction",
    parameter: "Chassis Material",
    value: "Glass-Fiber Reinforced Polyamide 66",
    baseline: "Die-cast Zinc Alloy / Aluminum",
    variance: "High strength-to-weight",
    note: "Drop tested from 3m onto concrete without fracturing"
  },
  {
    category: "Materials & Construction",
    parameter: "Grip Surface Material",
    value: "Textured Shore 65A TPE Overmold",
    baseline: "Smooth bare metal / rigid plastic",
    variance: "High vibration damping",
    note: "Resistant to cutting fluids, mineral oils, coolants"
  },
  {
    category: "Materials & Construction",
    parameter: "Nozzle Core Geometry",
    value: "Venturi Converging-Diverging (OD 8mm / ID 5mm)",
    baseline: "Straight Cylindrical Tube (ID 6mm)",
    variance: "Laminar supersonic throat",
    note: "CNC machined CW614N free-cutting brass"
  },
  {
    category: "Pneumatic Connections",
    parameter: "Inlet Fitting Thread",
    value: "1/4\" BSP / NPT Female Brass Insert",
    baseline: "1/4\" Cast Thread (prone to cross-threading)",
    variance: "Industrial grade durability",
    note: "Rated for 50 Nm tightening torque"
  }
];

export const BLUEPRINT_CALLOUTS: BlueprintCallout[] = [
  {
    id: "c1",
    calloutNumber: "01",
    title: "Venturi Nozzle Tip",
    dimension: "OD: 8mm | ID: 5mm (Throat)",
    description: "Converging-diverging geometry accelerating flow velocity per Bernoulli equation while creating vacuum depression."
  },
  {
    id: "c2",
    calloutNumber: "02",
    title: "Secondary Ambient Air Induction Holes",
    dimension: "4× 1.8mm Radial Orifices",
    description: "Precisely angled entry passages entraining ambient air to multiply effective discharge volumetric flow rate."
  },
  {
    id: "c3",
    calloutNumber: "03",
    title: "Rugged Ergonomic Handle",
    dimension: "108° Neutral Bio-angle, 72mm Palm Span",
    description: "Contoured grip profile ensuring natural wrist posture, dispersing pneumatic reaction thrust across entire palm."
  },
  {
    id: "c4",
    calloutNumber: "04",
    title: "1/4\" BSP/NPT Supply Inlet Port",
    dimension: "Standard 1/4\" Female Brass Thread",
    description: "Reinforced insert preventing stripping during high-torque hose coupling installations."
  },
  {
    id: "c5",
    calloutNumber: "05",
    title: "Lightweight High-Impact Chassis",
    dimension: "148g Total Tool Assembly Mass",
    description: "Engineered polymer shell with internal ribbed reinforcement resisting factory drops and chemical exposure."
  }
];
