import React from 'react';
import Image from "next/image";
import OurSisterConcern from '@/components/HomeComponents/OurSisterConcern';
import GalleryContent from '@/components/HandleFormComponents/PortfolioContent';

// --- Static Data ---
const portfolioItems = [
  { id: 1, title: "City Water Filtration Plant", category: "Water Supply", url: "https://i.pinimg.com/1200x/2e/00/55/2e00554b498707c4b691d86a52e55a54.jpg" },
  { id: 2, title: "Modern Office Interior", category: "Furniture", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Skill Development Workshop", category: "Manpower", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Fuel Station Expansion", category: "Petrol Pump", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Nationwide Logistics Chain", category: "Transport", url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Corporate Headquarters", category: "Business Line", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "City Water Filtration Plant", category: "Water Supply", url: "https://i.pinimg.com/1200x/2e/00/55/2e00554b498707c4b691d86a52e55a54.jpg"},
  { id: 8, title: "Modern Office Interior", category: "Furniture", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Water Supply", "Manpower", "Petrol Pump", "Furniture", "Transport"];

const PortfolioPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Portfolio Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Showcasing excellence through every project.
          </p>
        </div>
      </section>


      {/* interaction logic passes to client */}
      <GalleryContent portfolioItems={portfolioItems} categories={categories} />


     
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
            "Their commitment to excellence has been a game-changer."
          </p>
          <h4 className="font-bold text-gray-900 text-lg">Alexandar Graham</h4>
        </div>
      </section>

      <OurSisterConcern />
    </div>
  );
};

export default PortfolioPage;