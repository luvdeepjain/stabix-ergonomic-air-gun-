# StabiX VenturiFlow — Next-Gen Industrial Ergonomic Air Gun

> **TN-IMPACT 2026 Hackathon** · **Problem Statement TNI26020**  
> *Redesign an existing industrial tool/equipment to make it ergonomic and energy-efficient*  
> Supported by **TIDCO** (Tamil Nadu Industrial Development Corporation) & **Dassault Systèmes**

---

## 📌 Executive Summary

Industrial compressed air blow guns are ubiquitous across manufacturing floors for cleaning swarf, chip evacuation, and drying operations. However, legacy blow guns have remained essentially unchanged for decades, leading to two severe industrial liabilities:
1. **Severe Operator Fatigue & Musculoskeletal Injuries**: Forced wrist deviation (87°–90° handle angles), excessive trigger pull resistance (~18 N), and persistent unattenuated pneumatic micro-vibrations cause Carpal Tunnel Syndrome (CTS) and high worker absenteeism.
2. **Excessive Compressed Air Wastage**: Inefficient straight-bore cylindrical nozzles waste costly compressed air (362 NL/min @ 7 bar) directly from plant compressors, driving up kilowatt electricity demand and factory utility costs.

**StabiX VenturiFlow** re-engineers the industrial blow gun by uniting **military small-arms biomechanics** with a **supersonic converging-diverging Venturi nozzle**, cutting compressed air consumption by **42.0%** while aligning the operator's wrist in a zero-strain **108° neutral posture**.

---

## 🚀 Key Innovations & Engineering Specifications

### 1. Biomechanical Ergonomics & Human Factors
- **108° Anatomic Neutral Grip**: Replaces legacy 90° straight grips with an angle optimized for natural forearm alignment, preventing ulnar/radial deviation and median nerve compression (ISO 11228-3 compliant).
- **Progressive Low-Actuation Trigger**: Re-engineered leverage fulcrum reduces continuous finger hold force by 58.3% (**7.5 N** vs 18.0 N), preventing index finger tendonitis during 8-hour continuous shifts.
- **Vibration-Damping Elastomer Overmold**: Dual-shot molded Shore 65A Thermoplastic Elastomer (TPE) grip absorbs high-frequency pneumatic pulsation, providing non-slip traction even with oily work gloves.
- **Ultralight 148g Chassis**: Formed from high-impact glass-filled polyamide (PA66-GF30) with metallic threaded inserts, eliminating tool lever droop (**-61.5% mass reduction** vs 385g zinc alloy guns).

### 2. Aerodynamic Venturi Nozzle & Ambient Air Entrainment
- **Converging-Diverging Geometry**: Converges primary air from Ø8mm down to a Ø5mm throat, transforming static pressure potential into kinetic jet velocity (248 m/s exit speed).
- **Bernoulli Vacuum Induction**: Localized pressure drop at the nozzle throat creates depression below atmospheric pressure, drawing free ambient room air through **4× radial secondary induction ports**.
- **Coherent Thrust Stream**: Amplifies total volumetric air displacement by up to **2.8×** while reducing plant compressor consumption from 362 NL/min down to **210 NL/min @ 7 bar**.
- **OSHA 1910.242(b) Dead-End Safety Compliance**: If the nozzle tip is inadvertently dead-ended against skin or a flat surface, the secondary ports immediately vent static backpressure to below 30 PSI, preventing fatal air embolism injuries.
- **Acoustic Noise Attenuation**: Reduces discharge screech from 89.4 dBA down to **76.1 dBA** (-13.3 dB reduction, well below OSHA 8-hour continuous exposure limits).

---

## 📊 ANSYS Fluent CFD Validation Summary

Simulations conducted per steady compressible Navier-Stokes formulation using the Realizable $k\text{-}\varepsilon$ turbulence model with Enhanced Wall Treatment:

| Parameter | Conventional Straight Gun | StabiX VenturiFlow | Variance | Engineering Advantage |
| :--- | :--- | :--- | :--- | :--- |
| **Compressed Air Flow** | 362 NL/min | **210 NL/min** | **-42.0%** | Massive electrical utility kW savings |
| **Exit Air Velocity** | 185 m/s | **248 m/s** | **+34.1%** | Accelerated momentum flushes deep chips |
| **Cleaning Thrust Force** | 2.90 N | **3.20 N** | **+10.3%** | Higher impact cleaning in fewer passes |
| **Acoustic Noise Floor** | 89.4 dBA | **76.1 dBA** | **-13.3 dBA** | 4× drop in acoustic energy; ear-safe |
| **Total Tool Weight** | 385 g | **148 g** | **-61.5%** | Eliminates operator forearm fatigue |
| **Wrist Deviation Angle** | 23° ulnar bend | **4° neutral line** | **-82.6%** | Eliminates repetitive strain (RSI) risks |

---

## 🖼️ Prototype Testing & Design Validation Figures

The prototype validation highlights two primary figures from the TN-IMPACT 2026 report:

- **Figure 2: Final Coloured View (`3d.png`)**  
  *Internal fluid dynamics cutaway assembly displaying the green Shore 65A vibration-damped handle, internal high-pressure air canal, spring valve spindle, and brass Venturi nozzle core.*
- **Figure 3: Final View (`views.png`)**  
  *Comprehensive SolidWorks 4-quadrant orthographic projections: Front Elevation (XY Plane), Left End Nozzle View (YZ Plane), Plan/Top View (XZ Plane), and 3D Isometric View with CAD coordinate triads.*

---

## 💻 Web Application Features

- **Interactive Prototype Explorer**: Hotspot inspection on Figure 2 with mechanical callouts.
- **Biomechanical Angle Simulator**: Interactive slider demonstrating natural wrist posture at 108° vs awkward ulnar bend at 87°.
- **Real-Time Venturi Aerodynamics Simulator**: Adjust simulated plant supply pressure from 4.0 to 10.0 bar to calculate real-time throat velocity, primary air mass consumed, and effective cleaning thrust.
- **Factory Utility ROI & Payback Calculator**: Interactive financial model for plant maintenance directors: input gun count, daily operating hours, and electricity tariff to compute annual kWh saved, cost savings ($/₹), and metric tons of $\text{CO}_2$ averted.
- **Searchable Technical Datasheet**: Complete specifications table with one-click **Export Technical Spec Sheet** functionality.
- **Industrial Pilot Pack Dispatch Modal**: Evaluation test pack request form for factory EHS, maintenance, and plant engineering teams.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 (TypeScript)
- **Bundler / Tooling**: Vite 8, TypeScript 7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), custom blueprint grid shaders
- **Icons**: Lucide React (`lucide-react`)
- **Animations & Interaction**: Motion 12, HTML5 Canvas / SVG

---

## 👥 Project Team & Academic Credentials

- **Institution**: Sona College of Technology, Salem, Tamil Nadu
- **Department**: Department of Mechanical Engineering (VI Semester, B.E.)
- **Faculty Guide**: Dr. Venkatesh Raja (ASP / Mechanical)
- **Student Contributors (Team StabiX)**:
  - **Luvdeep Jain N** (Reg. No: `61782323105068`) — *Design & Biomechanics Lead*
  - **Chandra Moulishwaran P** (Reg. No: `61782323105014`) — *CFD & Aerodynamics Engineer*
  - **Kathiravan R** (Reg. No: `61782323105057`) — *CAD Modeling & Prototyping*
- **Program**: TN-IMPACT 2026 Hackathon (Tamil Nadu Innovation Modernization through Problem Solving and Advanced Creative Tech)
- **Sponsors & Partners**: TIDCO & Dassault Systèmes

---

## ⚡ Getting Started

### Prerequisites
- Node.js $\ge$ 18.0.0
- npm or bun

### Installation & Run
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run TypeScript typecheck / lint
npm run lint

# Build for production
npm run build
```

---

## 📜 Compliance & Safety Standards

- **OSHA 1910.242(b)**: Compressed air used for cleaning (dead-end pressure relief below 30 PSI).
- **ISO 6358**: Pneumatic fluid power — determination of flow-rate characteristics.
- **ISO 11228-3**: Ergonomics — manual handling of low loads at high frequency.
