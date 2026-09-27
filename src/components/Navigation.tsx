"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavigationProps {
  isMobileFrame?: boolean;
  onToggleFrame?: () => void;
}

export default function Navigation({ isMobileFrame = false, onToggleFrame }: NavigationProps) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Adulteration Alert Intercepted",
      desc: "Batch #402 flagged for Starch (0.45 g/L) at Bengaluru North Depot.",
      time: "10 mins ago",
      type: "alert",
      read: false,
    },
    {
      id: 2,
      title: "Hardware Calibrated",
      desc: "FG-Sensor-904 optical spectroscopy matrix tuned to 532nm.",
      time: "1 hour ago",
      type: "info",
      read: false,
    },
    {
      id: 3,
      title: "Cloud Ledger Sync Complete",
      desc: "14 verified test records anchored to audit trail.",
      time: "3 hours ago",
      type: "success",
      read: true,
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const navItems = [
    { label: "Home", path: "/dashboard", icon: "dashboard" },
    { label: "Scan", path: "/scan", icon: "biotech" },
    { label: "Results", path: "/results", icon: "assignment" },
    { label: "History", path: "/history", icon: "history" },
    { label: "Analytics", path: "/analytics", icon: "monitoring" },
    { label: "Device", path: "/device", icon: "tune" },
  ];

  return (
    <>
      {/* Top Fixed Header */}
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          {/* Brand & Live Telemetry Indicator */}
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-9 h-9 p-1 rounded-xl bg-white shadow-sm border border-surface-container-high flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image src="/logo.svg" alt="FoodGuard Brand Logo" width={28} height={28} className="w-full h-full object-contain" priority />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-primary font-extrabold tracking-tight group-hover:text-secondary transition-colors">
                  FoodGuard
                </span>
                <span className="hidden sm:inline-block font-label-caps bg-primary text-white px-2 py-0.5 rounded-full text-[10px] tracking-wider">
                  NANO-DIAGNOSTICS
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container px-2 py-0.5 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                <span className="font-label-caps text-on-primary-container uppercase text-[10px] font-semibold">
                  IoT Nano-Sync Active
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (when expanded) */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-surface-container">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path === "/dashboard" && pathname === "/");
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3.5 py-1.5 rounded-lg font-label-md text-sm transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white text-primary font-bold shadow-xs border border-surface-container-high"
                      : "text-on-surface-variant hover:text-primary hover:bg-white/50"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Viewport Frame Toggle (Mobile Preview vs Full Desktop) */}
            {onToggleFrame && (
              <button
                onClick={onToggleFrame}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-all shadow-xs"
                title={isMobileFrame ? "Switch to Responsive Desktop Widescreen" : "Switch to Handheld Mobile Shell"}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isMobileFrame ? "desktop_windows" : "smartphone"}
                </span>
                <span>{isMobileFrame ? "Widescreen View" : "Handheld View"}</span>
              </button>
            )}

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Notifications"
                className="w-10 h-10 relative flex items-center justify-center rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors border border-surface-container"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface animate-pulse" />
                )}
              </button>

              {/* Notification Dropdown Drawer */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-surface-container p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-sm font-bold text-primary">Live Alerts</span>
                      {unreadCount > 0 && (
                        <span className="bg-error-container text-on-error-container text-xs px-2 py-0.5 rounded-full font-bold">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        className="text-xs text-secondary hover:text-primary font-medium"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="divide-y divide-surface-container max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-3 flex items-start gap-3">
                        <span className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${n.type === 'alert' ? 'bg-error' : n.type === 'success' ? 'bg-on-tertiary-container' : 'bg-secondary'}`} />
                        <div className="flex-1">
                          <p className="text-xs font-bold text-primary">{n.title}</p>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">{n.desc}</p>
                          <span className="text-[10px] text-outline mt-1 block">{n.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <Link
              href="/device"
              className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-surface-container transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs ring-2 ring-surface-container-high">
                EV
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-label-md text-xs font-bold text-primary leading-tight">Dr. Eliza Vance</span>
                <span className="font-code-telemetry text-[10px] text-on-surface-variant leading-tight">Food Safety Lead</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Fixed Navigation Bar (Mobile / Handheld view) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-surface-container shadow-[0_-2px_12px_rgba(0,0,0,0.06)] md:hidden">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path === "/dashboard" && pathname === "/");
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all group ${
                  isActive ? "text-primary font-bold scale-105" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <div className={`p-1 rounded-xl transition-colors ${isActive ? "bg-surface-container text-primary" : ""}`}>
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <span className="font-label-caps text-[10px] mt-0.5 tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
