"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, ArrowRight, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import SisterConcernSlider from "@/components/HomeComponents/OurSisterConcern";


const Services = () => {
  // Service Data (5 Items as requested)
  const services = [
    {
      title: "Water Supply",
      image: "/service-img/water.jpg",
      description: "Reliable and clean water supply services for residential and commercial needs.",
      features: ["24/7 Service", "Quality Tested"],
      link: "/our-companies/water-supply",
    },
    {
      title: "Petrol Pump",
      image: "/service-img/pump.jpg",
      description: "Premium fuel station services with modern facilities and pure quality.",
      features: ["Premium Fuel", "Quick Service"],
      link: "/our-companies/petrol-pump",
    },
    {
      title: "Man Power",
      image: "/service-img/man-power.jpg",
      description: "Professional manpower solutions providing skilled labor for various industries.",
      features: ["Skilled Workers", "Verified Staff"],
      link: "/our-companies/man-power",
    },
    {
      title: "Furniture",
      image: "/service-img/furniture.webp",
      description: "High-quality, modern furniture solutions for homes and corporate offices.",
      features: ["Custom Design", "Installation"],
      link: "/our-companies/furniture",
    },
    {
      title: "Transport",
      image: "/service-img/transport1.jpg",
      description: "Efficient transportation and logistics services with real-time tracking.",
      features: ["Safe Delivery", "GPS Tracking"],
      link: "/our-companies/transport-services",
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How do I book a service?",
      answer: "You can book any of our services directly through our website or by calling our 24/7 customer support hotline.",
    },
    {
      question: "Is your water supply certified?",
      answer: "Yes, our water goes through a 5-step filtration process and is certified by local health authorities for purity.",
    },
    {
      question: "Do you provide inter-district transport?",
      answer: "Absolutely. Our logistics network covers the entire country with secure and insured delivery options.",
    },
    {
      question: "Can I customize furniture orders?",
      answer: "Yes, we have a dedicated design team to create furniture exactly according to your space and style requirements.",
    },
  ];

const [openFaq, setOpenFaq] = useState<number | null>(null);

const toggleFaq = (index: number) => {
  setOpenFaq(openFaq === index ? null : index);
};


  return (
    <div className="min-h-screen  font-sans">
      
      {/* =================  TOP BANNER ================= */}
       <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Premium Services Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-fuchsia-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">Our Premium Services</h1>
          <p className="text-slate-200 text-lg">
            Dedicated to providing top-notch solutions for your daily needs with quality and trust.
          </p>
        </div>
      </section>

      {/* ================= STORY SECTION ) ================= */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h4 className="text-fuchsia-600 font-bold uppercase tracking-wider text-sm">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Empowering Your Life with <br/> <span className="text-fuchsia-500">Integrated Solutions</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We started our journey with a simple mission: to make essential services accessible, reliable, and high-quality. From ensuring pure water reaches your tap to fueling your vehicles and furnishing your homes, we are there at every step.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our team of over 500 professionals works round the clock to ensure that when you choose us, you choose peace of mind.
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              Read Our Full Story <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-100 md:h-162.5 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/service-img/service-story1.png"
                alt="Our Story"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================  SERVICES CARDS ================= */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
              >
                {/* Image on Top */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>

                {/* Content Below */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-fuchsia-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 mb-4 line-clamp-3 leading-relaxed grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4 border-t border-slate-100 pt-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-600 font-medium">
                        <CheckCircle className="w-3 h-3 text-fuchsia-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link href={service.link} className="mt-auto">
                    <button className="w-full bg-slate-50 text-slate-900 border border-slate-200 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 text-xs font-bold py-2.5 rounded transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================  PROCESS SECTION ================= */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-fuchsia-400"
            >
              <div className="w-16 h-16 bg-fuchsia-50 rounded-full flex items-center justify-center mx-auto mb-6 text-fuchsia-600">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Quick Booking</h3>
              <p className="text-slate-600 text-sm">Contact us online or via phone. Our team responds instantly to understand your requirements.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-fuchsia-500"
            >
              <div className="w-16 h-16 bg-fuchsia-50 rounded-full flex items-center justify-center mx-auto mb-6 text-fuchsia-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Quality Assurance</h3>
              <p className="text-slate-600 text-sm">Our experts verify every aspect of the service/product to ensure it meets global standards.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-fuchsia-500"
            >
              <div className="w-16 h-16 bg-fuchsia-50 rounded-full flex items-center justify-center mx-auto mb-6 text-fuchsia-600">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Delivery & Support</h3>
              <p className="text-slate-600 text-sm">We deliver on time and provide post-service support to ensure 100% satisfaction.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-2">Common questions about our services and policies.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-slate-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= Our Sister Concern ================= */}
      <section>
        <SisterConcernSlider></SisterConcernSlider>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <div className="bg-slate-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a Customized Solution for your Business?</h2>
          <p className="text-slate-400 mb-8">
            We offer tailored packages for corporate clients including bulk water supply, fleet management, and office furnishing.
          </p>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
            Get a Quote Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Services;


