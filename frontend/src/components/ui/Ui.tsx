import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Status Badge Component
export const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Active: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Valid: "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Expiring Soon": "bg-amber-100 text-amber-700 border-amber-200",
    Expiring: "bg-amber-100 text-amber-700 border-amber-200",
    Expired: "bg-red-100 text-red-700 border-red-200",
  };

  const key = Object.keys(styles).find(k => status.includes(k)) || "Valid";
  const activeStyle = styles[key as keyof typeof styles] || styles.Valid;

  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium border", activeStyle)}>
      {status}
    </span>
  );
};

// Card Component
export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", className)}>
    {children}
  </div>
);

export const CardHeader = ({ title, action }: { title: string, action?: React.ReactNode }) => (
  <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
    <h3 className="font-semibold text-slate-800">{title}</h3>
    {action}
  </div>
);

