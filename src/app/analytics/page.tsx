"use client";

import React, { useState } from "react";
import ShellWrapper from "@/components/ShellWrapper";
import { REGIONAL_HOTSPOTS } from "@/data/mockData";

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "heatmap" | "trends">("overview");

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-3xl mx-auto space-y-5 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-caps text-on-surface-variant uppercase tracking-wider text-xs font-bold">
              Diagnostic Intelligence • Nanoscale Surveillance
            </span>
            <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
              Food Safety Analytics
            </h1>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container px-3 py-1 rounded-full border border-surface-container-high shadow-xs">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-caps text-on-surface font-bold text-xs">Live Telemetry</span>
          </div>
        </div>

        {/* Segmented Navigation Pills */}
        <div className="flex items-center p-1 bg-surface-container rounded-2xl border border-surface-container-high shadow-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-2.5 text-center rounded-xl font-label-md text-xs sm:text-sm font-bold transition-all ${
              activeTab === "overview"
                ? "bg-white text-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("heatmap")}
            className={`flex-1 py-2.5 text-center rounded-xl font-label-md text-xs sm:text-sm font-bold transition-all ${
              activeTab === "heatmap"
                ? "bg-white text-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Regional Heatmap
          </button>
          <button
            onClick={() => setActiveTab("trends")}
            className={`flex-1 py-2.5 text-center rounded-xl font-label-md text-xs sm:text-sm font-bold transition-all ${
              activeTab === "trends"
                ? "bg-white text-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Adulterant Trends
          </button>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* 2x2 Key Metric Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Total Screened */}
              <div className="bg-white border border-surface-container p-4 sm:p-5 rounded-3xl shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                    Total Screened
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-secondary">biotech</span>
                </div>
                <div>
                  <div className="font-metric-value text-2xl sm:text-3xl text-primary font-black tracking-tight">
                    1,420
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-on-tertiary-container font-semibold text-xs">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    <span>+12% this month</span>
                  </div>
                </div>
              </div>

              {/* Safety Compliance */}
              <div className="bg-white border border-surface-container p-4 sm:p-5 rounded-3xl shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                    Compliance Rate
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">
                    verified
                  </span>
                </div>
                <div>
                  <div className="font-metric-value text-2xl sm:text-3xl text-primary font-black tracking-tight">
                    91.4%
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                    <span>Optimal safety tier</span>
                  </div>
                </div>
              </div>

              {/* Contaminant Interceptions */}
              <div className="bg-white border border-surface-container p-4 sm:p-5 rounded-3xl shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                    Intercepted
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-error">gpp_maybe</span>
                </div>
                <div>
                  <div className="font-metric-value text-2xl sm:text-3xl text-error font-black tracking-tight">
                    122
                  </div>
                  <div className="font-label-caps text-on-surface-variant mt-1 text-xs">
                    Samples neutralized
                  </div>
                </div>
              </div>

              {/* Average Scan Latency */}
              <div className="bg-white border border-surface-container p-4 sm:p-5 rounded-3xl shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-on-surface-variant uppercase text-xs font-bold">
                    Scan Latency
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-secondary">speed</span>
                </div>
                <div>
                  <div className="font-metric-value text-2xl sm:text-3xl text-primary font-black tracking-tight">
                    18.4<span className="font-label-caps text-on-surface-variant ml-1 font-normal text-xs">SEC</span>
                  </div>
                  <div className="font-label-caps text-on-surface-variant mt-1 text-xs">
                    Edge Nano-sensor sync
                  </div>
                </div>
              </div>
            </div>

            {/* Detection Frequency Breakdown Card */}
            <div className="bg-white border border-surface-container p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-lg text-primary font-bold">
                    Detection Breakdown
                  </h3>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    Classified molecular adulterant signatures across all depots
                  </span>
                </div>
                <span className="material-symbols-outlined text-[22px] text-on-surface-variant">
                  pie_chart
                </span>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {/* Starch */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-primary">Starch &amp; Carb Bulking</span>
                    <span className="text-primary font-bold">42% (51 cases)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                {/* Synthetic Urea */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-primary">Synthetic Urea Additive</span>
                    <span className="text-secondary font-bold">28% (34 cases)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>

                {/* Detergent */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-primary">Detergent / Emulsifier</span>
                    <span className="text-error font-bold">18% (22 cases)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-error rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>

                {/* Formalin */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-primary">Formalin Preservative</span>
                    <span className="text-on-surface-variant font-bold">12% (15 cases)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-outline rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "heatmap" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="bg-white border border-surface-container p-5 rounded-3xl shadow-xs">
              <h3 className="font-headline-sm text-lg text-primary font-bold">
                Regional Collection Hotspots
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                Surveillance radar monitoring milk and honey intake hubs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REGIONAL_HOTSPOTS.map((hotspot) => {
                const isWarning = hotspot.status === "warning";
                const isDanger = hotspot.status === "danger";
                return (
                  <div
                    key={hotspot.name}
                    className="bg-white border border-surface-container p-4 rounded-3xl shadow-xs flex flex-col justify-between gap-3 hover:border-secondary transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-label-md text-sm font-bold text-primary">{hotspot.name}</h4>
                        <p className="font-code-telemetry text-xs text-outline mt-0.5">
                          {hotspot.coordinates}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          isDanger
                            ? "bg-red-100 text-red-800"
                            : isWarning
                            ? "bg-amber-100 text-amber-900"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {hotspot.status}
                      </span>
                    </div>

                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <span className="text-on-surface-variant block">Screened Samples</span>
                        <span className="font-bold text-primary text-sm">{hotspot.samples}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-on-surface-variant block">Safety Rate</span>
                        <span className="font-bold text-emerald-700 text-sm">{hotspot.safeRate}%</span>
                      </div>
                    </div>

                    <div className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-outline">info</span>
                      <span>Flagged Issue: <strong className="text-primary">{hotspot.alerts}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "trends" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="bg-white border border-surface-container p-5 sm:p-6 rounded-3xl shadow-xs">
              <h3 className="font-headline-sm text-lg text-primary font-bold">
                Adulteration Seasonality &amp; Model Accuracy
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                Monthly validation against ISO-17025 accredited chromatography
              </p>

              {/* Monthly Trend Visualizer Bar Chart */}
              <div className="mt-6 flex items-end justify-between h-44 gap-2 pt-6 border-b border-surface-container">
                {[
                  { month: "Mar", total: 110, safe: 98, rate: 89.1 },
                  { month: "Apr", total: 135, safe: 122, rate: 90.3 },
                  { month: "May", total: 140, safe: 125, rate: 89.2 },
                  { month: "Jun", total: 165, safe: 151, rate: 91.5 },
                  { month: "Jul", total: 180, safe: 167, rate: 92.7 },
                  { month: "Aug", total: 195, safe: 182, rate: 93.3 },
                ].map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-1.5 group">
                    <div className="w-full max-w-[36px] bg-surface-container-high rounded-t-lg relative flex flex-col justify-end overflow-hidden h-36">
                      <div
                        className="w-full bg-primary group-hover:bg-secondary transition-all rounded-t-md"
                        style={{ height: `${(item.safe / 200) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] font-bold text-on-surface-variant">{item.month}</span>
                    <span className="text-[10px] text-emerald-700 font-bold -mt-1">{item.rate}%</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-on-surface-variant pt-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-primary"></span>
                  <span>Safe Verification Rate</span>
                </span>
                <span className="font-code-telemetry font-bold text-primary">ResNet Model Precision: 98.6%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ShellWrapper>
  );
}
