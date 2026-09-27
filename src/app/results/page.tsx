"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShellWrapper from "@/components/ShellWrapper";
import ReportModal from "@/components/ReportModal";
import { INITIAL_TEST_RECORDS, TestRecord } from "@/data/mockData";

export default function TestResultsPage() {
  const [activeState, setActiveState] = useState<"adulterated" | "safe">("adulterated");
  const [selectedReport, setSelectedReport] = useState<TestRecord | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const adulteratedRecord = INITIAL_TEST_RECORDS[0];
  const safeRecord = INITIAL_TEST_RECORDS[1];

  const currentRecord = activeState === "adulterated" ? adulteratedRecord : safeRecord;
  const isAdulterated = activeState === "adulterated";

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(currentRecord.hash);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-5 pb-12">
        {/* Interactive Comparison Segmented Switch */}
        <div className="p-1 rounded-2xl bg-surface-container border border-surface-container-high flex items-center justify-between shadow-xs">
          <button
            onClick={() => setActiveState("adulterated")}
            className={`flex-1 py-2.5 px-3 rounded-xl text-center font-label-md text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              isAdulterated
                ? "bg-white text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
            <span>Adulteration Found</span>
          </button>

          <button
            onClick={() => setActiveState("safe")}
            className={`flex-1 py-2.5 px-3 rounded-xl text-center font-label-md text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              !isAdulterated
                ? "bg-white text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
            <span>Safe Benchmark</span>
          </button>
        </div>

        {/* Active State Alert Header & Finding Banner */}
        <div className="rounded-3xl overflow-hidden shadow-sm bg-white border border-surface-container transition-all duration-300">
          {/* Status Top Pill Ribbon */}
          <div
            className={`px-5 py-3 flex items-center justify-between transition-colors ${
              isAdulterated
                ? "bg-error-container text-on-error-container"
                : "bg-emerald-100 text-emerald-900"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`material-symbols-outlined text-[22px] ${
                  isAdulterated ? "text-error" : "text-emerald-700"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {isAdulterated ? "warning" : "verified"}
              </span>
              <span
                className={`font-label-caps text-xs sm:text-sm tracking-widest font-extrabold uppercase ${
                  isAdulterated ? "text-error" : "text-emerald-800"
                }`}
              >
                {isAdulterated ? "ADULTERATION DETECTED" : "SAFE BENCHMARK VERIFIED"}
              </span>
            </div>
            <span className="font-code-telemetry text-xs px-2.5 py-0.5 rounded-full bg-white/90 font-bold shadow-xs">
              {isAdulterated ? "Critical Alert" : "ISO Compliant"}
            </span>
          </div>

          {/* Main Finding Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <span className="font-label-caps text-on-surface-variant uppercase tracking-wider text-xs block mb-1 font-bold">
                Primary Finding &amp; Classification
              </span>
              <h2 className="font-headline-sm text-lg sm:text-xl text-primary font-bold">
                {isAdulterated
                  ? "Target Adulterant: Starch Detected (Amylase Complex)"
                  : "Target Matrix: Unadulterated Pure Raw Milk (Pristine)"}
              </h2>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                {isAdulterated
                  ? "Bio-luminescent marker displacement indicates synthetic thickening additive exceeding permissible food safety standards."
                  : "Zero synthetic thickening agent or urea displacement detected. Clean baseline optical transmission."}
              </p>
            </div>

            {/* Telemetry Split Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                  Estimated Concentration
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-metric-value text-2xl sm:text-3xl text-primary font-black">
                    {isAdulterated ? "0.45" : "< 0.001"}
                  </span>
                  <span className="font-label-caps text-on-surface-variant font-semibold text-xs">g/L</span>
                </div>
                <span
                  className={`font-code-telemetry text-xs mt-1.5 flex items-center gap-1 font-bold ${
                    isAdulterated ? "text-error" : "text-on-tertiary-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {isAdulterated ? "arrow_upward" : "check"}
                  </span>
                  {isAdulterated ? ">0.10 g/L Limit Exceeded" : "Within Nominal Range"}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                  ML Model Fit Score
                </span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-metric-value text-2xl sm:text-3xl text-primary font-black">
                    {isAdulterated ? "94.8" : "99.4"}
                  </span>
                  <span className="font-label-caps text-on-surface-variant font-semibold text-xs">%</span>
                </div>
                <span className="font-code-telemetry text-xs text-on-surface-variant mt-1.5 truncate">
                  ResNet Spectro v3.2
                </span>
              </div>
            </div>

            {/* Inline Spectrogram Chart Card */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary">ssid_chart</span>
                  <span className="font-label-caps text-on-surface-variant font-bold tracking-wider text-xs">
                    Absorption Spectrum Curve
                  </span>
                </div>
                <span
                  className={`font-code-telemetry text-xs font-bold ${
                    isAdulterated ? "text-error" : "text-on-tertiary-container"
                  }`}
                >
                  {isAdulterated ? "Peak @ 482nm (Toxin Band)" : "Nominal Flat Curve @ 532nm"}
                </span>
              </div>

              {/* Dynamic SVG Waveform */}
              <div className="w-full h-20 relative overflow-hidden rounded-xl bg-white border border-surface-container p-2">
                <svg className="w-full h-full" viewBox="0 0 300 64" fill="none" preserveAspectRatio="none">
                  <line x1="0" y1="36" x2="300" y2="36" stroke="#c3c6ce" strokeWidth="1" strokeDasharray="3 3" />
                  <path
                    d={
                      isAdulterated
                        ? "M0,52 Q40,50 80,48 T150,14 T210,48 T300,50 L300,64 L0,64 Z"
                        : "M0,45 Q60,44 120,43 T200,42 T300,44 L300,64 L0,64 Z"
                    }
                    fill={isAdulterated ? "#ffdad6" : "#e8f5e9"}
                    opacity="0.5"
                  />
                  <path
                    d={
                      isAdulterated
                        ? "M0,52 Q40,50 80,48 T150,14 T210,48 T300,50"
                        : "M0,45 Q60,44 120,43 T200,42 T300,44"
                    }
                    stroke={isAdulterated ? "#ba1a1a" : "#2d8a4e"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between font-code-telemetry text-[10px] text-outline px-1">
                <span>350 nm</span>
                <span className="font-bold text-primary">
                  {isAdulterated ? "480 nm (Toxin Band)" : "532 nm (Laser Reference)"}
                </span>
                <span>650 nm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Specimen & Verification Context Visual */}
        <div className="rounded-3xl bg-white border border-surface-container overflow-hidden shadow-sm">
          <div className="relative w-full h-40 bg-gradient-to-r from-primary via-primary-container to-secondary flex items-end p-5">
            <div className="relative z-10 flex items-center justify-between w-full text-white">
              <div>
                <span className="font-label-caps text-secondary-fixed text-xs font-bold uppercase tracking-wider block">
                  Analyzed Specimen Matrix
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-white">
                  Raw Cow Milk ({currentRecord.batch})
                </h3>
                <p className="font-code-telemetry text-xs text-white/80 mt-0.5">
                  Collection Facility: {currentRecord.location}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-code-telemetry text-xs text-white font-bold border border-white/30">
                {currentRecord.lotNumber}
              </span>
            </div>
          </div>

          {/* Chain of Custody Attributes */}
          <div className="p-5 divide-y divide-surface-container text-xs">
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-on-surface-variant font-medium">Authorized Inspector</span>
              <span className="font-bold text-primary font-code-telemetry">{currentRecord.operator}</span>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-on-surface-variant font-medium">Spectrometer Calibration ID</span>
              <span className="font-bold text-primary font-code-telemetry">FG-Sensor-904 (λ=532nm)</span>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-on-surface-variant font-medium">Cryptographic Ledger Hash</span>
              <div className="flex items-center gap-1.5">
                <span className="font-code-telemetry font-bold text-primary truncate max-w-[180px]">
                  {currentRecord.hash}
                </span>
                <button
                  onClick={handleCopyHash}
                  className="p-1 rounded hover:bg-surface-container text-secondary transition-colors"
                  title="Copy SHA-256 Hash"
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {isCopied ? "check" : "content_copy"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={() => setSelectedReport(currentRecord)}
            className="w-full sm:flex-1 h-13 bg-primary hover:bg-primary-container text-white rounded-2xl font-label-md text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Download Certified Audit CoA</span>
          </button>

          <Link
            href="/scan"
            className="w-full sm:w-auto px-5 h-13 bg-white hover:bg-surface-container border border-surface-container text-primary rounded-2xl font-label-md text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            <span>Re-scan Specimen</span>
          </Link>
        </div>
      </div>

      {/* Official Certificate Report Modal */}
      <ReportModal
        record={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </ShellWrapper>
  );
}
