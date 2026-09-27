"use client";

import React, { useState } from "react";
import ShellWrapper from "@/components/ShellWrapper";

export default function DeviceProfilePage() {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibProgress, setCalibProgress] = useState(0);
  const [calibMessage, setCalibMessage] = useState<string | null>(null);
  const [integrationTime, setIntegrationTime] = useState(120);

  const startCalibration = () => {
    setIsCalibrating(true);
    setCalibProgress(0);
    setCalibMessage("Zeroing dark baseline noise...");

    const steps = [
      { p: 25, msg: "Aligning 532nm laser excitation diode..." },
      { p: 60, msg: "Scanning optical aperture cleanliness (99.8%)..." },
      { p: 85, msg: "Verifying diffraction grating alignment..." },
      { p: 100, msg: "Calibration complete! Sensor tuned to ±0.01 nm tolerance." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setCalibProgress(step.p);
        setCalibMessage(step.msg);
        if (step.p === 100) {
          setIsCalibrating(false);
        }
      }, (index + 1) * 700);
    });
  };

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-5 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-caps text-on-surface-variant uppercase tracking-wider text-xs font-bold">
              Hardware Management • Sensor Calibration
            </span>
            <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
              Device &amp; Sensor Profile
            </h1>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="font-label-caps text-emerald-800 font-bold text-xs">ONLINE</span>
          </div>
        </div>

        {/* Hardware Status Card */}
        <div className="bg-white border border-surface-container rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[26px]">tune</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-primary">
                  FoodGuard FG-Sensor-904
                </h3>
                <p className="font-code-telemetry text-xs text-outline">
                  S/N: FG-904-B402-NANO • Firmware v2.4.1
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="font-metric-value text-xl font-bold text-primary">98%</span>
              <span className="text-[10px] text-on-tertiary-container font-bold block">Charging</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
            <div className="p-3 bg-surface-container-low rounded-2xl border border-surface-container">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant block">Laser λ</span>
              <span className="font-code-telemetry text-sm font-bold text-primary">532.04 nm</span>
            </div>
            <div className="p-3 bg-surface-container-low rounded-2xl border border-surface-container">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant block">Sensor Temp</span>
              <span className="font-code-telemetry text-sm font-bold text-primary">22.4 °C</span>
            </div>
            <div className="p-3 bg-surface-container-low rounded-2xl border border-surface-container">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant block">Cleanliness</span>
              <span className="font-code-telemetry text-sm font-bold text-emerald-700">99.8%</span>
            </div>
            <div className="p-3 bg-surface-container-low rounded-2xl border border-surface-container">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant block">Noise Floor</span>
              <span className="font-code-telemetry text-sm font-bold text-primary">-42.8 dB</span>
            </div>
          </div>
        </div>

        {/* Optical Sensor Tuning & Calibration Routine */}
        <div className="bg-white border border-surface-container rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline-sm text-base sm:text-lg font-bold text-primary">
                Optical Auto-Calibration
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Recalibrates laser baseline against certified distilled blank standard
              </p>
            </div>
            <span className="material-symbols-outlined text-[22px] text-secondary">flare</span>
          </div>

          {/* Integration Time Slider */}
          <div className="space-y-2 p-4 bg-surface-container-low rounded-2xl border border-surface-container">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-primary">Spectrometer Integration Time</span>
              <span className="font-code-telemetry font-bold text-secondary">{integrationTime} ms</span>
            </div>
            <input
              type="range"
              min="50"
              max="250"
              step="10"
              value={integrationTime}
              onChange={(e) => setIntegrationTime(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-outline font-code-telemetry">
              <span>50 ms (Fast Sweep)</span>
              <span>120 ms (Calibrated)</span>
              <span>250 ms (Deep Assay)</span>
            </div>
          </div>

          {/* Calibration Progress Bar */}
          {isCalibrating && (
            <div className="p-4 bg-surface-container-low rounded-2xl border border-surface-container space-y-2 animate-in fade-in">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-primary">{calibMessage}</span>
                <span className="font-code-telemetry text-secondary">{calibProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${calibProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {calibMessage && !isCalibrating && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
              <span>{calibMessage}</span>
            </div>
          )}

          <button
            onClick={startCalibration}
            disabled={isCalibrating}
            className="w-full h-12 bg-primary hover:bg-primary-container disabled:opacity-50 text-white rounded-2xl font-label-md text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isCalibrating ? "sync" : "build"}
            </span>
            <span>{isCalibrating ? "Running Calibration Sequence..." : "Run Optical Auto-Calibration"}</span>
          </button>
        </div>

        {/* Operator Profile Card */}
        <div className="bg-white border border-surface-container rounded-3xl p-5 sm:p-6 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
            EV
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-headline-sm text-base font-bold text-primary">Dr. Eliza Vance</h4>
            <p className="font-body-sm text-xs text-on-surface-variant truncate">
              Senior Nano-Diagnostic Inspector • Lead ID #FG-8802
            </p>
            <p className="font-code-telemetry text-[11px] text-secondary mt-0.5">
              Accredited Laboratory: National Center for Food Safety (ISO-17025)
            </p>
          </div>
        </div>
      </div>
    </ShellWrapper>
  );
}
