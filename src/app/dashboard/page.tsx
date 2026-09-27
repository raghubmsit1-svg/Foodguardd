"use client";

import React, { useState } from "react";
import Link from "next/link";
import ShellWrapper from "@/components/ShellWrapper";
import ReportModal from "@/components/ReportModal";
import { INITIAL_TEST_RECORDS, TestRecord } from "@/data/mockData";

export default function DashboardPage() {
  const [selectedReport, setSelectedReport] = useState<TestRecord | null>(null);

  const latestTest = INITIAL_TEST_RECORDS[1]; // Raw Milk safe or adulterated

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-4xl mx-auto space-y-6">
        {/* Greeting & Active Telemetry Bar */}
        <section className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-label-caps text-on-surface-variant uppercase tracking-wider text-xs font-bold">
                Diagnostic Terminal • Bio-Photonics Node
              </p>
              <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                Hello, Dr. Eliza
              </h1>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-surface-container border border-surface-container-high flex items-center justify-center text-primary shadow-xs">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                biotech
              </span>
            </div>
          </div>

          {/* Active Hardware Link Status */}
          <div className="flex items-center justify-between bg-white border border-surface-container px-4 py-2.5 rounded-2xl shadow-xs">
            <div className="flex items-center space-x-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-on-tertiary-container"></span>
              </span>
              <span className="font-code-telemetry text-xs sm:text-sm text-primary font-bold">
                FG-Sensor-904 Connected
              </span>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <span className="font-code-telemetry text-xs text-on-surface-variant hidden sm:inline">
                Firmware v2.4.1 (Stable)
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-surface-container-low px-2.5 py-1 rounded-full border border-surface-container">
              <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">
                battery_charging_full
              </span>
              <span className="font-label-caps text-on-surface font-bold text-xs">98%</span>
            </div>
          </div>
        </section>

        {/* Hero Card: Portable Nano-Device Diagnostic Trigger */}
        <section className="relative overflow-hidden bg-white border border-surface-container rounded-3xl shadow-sm p-6 sm:p-8">
          {/* Ambient Instrument Glow */}
          <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col space-y-5 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 mb-2 border border-secondary-container">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
                  <span className="font-label-caps text-primary uppercase font-bold text-[10px] tracking-wider">
                    Optical Spectroscopy Ready
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold">
                  Test Food for Safety
                </h2>
                <p className="font-body-sm text-on-surface-variant mt-1 text-sm">
                  Rapid on-site screening • Molecular fluorescence &amp; photonic assay
                </p>
              </div>
            </div>

            {/* Stylized Vector Representation of FoodGuard Nano Handheld Device */}
            <div className="w-full bg-surface-container-low border border-surface-container rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {/* Stylized Hardware Chassis Icon */}
                <div className="relative w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center shadow-inner shrink-0">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
                    <rect fill="#00152a" height="36" rx="6" stroke="currentColor" width="28" x="10" y="6"></rect>
                    <circle cx="24" cy="18" fill="#003014" r="6" stroke="#46a162" strokeWidth="2.5"></circle>
                    <circle className="animate-pulse" cx="24" cy="18" fill="#9af7af" r="2"></circle>
                    <rect fill="#102a43" height="5" rx="1.5" stroke="#b0c9e8" width="16" x="16" y="30"></rect>
                    <line stroke="#a7c9f4" strokeLinecap="round" x1="20" x2="28" y1="32.5" y2="32.5"></line>
                  </svg>
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-primary-container"></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-base text-primary font-bold">Ready to Scan</span>
                  <span className="font-code-telemetry text-xs text-on-surface-variant">
                    Optical sensor aperture calibrated • Precision ±0.02 ppm
                  </span>
                  <span className="font-code-telemetry text-[11px] text-secondary mt-0.5">
                    Laser Diode λ=532nm • 120ms integration time
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-on-tertiary-container bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shrink-0">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span className="font-label-caps font-bold text-xs">CALIBRATED</span>
              </div>
            </div>

            {/* Primary Deep Navy CTA Button */}
            <Link
              href="/scan"
              className="w-full h-14 bg-primary hover:bg-primary-container active:scale-[0.99] transition-all rounded-2xl flex items-center justify-center space-x-2 text-white shadow-md group"
            >
              <span className="font-label-md text-base font-bold tracking-wide">Start New Molecular Assay</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

        {/* Testing Statistics Overview */}
        <section className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-bold">
              Your Testing Summary
            </h3>
            <span className="font-label-caps text-on-surface-variant uppercase text-xs font-semibold">
              Last 30 Days
            </span>
          </div>

          {/* Stats 3-Column Card Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Total Tests Card */}
            <div className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">Total Tests</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">science</span>
              </div>
              <div className="mt-3">
                <div className="font-metric-value text-3xl text-primary font-extrabold leading-none">142</div>
                <p className="font-code-telemetry text-xs text-on-surface-variant mt-1.5 flex items-center gap-1">
                  <span className="text-on-tertiary-container font-bold">↑ 12%</span> vs last month
                </p>
              </div>
            </div>

            {/* Safe Samples Card */}
            <div className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">Safe Samples</span>
                <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
              </div>
              <div className="mt-3">
                <div className="font-metric-value text-3xl text-primary font-extrabold leading-none">128</div>
                <p className="font-code-telemetry text-xs text-on-tertiary-container font-bold mt-1.5">
                  90.1% safe threshold
                </p>
              </div>
            </div>

            {/* Adulterated Card */}
            <div className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">Flagged Contaminants</span>
                <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
              </div>
              <div className="mt-3">
                <div className="font-metric-value text-3xl text-error font-extrabold leading-none">14</div>
                <p className="font-code-telemetry text-xs text-error font-bold mt-1.5">
                  9.9% critical alerts
                </p>
              </div>
            </div>
          </div>

          {/* Sparkline Bar Visualizer */}
          <div className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                Safety Compliance Distribution
              </span>
              <span className="font-code-telemetry text-xs sm:text-sm text-primary font-medium">
                128 Nominal Pass • 14 Adulterated / Intercepted
              </span>
            </div>
            {/* Ratio Bar */}
            <div className="w-full sm:w-48 h-3 bg-error-container rounded-full overflow-hidden flex border border-surface-container">
              <div className="h-full bg-on-tertiary-container transition-all" style={{ width: "90.1%" }}></div>
              <div className="h-full bg-error transition-all" style={{ width: "9.9%" }}></div>
            </div>
          </div>
        </section>

        {/* Quick Action 2x2 Grid */}
        <section className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-bold">
              Quick Actions
            </h3>
            <Link href="/history" className="font-label-caps text-secondary hover:text-primary font-bold text-xs uppercase">
              View All Logs
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* 1. Test History */}
            <Link
              href="/history"
              className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col items-start justify-between min-h-[110px] text-left hover:border-secondary hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">history</span>
              </div>
              <div className="mt-2">
                <div className="font-label-md text-sm text-primary font-bold">Test History</div>
                <div className="font-code-telemetry text-xs text-on-surface-variant">Audit certificates</div>
              </div>
            </Link>

            {/* 2. Inspection Reports */}
            <button
              onClick={() => setSelectedReport(INITIAL_TEST_RECORDS[0])}
              className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col items-start justify-between min-h-[110px] text-left hover:border-secondary hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">description</span>
              </div>
              <div className="mt-2">
                <div className="font-label-md text-sm text-primary font-bold">Reports</div>
                <div className="font-code-telemetry text-xs text-on-surface-variant">Exportable CoA</div>
              </div>
            </button>

            {/* 3. Food Safety Map */}
            <Link
              href="/analytics"
              className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col items-start justify-between min-h-[110px] text-left hover:border-secondary hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">map</span>
              </div>
              <div className="mt-2">
                <div className="font-label-md text-sm text-primary font-bold">Safety Map</div>
                <div className="font-code-telemetry text-xs text-on-surface-variant">Regional alerts</div>
              </div>
            </Link>

            {/* 4. Calibration & Sensors */}
            <Link
              href="/device"
              className="bg-white border border-surface-container p-4 rounded-2xl shadow-xs flex flex-col items-start justify-between min-h-[110px] text-left hover:border-secondary hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">tune</span>
              </div>
              <div className="mt-2">
                <div className="font-label-md text-sm text-primary font-bold">Calibration</div>
                <div className="font-code-telemetry text-xs text-on-surface-variant">Sensor tuning</div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Activity Card */}
        <section className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-lg sm:text-xl text-primary font-bold">
              Recent Verification
            </h3>
            <span className="font-label-caps text-on-surface-variant uppercase text-xs font-semibold">
              Live Feed
            </span>
          </div>

          <div className="bg-white border border-surface-container p-5 rounded-2xl shadow-xs flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[26px]">water_drop</span>
                </div>
                <div>
                  <h4 className="font-label-md text-base text-primary font-bold">
                    Fresh Raw Milk #TK-8492
                  </h4>
                  <p className="font-code-telemetry text-xs text-on-surface-variant">
                    Today, 10:42 AM • Batch 402-A • Silo North
                  </p>
                </div>
              </div>

              {/* Status Badge: SAFE with Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-label-caps text-emerald-800 font-bold text-xs">SAFE ✓</span>
              </div>
            </div>

            {/* Analyte Readout Metric Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-surface-container-low border border-surface-container p-3.5 rounded-xl">
              <div className="flex flex-col">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs">
                  Confidence Score
                </span>
                <span className="font-metric-value text-2xl text-primary font-bold leading-tight">
                  99.4%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs">
                  Synthetic Urea / Melamine
                </span>
                <span className="font-code-telemetry text-sm text-on-tertiary-container font-bold">
                  &lt; 0.001 ppm (Undetected)
                </span>
              </div>
            </div>

            {/* Footer with SHA Hash and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-surface-container">
              <div className="flex items-center gap-1.5 text-on-surface-variant font-code-telemetry text-xs">
                <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                <span>Audit Hash: 9a4e21...7df2</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedReport(latestTest)}
                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-colors"
                >
                  View Certificate
                </button>
                <Link
                  href="/results"
                  className="font-label-caps text-xs text-secondary hover:text-primary font-bold flex items-center gap-0.5 transition-colors"
                >
                  <span>FULL SPECTROGRAM</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Certified Report Modal */}
      <ReportModal
        record={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </ShellWrapper>
  );
}
