"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";

interface ShellWrapperProps {
  children: React.ReactNode;
}

export default function ShellWrapper({ children }: ShellWrapperProps) {
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navigation
        isMobileFrame={isMobileFrame}
        onToggleFrame={() => setIsMobileFrame(!isMobileFrame)}
      />

      <main className="flex-1 w-full pb-20 md:pb-8 flex justify-center">
        {isMobileFrame ? (
          <div className="py-6 px-4 flex justify-center w-full">
            {/* Handheld Device Chassis Simulation */}
            <div className="w-full max-w-[420px] bg-slate-900 p-3 rounded-[48px] shadow-2xl border-[6px] border-slate-800 relative transition-all">
              {/* Dynamic Island / Speaker Pill */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></span>
              </div>

              {/* Inner Screen Surface */}
              <div className="bg-surface rounded-[38px] overflow-hidden min-h-[780px] pt-7 relative border border-slate-300/40">
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        )}
      </main>
    </div>
  );
}
