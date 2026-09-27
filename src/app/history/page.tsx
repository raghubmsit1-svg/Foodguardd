"use client";

import React, { useState, useMemo } from "react";
import ShellWrapper from "@/components/ShellWrapper";
import ReportModal from "@/components/ReportModal";
import { INITIAL_TEST_RECORDS, TestRecord } from "@/data/mockData";

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "safe" | "adulterated" | "milk" | "honey">("all");
  const [selectedReport, setSelectedReport] = useState<TestRecord | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Filter records based on search query and active category filter
  const filteredRecords = useMemo(() => {
    return INITIAL_TEST_RECORDS.filter((rec) => {
      // Category filter
      if (selectedFilter === "safe" && rec.status !== "safe") return false;
      if (selectedFilter === "adulterated" && rec.status !== "adulterated") return false;
      if (selectedFilter === "milk" && rec.category !== "milk") return false;
      if (selectedFilter === "honey" && rec.category !== "honey") return false;

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const match =
          rec.id.toLowerCase().includes(query) ||
          rec.name.toLowerCase().includes(query) ||
          rec.batch.toLowerCase().includes(query) ||
          rec.location.toLowerCase().includes(query) ||
          (rec.adulterant && rec.adulterant.toLowerCase().includes(query)) ||
          rec.finding.toLowerCase().includes(query);
        if (!match) return false;
      }

      return true;
    });
  }, [searchQuery, selectedFilter]);

  const handleShare = (rec: TestRecord) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`FoodGuard Certified Assay #${rec.id}: ${rec.name} (${rec.status.toUpperCase()}) - Hash: ${rec.hash}`);
      showToast(`Audit link copied for #${rec.id}`);
    }
  };

  const handleExportAll = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredRecords, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `foodguard-audit-export-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Audit records exported as JSON");
  };

  return (
    <ShellWrapper>
      <div className="flex flex-col w-full max-w-3xl mx-auto space-y-5 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-2xl bg-surface-container border border-surface-container-high text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </span>
            <div>
              <h1 className="font-headline-xl text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                Test History &amp; Records
              </h1>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Cloud-synchronized audit trail for verified food tests
              </p>
            </div>
          </div>

          <button
            onClick={handleExportAll}
            className="w-10 h-10 rounded-2xl bg-white border border-surface-container flex items-center justify-center text-primary hover:bg-surface-container transition-all shadow-xs"
            title="Export Certified Audit Log"
            aria-label="Export Logs"
          >
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-full bg-white border border-surface-container rounded-2xl shadow-xs focus-within:border-secondary focus-within:shadow-sm transition-all">
          <span className="material-symbols-outlined absolute left-4 text-outline text-[22px] pointer-events-none">
            search
          </span>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Test ID, location, food matrix, or batch..."
            className="w-full h-13 pl-12 pr-11 bg-transparent text-primary placeholder:text-outline font-body-md text-sm focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear Search"
              className="absolute right-4 text-outline hover:text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="w-full overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all ${
                selectedFilter === "all"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "bg-white border border-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              All (142)
            </button>
            <button
              onClick={() => setSelectedFilter("safe")}
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all ${
                selectedFilter === "safe"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "bg-white border border-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              Safe (128)
            </button>
            <button
              onClick={() => setSelectedFilter("adulterated")}
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all ${
                selectedFilter === "adulterated"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "bg-white border border-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              Adulterated (14)
            </button>
            <button
              onClick={() => setSelectedFilter("milk")}
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all ${
                selectedFilter === "milk"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "bg-white border border-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              Milk Matrix
            </button>
            <button
              onClick={() => setSelectedFilter("honey")}
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                selectedFilter === "honey"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "bg-white border border-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              <span>Honey Matrix</span>
              <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-[10px]">
                Beta
              </span>
            </button>
          </div>
        </div>

        {/* Test Records List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="font-label-caps uppercase tracking-wider text-on-surface-variant font-bold text-xs">
                Verified Records
              </span>
            </div>
            <span className="font-code-telemetry text-xs text-outline font-semibold">
              Showing {filteredRecords.length} records
            </span>
          </div>

          {filteredRecords.length === 0 ? (
            <div className="bg-white border border-surface-container rounded-3xl p-10 text-center">
              <span className="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
              <h3 className="font-headline-sm text-primary font-bold">No Records Found</h3>
              <p className="font-body-sm text-on-surface-variant text-sm mt-1">
                Try modifying your search query or switching filters.
              </p>
            </div>
          ) : (
            filteredRecords.map((rec) => {
              const isSafe = rec.status === "safe";
              return (
                <div
                  key={rec.id}
                  className="bg-white border border-surface-container rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col gap-3.5 hover:border-secondary transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-base sm:text-lg font-bold text-primary truncate">
                          {rec.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary font-label-caps text-[10px] font-bold">
                          {rec.batch}
                        </span>
                      </div>
                      <p className="font-code-telemetry text-xs text-outline mt-0.5">
                        Test ID • #{rec.id}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                        isSafe
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-error-container text-on-error-container border border-red-200"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${isSafe ? "bg-on-tertiary-container" : "bg-error animate-ping"}`}
                      ></span>
                      <span className="font-label-caps uppercase tracking-tight">
                        {isSafe ? "SAFE ✓" : "ADULTERATED"}
                      </span>
                    </div>
                  </div>

                  {/* Finding Highlight Box */}
                  <div
                    className={`p-3 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold ${
                      isSafe
                        ? "bg-emerald-50/60 text-emerald-950 border border-emerald-100"
                        : "bg-error-container/30 text-red-950 border border-red-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          isSafe ? "text-emerald-600" : "text-error"
                        }`}
                      >
                        {isSafe ? "check_circle" : "warning"}
                      </span>
                      <span>{rec.finding}</span>
                    </div>
                    {rec.threshold && (
                      <span className="font-label-caps uppercase bg-white px-2 py-0.5 rounded text-error font-bold text-[10px]">
                        {rec.threshold}
                      </span>
                    )}
                  </div>

                  {/* Timestamp & Location Metadata */}
                  <div className="grid grid-cols-2 gap-2 font-body-sm text-xs text-on-surface-variant">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                      <span className="truncate">{rec.date} • {rec.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                      <span className="truncate">{rec.location}</span>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-2 border-t border-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[10px] uppercase text-outline font-bold">
                        ML Spectral Confidence
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="w-20 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className={`h-full ${isSafe ? "bg-on-tertiary-container" : "bg-primary"}`}
                            style={{ width: `${rec.confidence}%` }}
                          ></div>
                        </div>
                        <span className="font-code-telemetry text-xs font-bold text-primary">
                          {rec.confidence}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => setSelectedReport(rec)}
                        className="px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold flex items-center gap-1 transition-all"
                      >
                        <span>View Certificate</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                      <button
                        onClick={() => handleShare(rec)}
                        className="w-8 h-8 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-center transition-all"
                        title="Quick Share"
                      >
                        <span className="material-symbols-outlined text-[16px]">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-primary text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="material-symbols-outlined text-[18px] text-emerald-400">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Official Certificate Report Modal */}
      <ReportModal
        record={selectedReport}
        onClose={() => setSelectedReport(null)}
      />
    </ShellWrapper>
  );
}
