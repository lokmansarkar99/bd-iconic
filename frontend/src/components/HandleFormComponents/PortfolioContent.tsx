"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";

// --- Counter Logic Component ---
const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  url: string;
}

interface GalleryContentProps {
  portfolioItems: PortfolioItem[];
  categories: string[];
}

const PortfolioContent = ({ portfolioItems, categories }: GalleryContentProps) => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* Dynamic Statistics Section */}

      <section className="py-16 bg-[#00BCFF]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">


     
          
          {/* Counter 1 */}
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
              <Counter value={500} />+
            </h3>
            <p className="text-blue-50 text-xs md:text-sm uppercase font-semibold mt-3 tracking-widest">Projects Done</p>
          </div>

          {/* Counter 2 */}
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
              <Counter value={120} />+
            </h3>
            <p className="text-blue-50 text-xs md:text-sm uppercase font-semibold mt-3 tracking-widest">Global Clients</p>
          </div>

          {/* Counter 3 */}
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
              <Counter value={25} />+
            </h3>
            <p className="text-blue-50 text-xs md:text-sm uppercase font-semibold mt-3 tracking-widest">Years Experience</p>
          </div>

          {/* Counter 4 (Client Satisfaction) */}
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-5xl font-bold flex justify-center">
              <Counter value={100} />%
            </h3>
            <p className="text-blue-50 text-xs md:text-sm uppercase font-semibold mt-3 tracking-widest">Client Satisfaction</p>
          </div>

        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="container mx-auto py-24 px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-sm cursor-pointer font-bold transition-all duration-300 ${
                filter === cat 
                ? "bg-[#00BCFF] text-white shadow-lg" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-[350px] overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition-all border border-gray-100"
              >
                <Image 
                  fill
                  src={item.url} 
                  alt={item.title} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold leading-tight">{item.title}</h3>
                  <div className="h-1 w-12 bg-blue-500 mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioContent;