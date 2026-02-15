"use client";

import React from "react";
import { motion } from "framer-motion";
import digital from "@/assets/logos/digital.jpg";
import express from "@/assets/logos/express.jpg";
import furniture from "@/assets/logos/furniture.jpg";
import greenland from "@/assets/logos/greenland .jpg"; 
import hajj from "@/assets/logos/hajj.jpg";
import motors from "@/assets/logos/motors.jpg";
import shikhon from "@/assets/logos/shikhon.jpg";
import soft from "@/assets/logos/soft.jpg";
import transport from "@/assets/logos/transport.jpg";
import travel from "@/assets/logos/travel.jpg";
import Image from "next/image";

const logoList = [
  digital,
  express,
  furniture,
  greenland,
  hajj,
  motors,
  shikhon,
  soft,
  transport,
  travel,
];

const OurSisterConcern = () => {
  const duplicatedLogos = [...logoList, ...logoList];

  return (
    <div className="relative w-full overflow-hidden pt-10 pb-16">
        <h2 className="text-4xl text-center font-bold mb-10 text-gray-900">Our Sister Concern</h2>
      <div className="flex">
        <motion.div
          className="flex flex-none gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30, 
            ease: "linear",
            repeat: Infinity,
          }}
        
          whileHover={{ 
             transition: { duration: 0 } 
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex h-24 w-44 shrink-0 items-center justify-center"
            >
              <Image
              width={176}
              height={96}
                src={logo.src} 
                alt={`Sister Concern ${index}`}
                className="max-h-full max-w-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurSisterConcern;