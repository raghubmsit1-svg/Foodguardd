"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShellWrapper from "@/components/ShellWrapper";

export default function MolecularScanPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(68);
  const [isRunning, setIsRunning] = useState(true);
  const [fluxVal, setFluxVal] = useState(482.4);
  const [matrixPhase, setMatrixPhase] = useState("Photonic Phase");
  const [sampleType, setSampleType] = useState<"milk_adulterated" | "milk_safe">("milk_adulterated");

  // Dynamic telemetry ticker simulation
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsRunning(false);
          return 100;
        }
        const next = prev + 1;
        if (next < 30) setMatrixPhase("Baseline Optical Null");
        else if (next < 75) setMatrixPhase("Photonic Absorption Phase");
        else if (next < 95) setMatrixPhase("ResNet Feature Extraction");
        else setMatrixPhase("Finalizing Audit Hash");
        return next;
      });

      setFluxVal(475 + Math.random() * 15);
    }, 400);

    return () => clearInterval(interval);
  }, [isRunning]);

  // SVG circular arc calculations
  const radius = 102;
  const circumference = 2 * Math.PI * radius; // ~640.88
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-5 pb-12">
        {/* Stepper Breadcrumb Header */}
        <div className="bg-white border border-surface-container rounded-2xl p-3 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            {/* Step 1: Prepare */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps text-on-surface-variant uppercase text-[10px] truncate">Step 1</span>
                <span className="font-label-md text-xs text-primary font-bold truncate">Prepare Sample</span>
              </div>
            </div>

            {/* Connector 1-2 */}
            <div className="w-6 h-0.5 bg-primary/20 rounded-full shrink-0"></div>

            {/* Step 2: Testing (Active) */}
            <div className="flex items-center gap-2 flex-1 min-w-0 bg-surface-container-low border border-surface-container rounded-xl py-1.5 px-2.5 shadow-xs">
              <div className="relative w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <span className="font-label-caps font-bold text-xs">2</span>
                <span className="absolute -inset-1 rounded-full bg-secondary-container/60 animate-ping opacity-75"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps text-secondary font-bold uppercase text-[10px] truncate">Step 2</span>
                <span className="font-label-md text-xs text-primary font-extrabold truncate">Testing Assay</span>
              </div>
            </div>

            {/* Connector 2-3 */}
            <div className="w-6 h-0.5 bg-surface-container-highest rounded-full shrink-0"></div>

            {/* Step 3: ML Result */}
            <div className="flex items-center gap-2 flex-1 min-w-0 opacity-60">
              <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                <span className="font-label-caps font-bold text-xs">3</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps text-on-surface-variant uppercase text-[10px] truncate">Step 3</span>
                <span className="font-label-md text-xs text-on-surface-variant font-medium truncate">ML Diagnostic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Heading */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary text-xs font-label-caps uppercase tracking-wider mb-2 border border-surface-container-high">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Real-Time Molecular Assay
          </div>
          <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
            Testing in Progress
          </h1>
          <p className="font-body-sm text-sm text-on-surface-variant mt-1 max-w-sm mx-auto">
            Please wait while the FG-Sensor-904 optical nano-matrix illuminates and scans the specimen.
          </p>
        </div>

        {/* Central Diagnostic Radar & Progress Visualizer */}
        <div className="bg-white border border-surface-container rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col items-center">
          {/* Ambient Sensor Glow Background */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none"></div>

          {/* Optical Nano-Matrix Badge */}
          <div className="z-10 mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container text-primary text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span>
            <span>Optical Nano-Matrix Active</span>
            <span className="text-on-surface-variant font-code-telemetry">λ = 532 nm</span>
          </div>

          {/* Concentric Scanning Ring Area */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center my-2">
            {/* Outermost Pulsing Track */}
            <div className="absolute inset-0 rounded-full bg-surface-container-low/50 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-surface-container/30"></div>

            {/* Static Circular Grid & Progress Arc */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none transform -rotate-90" viewBox="0 0 256 256">
              {/* Background Track */}
              <circle
                cx="128"
                cy="128"
                r={radius}
                fill="none"
                stroke="#e2efff"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Dynamic Animated Progress Arc */}
              <circle
                cx="128"
                cy="128"
                r={radius}
                fill="none"
                stroke="#102a43"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
              {/* Inner Hairline Reticle */}
              <circle cx="128" cy="128" r="80" fill="none" stroke="#d2e5f9" strokeDasharray="4 4" strokeWidth="1.5" />
              <circle cx="128" cy="128" r="48" fill="none" opacity="0.6" stroke="#b2d4ff" strokeWidth="1" />
            </svg>

            {/* Dynamic Rotating Sweeper / Laser Beam */}
            {isRunning && (
              <div className="absolute inset-8 rounded-full pointer-events-none flex items-center justify-center animate-radar">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-primary opacity-80"></div>
              </div>
            )}

            {/* Center Readout Cluster */}
            <div className="z-10 flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="font-metric-value text-4xl sm:text-5xl text-primary font-black tracking-tight">
                  {progress}
                </span>
                <span className="font-headline-sm text-lg text-secondary font-bold">%</span>
              </div>
              <span className="font-label-caps text-on-surface-variant font-bold uppercase tracking-wider text-[11px] mt-0.5">
                {matrixPhase}
              </span>

              {/* Dynamic Telemetry Ticker */}
              <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container text-primary font-code-telemetry text-xs">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container animate-spin">
                  sync
                </span>
                <span>Flux {fluxVal.toFixed(1)} nW</span>
              </div>
            </div>
          </div>

          {/* Real-Time Molecular Spectrogram Waveform Card */}
          <div className="w-full mt-4 bg-surface-container-low border border-surface-container rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                <span className="font-label-caps text-xs font-bold uppercase">
                  Absorption Spectrum (400–780 nm)
                </span>
              </div>
              <span className="font-code-telemetry text-xs text-secondary font-semibold">
                ΔE 0.042 RMS
              </span>
            </div>

            {/* Live Dynamic SVG Waveform */}
            <div className="w-full h-20 relative overflow-hidden rounded-xl bg-white border border-surface-container p-2 flex items-center">
              <svg className="w-full h-full" viewBox="0 0 400 80" fill="none" preserveAspectRatio="none">
                {/* Horizontal Baseline Guideline */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="#e2efff" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="30" x2="400" y2="30" stroke="#e2efff" strokeWidth="1" strokeDasharray="3 3" />

                {/* Animated Spectrum Wave */}
                <path
                  d={`M0,60 Q50,${sampleType === 'milk_adulterated' ? '55' : '58'} 100,50 T200,${sampleType === 'milk_adulterated' ? '18' : '45'} T300,${sampleType === 'milk_adulterated' ? '52' : '48'} T400,60 L400,80 L0,80 Z`}
                  fill={sampleType === 'milk_adulterated' ? '#ffdad6' : '#e8f5e9'}
                  opacity="0.4"
                />
                <path
                  d={`M0,60 Q50,${sampleType === 'milk_adulterated' ? '55' : '58'} 100,50 T200,${sampleType === 'milk_adulterated' ? '18' : '45'} T300,${sampleType === 'milk_adulterated' ? '52' : '48'} T400,60`}
                  stroke={sampleType === 'milk_adulterated' ? '#ba1a1a' : '#2d8a4e'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex justify-between font-code-telemetry text-[10px] text-outline mt-1 px-1">
              <span>380 nm (UV-Edge)</span>
              <span className="text-secondary font-bold">532 nm (Laser Excitation)</span>
              <span>780 nm (NIR)</span>
            </div>
          </div>

          {/* Real-time Hardware Telemetry Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4 text-center">
            <div className="bg-surface-container-low p-2 rounded-xl border border-surface-container">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Laser Temp</span>
              <span className="font-code-telemetry text-xs font-bold text-primary">22.4 °C</span>
            </div>
            <div className="bg-surface-container-low p-2 rounded-xl border border-surface-container">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Integration</span>
              <span className="font-code-telemetry text-xs font-bold text-primary">120 ms</span>
            </div>
            <div className="bg-surface-container-low p-2 rounded-xl border border-surface-container">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Signal / Noise</span>
              <span className="font-code-telemetry text-xs font-bold text-emerald-700">42.8 dB</span>
            </div>
            <div className="bg-surface-container-low p-2 rounded-xl border border-surface-container">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant block">Dark Drift</span>
              <span className="font-code-telemetry text-xs font-bold text-primary">±0.002%</span>
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-surface-container">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isRunning ? "pause" : "play_arrow"}
                </span>
                <span>{isRunning ? "Pause" : "Resume"}</span>
              </button>

              <button
                onClick={() => setProgress(100)}
                className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-xs font-bold transition-all"
              >
                Fast-Forward 100%
              </button>
            </div>

            <button
              onClick={() => router.push(`/results?sample=${sampleType}`)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-white font-label-md text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{progress >= 100 ? "View ML Diagnostics" : "Inspect Live Results"}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </ShellWrapper>
  );
}
