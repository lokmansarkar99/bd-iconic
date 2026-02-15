"use client";

import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const TestimonialCard = ({ quote, author, role, company, stars }: ReviewCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative group hover:shadow-md transition-shadow">
      <Quote size={40} className="text-blue-100 absolute top-6 right-6 group-hover:text-blue-200 transition-colors" />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className={i < stars ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
        ))}
      </div>
      
      <blockquote className="flex-1 text-slate-600 leading-relaxed italic mb-8 relative z-10">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-fuchsia-600 font-bold text-lg shrink-0">
           {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{author}</h4>
          <p className="text-sm text-slate-500">{role}</p>
          <p className="text-xs font-semibold text-fuchsia-600 mt-1 flex items-center gap-1">
             <Building2 size={12} /> {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;