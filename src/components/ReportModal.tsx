"use client";

import React from "react";
import Image from "next/image";
import { TestRecord } from "@/data/mockData";

interface ReportModalProps {
  record: TestRecord | null;
  onClose: () => void;
}

export default function ReportModal({ record, onClose }: ReportModalProps) {
  if (!record) return null;

  const isSafe = record.status === "safe";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-surface-container flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Header */}
        <div className="p-6 border-b border-surface-container-high bg-surface-container-low/50 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-outline hover:text-primary transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white p-2 rounded-xl shadow-sm border border-surface-container-high flex items-center justify-center">
              <Image src="/logo.svg" alt="FoodGuard Logo" width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-primary font-bold">FoodGuard Certified Audit</span>
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  ISO-17025
                </span>
              </div>
              <p className="text-xs text-on-surface-variant font-code-telemetry">
                Nanoscale Spectroscopy Assay Certificate • ID #{record.id}
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-6 space-y-5">
          {/* Status Verdict Banner */}
          <div className={`p-4 rounded-xl flex items-center justify-between border ${
            isSafe 
              ? "bg-emerald-50 border-emerald-200 text-emerald-900" 
              : "bg-red-50 border-red-200 text-red-900"
          }`}>
            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-[28px] ${isSafe ? "text-emerald-600" : "text-red-600"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {isSafe ? "verified" : "warning"}
              </span>
              <div>
                <p className="font-label-caps uppercase tracking-wider font-bold text-xs">
                  {isSafe ? "COMPLIANCE VERDICT: PASS" : "COMPLIANCE VERDICT: ADULTERATED"}
                </p>
                <p className="font-semibold text-sm">
                  {record.finding}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold block">{record.confidence}%</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Confidence</span>
            </div>
          </div>

          {/* Specimen Metadata Grid */}
          <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-4">
            <h4 className="font-label-caps text-on-surface-variant uppercase tracking-wider text-xs mb-3 font-bold">
              Specimen & Chain of Custody
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-on-surface-variant block">Sample Matrix</span>
                <span className="font-semibold text-primary">{record.name}</span>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant block">Batch / Lot</span>
                <span className="font-semibold text-primary">{record.batch} ({record.lotNumber})</span>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant block">Collection Location</span>
                <span className="font-semibold text-primary">{record.location}</span>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant block">Assay Timestamp</span>
                <span className="font-semibold text-primary">{record.date} at {record.time}</span>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant block">Authorized Operator</span>
                <span className="font-semibold text-primary">{record.operator}</span>
              </div>
              <div>
                <span className="text-xs text-on-surface-variant block">Spectrometer Sensor</span>
                <span className="font-semibold text-primary">FG-Sensor-904 (λ=532nm)</span>
              </div>
            </div>
          </div>

          {/* Quantitative Analysis Details */}
          {!isSafe && (
            <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
              <h4 className="font-label-caps text-red-800 uppercase tracking-wider text-xs mb-2 font-bold">
                Contaminant Quantification
              </h4>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-red-950">Detected Compound:</span>
                  <p className="font-bold text-red-700">{record.adulterant || "Synthetic Additive"}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium text-red-950">Measured Conc:</span>
                  <p className="font-bold text-red-700">{record.concentration}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium text-red-950">MRL Threshold:</span>
                  <p className="font-semibold text-red-600">{record.threshold || "< 0.05 g/L"}</p>
                </div>
              </div>
            </div>
          )}

          {/* Cryptographic Ledger Verification */}
          <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-secondary">fingerprint</span>
              <div>
                <p className="text-[11px] font-bold text-primary">SHA-256 Ledger Hash</p>
                <p className="font-code-telemetry text-xs text-on-surface-variant">{record.hash}</p>
              </div>
            </div>
            <div className="w-10 h-10 border border-slate-300 rounded bg-white p-1 flex items-center justify-center">
              {/* Stylized Micro QR Code */}
              <div className="w-full h-full bg-slate-900 rounded-[2px] opacity-80 grid grid-cols-3 gap-0.5 p-0.5">
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-transparent"></div>
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-transparent"></div>
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-transparent"></div>
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-transparent"></div>
                <div className="bg-white rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-surface-container bg-surface-container-lowest flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-label-md text-sm text-secondary hover:text-primary transition-colors"
          >
            Close
          </button>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-white font-label-md text-sm flex items-center gap-2 shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Print Official CoA</span>
          </button>
        </div>
      </div>
    </div>
  );
}
