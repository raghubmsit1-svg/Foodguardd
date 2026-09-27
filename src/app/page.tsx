"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SplashWelcomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-between relative overflow-hidden">
      {/* Background Rotating Scientific Resonance Matrix */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-30 z-0">
        <svg 
          className="w-[700px] h-[700px] text-surface-container" 
          fill="none" 
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            className="animate-spin" 
            cx="200" 
            cy="200" 
            r="180" 
            stroke="currentColor" 
            strokeDasharray="4 6" 
            strokeWidth="1.5" 
            style={{ animationDuration: "90s", transformOrigin: "center" }}
          />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
          <circle 
            className="animate-spin" 
            cx="200" 
            cy="200" 
            r="90" 
            stroke="currentColor" 
            strokeDasharray="2 4" 
            strokeWidth="1.5" 
            style={{ animationDuration: "45s", animationDirection: "reverse", transformOrigin: "center" }}
          />
          <path d="M 200 10 L 200 390 M 10 200 L 390 200" stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Top Header Bar */}
      <div className="relative z-10 w-full pt-8 px-6 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white p-1 shadow-xs border border-surface-container flex items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} className="w-full h-full object-contain" />
          </div>
          <span className="font-headline-sm font-bold text-primary">FoodGuard</span>
        </div>

        {/* Live Telemetry Micro-Pill */}
        <div className="inline-flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-sm border border-surface-container shadow-xs px-3.5 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
          </span>
          <span className="font-code-telemetry text-xs text-on-surface-variant font-medium tracking-wider uppercase">
            Sensor Matrix v2.4 <span className="text-outline-variant">•</span> ML Diagnostics
          </span>
        </div>
      </div>

      {/* Hero Visual: Concentric Rings & Core Logo */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 text-center max-w-2xl mx-auto w-full">
        <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64 my-4">
          {/* Concentric Radiating Rings */}
          <div className="absolute inset-0 rounded-full bg-secondary-container/20 animate-ping" style={{ animationDuration: "3.8s" }} />
          <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-surface-container-high/40 animate-pulse" style={{ animationDuration: "2.6s" }} />
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center" />
          
          {/* Core Logo Graphic Presentation */}
          <div 
            className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white shadow-xl flex items-center justify-center p-4 transform transition-all duration-300 hover:scale-105 border border-surface-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image 
              src="/logo.svg" 
              alt="FoodGuard Brand Logo" 
              width={88} 
              height={88} 
              className={`w-full h-full object-contain transition-transform duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}
              priority
            />
          </div>

          {/* Floating Diagnostic Badge Accent */}
          <div className="absolute bottom-2 right-4 z-20 bg-white shadow-lg border border-surface-container px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-label-caps text-label-caps text-primary-container tracking-wider font-bold">
              CALIBRATED
            </span>
          </div>
        </div>

        {/* Title & Brand Statements */}
        <div className="mt-4 max-w-md">
          <h1 className="font-headline-xl text-3xl sm:text-4xl text-primary tracking-tight font-extrabold mb-2">
            FoodGuard
          </h1>
          <p className="font-body-lg text-lg text-secondary font-semibold tracking-normal mb-1">
            Safe Food. Healthier Tomorrow.
          </p>
          <p className="font-body-sm text-on-surface-variant font-normal">
            Portable Nano-Engineered Food Testing &amp; Spectroscopic Safety Intelligence
          </p>
        </div>

        {/* Value Proposition Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-lg my-6">
          <div className="flex items-center gap-1.5 bg-white border border-surface-container shadow-xs px-3.5 py-1.5 rounded-full">
            <span className="text-sm">⚡</span>
            <span className="font-label-md text-xs text-primary font-semibold">Rapid On-Site Screening</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-surface-container shadow-xs px-3.5 py-1.5 rounded-full">
            <span className="text-sm">🔬</span>
            <span className="font-label-md text-xs text-primary font-semibold">Nano-Biosensor Tech</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-surface-container shadow-xs px-3.5 py-1.5 rounded-full">
            <span className="text-sm">☁️</span>
            <span className="font-label-md text-xs text-primary font-semibold">Secure Audit Trail</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full max-w-xs flex flex-col items-center gap-3 pt-2">
          <Link
            href="/dashboard"
            className="w-full bg-primary hover:bg-primary-container active:scale-[0.98] text-white py-3.5 px-6 rounded-xl font-label-md text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all group"
          >
            <span>Enter Terminal Dashboard</span>
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>

          {/* Discreet Device Link Readiness */}
          <div className="flex items-center justify-center gap-2 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
            </span>
            <span className="font-body-sm text-xs text-on-surface-variant font-medium">
              Device Auto-Pairing Active (FG-Sensor-904)
            </span>
          </div>
        </div>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="relative z-10 w-full py-4 px-6 border-t border-surface-container bg-surface/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
          <p>© 2026 FoodGuard Diagnostics. ISO-17025 Compliant.</p>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hover:text-primary transition-colors font-medium">Dashboard</Link>
            <Link href="/scan" className="hover:text-primary transition-colors font-medium">Molecular Scan</Link>
            <Link href="/results" className="hover:text-primary transition-colors font-medium">ML Diagnostics</Link>
            <Link href="/history" className="hover:text-primary transition-colors font-medium">History Log</Link>
            <Link href="/analytics" className="hover:text-primary transition-colors font-medium">Analytics</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
