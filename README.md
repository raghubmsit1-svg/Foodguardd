# 🛡️ FoodGuard — Portable Nano-Engineered Food Testing & ML Diagnostics

<div align="center">
  <img src="public/logo.svg" alt="FoodGuard Logo" width="100" height="100" />
  <h3><strong>Safe Food. Healthier Tomorrow.</strong></h3>
  <p>Clinical diagnostic precision for nanoscale food safety verification and molecular diagnostic tracking.</p>

  [![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Compliance](https://img.shields.io/badge/Standards-ISO--17025-green?style=for-the-badge)](https://www.iso.org/)
</div>

---

## 📖 Overview

**FoodGuard** is a next-generation med-tech and food inspection web platform designed for portable optical spectroscopy. It enables rapid, on-site detection of chemical and biological food adulterants (such as synthetic urea, starch bulking, detergents, and formalin in milk and honey).

Built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS v4**, this application provides a high-density clinical telemetry dashboard alongside an interactive handheld device simulator.

---

## ✨ Key Features & Screens

### 1. 🚀 Welcome & Ambient Telemetry (`/`)
- Rotating scientific resonance wave animation (`532nm` laser excitation simulation).
- Live IoT auto-pairing status with hardware sensors.
- Core value proposition pills: *Rapid On-Site Screening*, *Nano-Biosensor Tech*, *Secure Audit Trail*.

### 2. 🎛️ Diagnostic Terminal Dashboard (`/dashboard`)
- **Active Hardware Status**: Live battery tracking (98%), firmware version (`v2.4.1`), and sensor link (`FG-Sensor-904`).
- **Hero Scanner Card**: Optical spectroscopy aperture trigger with one-click assay initialization.
- **Testing Summary**: 30-day compliance metrics (Total, Safe, Flagged) and ratio progress visualizers.
- **Quick Action Grid**: Quick access to Test History, PDF Reports, Regional Safety Map, and Sensor Calibration.
- **Recent Verification Feed**: Live sample feed with cryptographic hash fingerprints.

### 3. 🔬 Live Molecular Scan Assay (`/scan`)
- **3-Phase Workflow Stepper**: `Prepare Sample` ➔ `Testing Assay` ➔ `ML Diagnostic`.
- **Diagnostic Radar Visualizer**: Rotating laser sweeper beam with concentric progress arc counting from 0% to 100%.
- **Live Photonic Telemetry**: Real-time flux ticker (`~482 nW`), laser temperature (`22.4°C`), and integration time (`120ms`).
- **Real-Time Spectrogram Waveform**: Interactive SVG absorption spectrum (400–780 nm) with live peak shifts.
- **Assay Controls**: Pause/Resume simulation and fast-forward testing controls.

### 4. 🧬 ML Diagnostic & Sample Detail (`/results`)
- **Comparison Switch**: Toggle between **Adulteration Found** (Starch 0.45 g/L, Red Alert) and **Safe Benchmark** (Pristine 0.00 ppm baseline).
- **ML Spectral Fit**: Model accuracy score (`94.8% ResNet Spectro v3.2`).
- **Chain of Custody**: Lot numbers, inspector details (`Dr. Eliza Vance`), collection depot coordinates, and SHA-256 ledger hashes.
- **Official Certificate of Analysis (CoA)**: Modal certificate generator with verification QR code and print/export functionality.

### 5. 🗂️ Test History & Audit Trail (`/history`)
- **Instant Search**: Real-time filtering by Test ID, matrix name, collection depot, or batch.
- **Filter Pills**: One-click filters for `All`, `Safe`, `Adulterated`, `Milk`, and `Honey (Beta)`.
- **Export Options**: Export all records as certified JSON audit logs or clipboard links.

### 6. 📊 Food Safety Analytics & Intelligence (`/analytics`)
- **Surveillance Grid**: Total screened (`1,420`), compliance rate (`91.4%`), intercepted batches (`122`), and latency (`18.4s`).
- **Adulterant Breakdown**: Interactive category bars (Starch 42%, Urea 28%, Detergent 18%, Formalin 12%).
- **Regional Heatmap**: Surveillance cards for intake depots with GPS coordinates and risk levels.
- **Seasonality & Model Accuracy**: Monthly compliance trend visualizer.

### 7. ⚙️ Sensor Calibration & Diagnostics (`/device`)
- **Optical Auto-Calibration Routine**: 4-step diagnostic sweep with live progress bar.
- **Tuning Controls**: Interactive integration time slider (50 ms – 250 ms).
- **Hardware Telemetry**: Noise floor (`-42.8 dB`), optical cleanliness index (`99.8%`), and ISO-17025 accreditation credentials.

### 📱 Dual Viewport Mode
- Toggle between **Handheld Mobile Frame Mode** (simulates portable field hardware) and **Widescreen Clinical Desktop Mode** with one click.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts ([Manrope](https://fonts.google.com/specimen/Manrope), [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk))
- **Iconography**: Google [Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide Icons](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or newer
- npm (or yarn / pnpm / bun)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/foodguard.git
   cd foodguard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to explore the application.

---

## 🧪 Simulation & Interactive Demo Flow

1. **Start on `/`**: Click **"Enter Terminal Dashboard"**.
2. **On `/dashboard`**: Review hardware telemetry and click **"Start New Molecular Assay"**.
3. **On `/scan`**: Watch the laser radar sweep, view the live SVG absorption spectrum, or click **"Fast-Forward 100%"**.
4. **On `/results`**: Use the top switch to toggle between **Adulteration Found** and **Safe Benchmark**. Click **"Download Certified Audit CoA"** to view and print the Certificate of Analysis.
5. **On `/history`**: Test live searching (e.g. type `"Starch"` or `"Bengaluru"`) and filter by `Safe` or `Adulterated`.
6. **On `/analytics`**: Switch between the `Overview`, `Regional Heatmap`, and `Adulterant Trends` tabs.
7. **On `/device`**: Click **"Run Optical Auto-Calibration"** to watch the sensor zeroing routine.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
