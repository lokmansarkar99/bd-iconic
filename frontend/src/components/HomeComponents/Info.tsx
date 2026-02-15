"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

import ourValue from "@/assets/info-img/our-values.png";
import experience from "@/assets/info-img/Exprence.png";
import client from "@/assets/info-img/Client.png";

// start here

/* ------------------ Types ------------------ */
type InfoItem = {
  title: string;
  desc: string;
  icon: StaticImageData;
};

/* ------------------ Animations ------------------ */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

/* ------------------ Motion Image ------------------ */
const MotionImage = motion(Image);

/* ------------------ Component ------------------ */
const Info: React.FC = () => {
  const data: InfoItem[] = [
    {
      title: "Our Values",
      desc: "Innovation, Quality, Customer Focus, Integrity",
      icon: ourValue,
    },
    {
      title: "Years of Experience",
      desc: "2+ Years of Digital Expertise",
      icon: experience,
    },
    {
      title: "Our Clients",
      desc: "Startups, SMEs, and Enterprises Globally",
      icon: client,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                className="shrink-0 w-24 h-24 rounded-xl bg-linear-to-br from-fuchsia-100 to-purple-100 flex items-center justify-center"
              >
                <MotionImage
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <motion.h3
                  className="text-lg font-semibold text-gray-900 mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
