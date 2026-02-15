"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function FurnitureClientActions() {
  const [showStandards, setShowStandards] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20"
        >
          Staff Your Showroom
        </Link>
        <button 
          onClick={() => setShowStandards(!showStandards)}
          className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          {showStandards ? "Close Standards" : "View Skill Standards"}
        </button>
      </div>
      
      {showStandards && (
        <div className="absolute top-full mt-4 p-6 bg-white text-stone-900 rounded-2xl shadow-2xl z-50 w-full md:w-80 border border-stone-100">
          <h4 className="font-bold mb-2 text-orange-600">Our Quality Standards:</h4>
          <ul className="text-sm space-y-2 text-stone-600">
            <li>• Carpentry Precision</li>
            <li>• Technical Drawing Reading</li>
            <li>• High-end Upholstery Finishing</li>
          </ul>
        </div>
      )}
    </div>
  );
}