'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FileQuestion, MoveLeft, Home, LayoutDashboard } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      
      {/* Visual Icon Container */}
      <div className="relative mb-8">
        {/* Background Decorative Blob */}
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 transform scale-150"></div>
        
        {/* Main Icon */}
        <div className="relative bg-white h-24 w-24 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto">
          <FileQuestion className="text-fuchsia-600 h-10 w-10" />
          
          {/* Small Badge */}
          <div className="absolute -top-2 -right-2 bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-white shadow-sm">
            404
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md space-y-3 mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-slate-500 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        
        {/* Go Back (History) */}
        <button 
          onClick={() => router.back()}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
        >
          <MoveLeft size={18} />
          Go Back
        </button>

        {/* Primary Action - Context Aware */}
        <Link 
          href="/dashboard" 
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 shadow-sm hover:shadow-md transition-all"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
      </div>

      {/* Footer Link for Public Users */}
      <div className="mt-12">
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-slate-600 transition-colors">
          <Home size={14} className="mr-1.5" />
          Back to Corporate Website
        </Link>
      </div>

    </div>
  );
}