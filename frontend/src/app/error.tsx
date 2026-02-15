"use client";

import React from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw, Home, ArrowRight } from 'lucide-react';

const error = ({ reset }: { reset: () => void }) => {
    return (
        <div className="min-h-[80vh] w-full flex items-center justify-center bg-white px-4">
            <div className="max-w-xl w-full text-center">
                {/* Icon Wrapper */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-50 mb-8">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                </div>

                {/* Main Content */}
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                    Something went <span className="text-red-600">wrong!</span>
                </h1>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                    An unexpected error occurred. Please try refreshing the page or return to the homepage to continue.
                </p>

                {/* Buttons Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => reset()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#C800DE] text-white rounded-2xl font-bold hover:bg-[#ad02c0] transition-all active:scale-95 shadow-lg shadow-slate-900/10"
                    >
                        <RotateCcw size={20} />
                        Try Again
                    </button>
                    
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                    >
                        <Home size={20} />
                        Go to Home
                    </Link>
                </div>

                {/* Footer Link */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                    <Link href="/contact" className="text-slate-400 hover:text-red-600 font-medium flex items-center justify-center gap-1 transition-colors">
                        Report this issue <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default error;