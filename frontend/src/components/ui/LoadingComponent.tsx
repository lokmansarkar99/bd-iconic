import { Loader2 } from "lucide-react";
import { cn } from "@/components/ui/Ui";

// ==========================================
// 1. FULL SCREEN LOADER (App Initialization)
// ==========================================
export function FullScreenLoader({ text = "Loading System..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
      {/* Brand Logo Placeholder (Optional) */}
      <div className="mb-8 h-12 w-12 bg-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 animate-pulse">
        <span className="text-white font-bold text-xl">M</span>
      </div>

      {/* Spinner */}
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-slate-200"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-fuchsia-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-4 text-sm font-medium text-slate-500 animate-pulse">
        {text}
      </p>
    </div>
  );
}

// ==========================================
// 2. SKELETON LOADER (For Content Cards)
// ==========================================
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-slate-200/80", className)}
      {...props}
    />
  );
}

// Pre-built Card Skeleton for your Dashboard
export function DashboardCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" /> {/* Label */}
          <Skeleton className="h-8 w-32" /> {/* Value */}
        </div>
        <Skeleton className="h-10 w-10 rounded-lg" /> {/* Icon */}
      </div>
      <Skeleton className="h-3 w-full" /> {/* Footer text */}
    </div>
  );
}

// Pre-built Table Row Skeleton
export function TableRowSkeleton() {
  return (
    <div className="flex items-center space-x-4 py-4 px-6 border-b border-slate-100">
       <Skeleton className="h-10 w-10 rounded-full" />
       <div className="space-y-2 flex-1">
         <Skeleton className="h-4 w-[30%]" />
         <Skeleton className="h-3 w-[20%]" />
       </div>
       <Skeleton className="h-8 w-20" />
    </div>
  )
}

// ==========================================
// 3. SPINNER (For Buttons/Inline)
// ==========================================
export function Spinner({ 
  size = 20, 
  className 
}: { 
  size?: number; 
  className?: string 
}) {
  return (
    <Loader2 
      size={size} 
      className={cn("animate-spin text-current", className)} 
    />
  );
}