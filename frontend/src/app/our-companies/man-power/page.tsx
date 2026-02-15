"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Briefcase, 
  Shield, 
  Globe,
  Award,
  Clock,
  FileCheck,
  Plane,
  HeadphonesIcon,
  TrendingUp,
  Target,
  UserCheck,
  Building2,
  DollarSign,
  Map,
  Star,
  Phone
} from "lucide-react";

const ManPower = () => {
  // Job Categories Data
  const jobCategories = [
    {
      title: "Construction Workers",
      icon: Building2,
      image: "https://i.pinimg.com/1200x/fb/91/aa/fb91aa166649a5f113ba785ada4bd9a3.jpg",
      description: "Skilled laborers for construction and infrastructure projects",
      positions: ["Mason", "Carpenter", "Welder", "Electrician", "Plumber", "Steel Fitter"],
      demand: "High",
      salary: "800-1500 SAR",
      color: "fuchsia"
    },
    {
      title: "Factory Workers",
      icon: Briefcase,
      image: "https://i.pinimg.com/1200x/aa/29/bc/aa29bc90a3f1930efe3c1bf477ec62af.jpg",
      description: "Factory and manufacturing industry workers",
      positions: ["Machine Operator", "Production Worker", "Quality Control", "Packing Staff", "Forklift Operator"],
      demand: "Very High",
      salary: "900-1400 SAR",
      color: "blue"
    },
    {
      title: "Hospitality Staff",
      icon: Users,
      image: "https://i.pinimg.com/1200x/74/d2/d9/74d2d9e5e016cf3231fd5758cfe9cafb.jpg",
      description: "Hotel, restaurant and service industry professionals",
      positions: ["Waiter", "Chef", "Cleaner", "Room Service", "Kitchen Helper", "Barista"],
      demand: "Medium",
      salary: "700-1200 SAR",
      color: "green"
    },
    {
      title: "Healthcare Support",
      icon: HeadphonesIcon,
      image: "https://i.pinimg.com/736x/5c/ab/0e/5cab0e1a619c147e450f579ae8379a72.jpg",
      description: "Medical and healthcare support staff",
      positions: ["Nurse", "Care Taker", "Medical Assistant", "Lab Technician", "Pharmacy Assistant"],
      demand: "High",
      salary: "1200-2000 SAR",
      color: "purple"
    },
    {
      title: "Drivers & Logistics",
      icon: Plane,
      image: "https://i.pinimg.com/736x/a9/d8/64/a9d864818c7144e24fd43e7015be6bb6.jpg",
      description: "Transportation and delivery professionals",
      positions: ["Heavy Driver", "Light Driver", "Delivery Staff", "Warehouse Worker", "Loader"],
      demand: "High",
      salary: "1000-1600 SAR",
      color: "orange"
    },
    {
      title: "Security Personnel",
      icon: Shield,
      image: "https://i.pinimg.com/1200x/8f/ed/fa/8fedfa5f7234750fc5942a7adc7b96fe.jpg",
      description: "Security guards and safety staff",
      positions: ["Security Guard", "Supervisor", "Safety Officer", "CCTV Operator"],
      demand: "Medium",
      salary: "900-1300 SAR",
      color: "red"
    },
    {
      title: "Construction Workers",
      icon: Building2,
      image: "https://i.pinimg.com/1200x/fb/91/aa/fb91aa166649a5f113ba785ada4bd9a3.jpg",
      description: "Skilled laborers for construction and infrastructure projects",
      positions: ["Mason", "Carpenter", "Welder", "Electrician", "Plumber", "Steel Fitter"],
      demand: "High",
      salary: "800-1500 SAR",
      color: "fuchsia"
    },
    {
      title: "Factory Workers",
      icon: Briefcase,
      image: "https://i.pinimg.com/1200x/aa/29/bc/aa29bc90a3f1930efe3c1bf477ec62af.jpg",
      description: "Factory and manufacturing industry workers",
      positions: ["Machine Operator", "Production Worker", "Quality Control", "Packing Staff", "Forklift Operator"],
      demand: "Very High",
      salary: "900-1400 SAR",
      color: "blue"
    },
  ];

  // Process Steps
  const processSteps = [
    {
      step: "1",
      title: "Application & Selection",
      description: "Submit your documents through our office or online portal. Our team verifies your qualifications and matches you with suitable positions in Saudi Arabia.",
      icon: FileCheck,
      color: "bg-blue-500"
    },
    {
      step: "2",
      title: "Medical & Training",
      description: "Complete mandatory medical examination at authorized centers and job-specific training as per Saudi Arabia government requirements.",
      icon: UserCheck,
      color: "bg-green-500"
    },
    {
      step: "3",
      title: "Visa Processing",
      description: "We handle all visa documentation, embassy appointments, and attestation processes on your behalf with full transparency.",
      icon: FileCheck,
      color: "bg-purple-500"
    },
    {
      step: "4",
      title: "Flight & Deployment",
      description: "We arrange your flight ticket, airport assistance, and ensure safe arrival to your workplace with company reception in Saudi Arabia.",
      icon: Plane,
      color: "bg-fuchsia-500"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Approved by BMET Bangladesh and authorized by Saudi Arabian Ministry of Labor"
    },
    {
      icon: Shield,
      title: "100% Safe & Legal",
      description: "All documentation, visa, and employment contracts are fully legal and transparent"
    },
    {
      icon: Users,
      title: "15+ Years Experience",
      description: "Successfully placed 5000+ workers in Saudi Arabia with 98% client satisfaction rate"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team available in both Bangladesh and Saudi Arabia for any assistance"
    },
    {
      icon: TrendingUp,
      title: "95% Success Rate",
      description: "Industry-leading visa approval rate with guaranteed on-time deployment"
    },
    {
      icon: Globe,
      title: "Multiple Countries",
      description: "We also recruit for UAE, Qatar, Oman, Kuwait, Bahrain, and Malaysia"
    }
  ];

  // Required Documents
  const requiredDocuments = [
    { doc: "Valid Passport", note: "Minimum 2 years validity required" },
    { doc: "Passport Size Photos", note: "8 copies, white background" },
    { doc: "Educational Certificates", note: "SSC/HSC/Diploma/Degree" },
    { doc: "Trade/Skill Certificate", note: "If applicable for technical jobs" },
    { doc: "Police Clearance", note: "From local police station" },
    { doc: "Medical Fitness Certificate", note: "From authorized medical center" },
    { doc: "National ID Card", note: "Original and photocopy" },
    { doc: "Experience Certificate", note: "Previous job experience (if any)" }
  ];

  // Countries We Recruit For
  const countries = [
    { name: "Saudi Arabia", flag: "🇸🇦", workers: "3500+", salary: "800-2000 SAR" },
    { name: "UAE", flag: "🇦🇪", workers: "1200+", salary: "1000-2500 AED" },
    { name: "Qatar", flag: "🇶🇦", workers: "800+", salary: "900-2200 QAR" },
    { name: "Oman", flag: "🇴🇲", workers: "600+", salary: "200-400 OMR" },
    { name: "Kuwait", flag: "🇰🇼", workers: "400+", salary: "80-150 KWD" },
    { name: "Malaysia", flag: "🇲🇾", workers: "300+", salary: "1200-2000 MYR" }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What is the total cost to go to Saudi Arabia?",
      answer: "The cost depends on the job type and visa category. Generally, it ranges from BDT 3,50,000 to 5,00,000 including visa fees, flight ticket, medical, training, and all documentation. We offer flexible installment payment options."
    },
    {
      question: "How long does the visa process take?",
      answer: "With complete and correct documentation, the visa processing typically takes 60-90 days. We also provide express processing services for urgent cases with additional fees."
    },
    {
      question: "What will be the salary and when will I receive it?",
      answer: "Salary ranges from 800 to 2000 Saudi Riyal depending on job type and experience. Payment is made between 1st-7th of every month directly to your bank account as per labor law."
    },
    {
      question: "What kind of training is provided?",
      answer: "We provide BMET approved training including Arabic/English language skills, job-specific technical training, Saudi culture and workplace etiquette, and safety procedures."
    },
    {
      question: "Will the company provide accommodation and food?",
      answer: "Yes, according to Saudi labor law, the employer provides free accommodation, food (or food allowance), and medical insurance. This is clearly mentioned in your employment contract."
    },
    {
      question: "Can I renew my contract after completion?",
      answer: "Yes, if your work performance is satisfactory, your contract can be renewed. Most workers get contract extensions and continue working with better salary increments."
    },
    {
      question: "What if I face problems in Saudi Arabia?",
      answer: "We have a dedicated support team in Saudi Arabia who assists with any workplace or legal issues. You can contact our 24/7 helpline anytime for immediate support."
    },
    {
      question: "Is there any medical checkup required?",
      answer: "Yes, you need to complete medical examination at BMET approved medical centers in Bangladesh. After reaching Saudi Arabia, another medical test (GAMCA) is mandatory."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans">
      
      {/* ================= TOP BANNER ================= */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            width={2074}
            height={600} 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Saudi Arabia Manpower Recruitment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Users size={14} /> Saudi Arabia Recruitment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Gateway to <br/>
              <span className="text-fuchsia-500">Saudi Arabia Employment</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
              BMET licensed manpower recruitment agency specializing in overseas employment. We connect skilled Bangladeshi workers with premium opportunities in Saudi Arabia and the Middle East.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-fuchsia-600 text-white rounded-xl font-bold hover:bg-fuchsia-700 transition-colors flex items-center gap-2">
                <Phone size={18} />
                Contact Us Now
              </button>
              <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors">
                View Job Categories
              </button>
            </div>
          </div>
          
          {/* Right Side Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">5000+</div>
                <div className="text-slate-300 text-sm">Workers Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">95%</div>
                <div className="text-slate-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">15+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h4 className="text-fuchsia-600 font-bold uppercase tracking-wider text-sm">
              Build Your Career Abroad
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Your Gateway to <br/>
              <span className="text-fuchsia-500">Saudi Arabia Employment</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We are Bangladesh's leading BMET licensed manpower recruitment agency specializing in overseas employment. With over 15 years of experience, we have successfully placed thousands of skilled workers in Saudi Arabia, UAE, Qatar, and other Gulf countries.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our commitment to ethical recruitment practices, complete transparency, and post-deployment support makes us the most trusted name in the industry. We ensure every worker gets fair wages, proper working conditions, and legal protection.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-fuchsia-50 px-4 py-2 rounded-lg">
                <CheckCircle className="text-fuchsia-600" size={20} />
                <span className="font-semibold text-slate-800">BMET Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-fuchsia-50 px-4 py-2 rounded-lg">
                <CheckCircle className="text-fuchsia-600" size={20} />
                <span className="font-semibold text-slate-800">5000+ Placed</span>
              </div>
              <div className="flex items-center gap-2 bg-fuchsia-50 px-4 py-2 rounded-lg">
                <CheckCircle className="text-fuchsia-600" size={20} />
                <span className="font-semibold text-slate-800">95% Success Rate</span>
              </div>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              Apply Now <ArrowRight size={18} />
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
            <div className="relative h-[25rem] md:h-[40.625rem] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://i.pinimg.com/1200x/15/51/91/1551917cf6023f9bbf9fcb1e03c8ef34.jpg"
                alt="Saudi Arabia Workers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= JOB CATEGORIES ================= */}
     <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Available Job Categories</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4">Wide range of positions available across various industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-fuchsia-500 text-white px-2 py-1 rounded">
                        {category.demand} Demand
                      </span>
                      <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                        {category.salary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Available Positions:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4 flex-grow">
                    {category.positions.map((position, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-600">
                        <CheckCircle className="w-3 h-3 text-fuchsia-500 mr-2 shrink-0" />
                        <span>{position}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-fuchsia-600 text-white text-sm font-semibold py-2.5 rounded transition-all mt-auto">
                    Apply for {category.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COUNTRIES WE RECRUIT FOR ================= */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Countries We Recruit For</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center border border-slate-100"
              >
                <div className="text-5xl mb-3">{country.flag}</div>
                <h3 className="font-bold text-slate-800 mb-2">{country.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{country.workers} Workers Placed</p>
                <p className="text-xs font-semibold text-fuchsia-600">{country.salary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Recruitment Process</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4">Simple 4-step process to start your career abroad</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-b-4 border-fuchsia-500 relative"
              >
                <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                  <step.icon size={28} />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-center text-slate-800">{step.title}</h3>
                <p className="text-slate-600 text-sm text-center leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-fuchsia-50 rounded-lg flex items-center justify-center mb-4 text-fuchsia-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REQUIRED DOCUMENTS ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Required Documents</h2>
            <div className="w-16 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4">Documents needed for visa application</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 p-4 rounded-lg border-l-4 border-fuchsia-500 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-fuchsia-600 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">{item.doc}</h4>
                    <p className="text-sm text-slate-600">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FileCheck className="text-fuchsia-600 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Important Note</h4>
                <p className="text-sm text-slate-600">
                  All documents must be original and attested. Our team will guide you through the entire documentation process. We also provide assistance in obtaining police clearance and medical certificates from authorized centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STATISTICS ================= */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-2">5000+</div>
              <div className="text-slate-400">Workers Placed</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-2">15+</div>
              <div className="text-slate-400">Years Experience</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-2">Common questions about overseas recruitment</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
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

      {/* ================= FINAL CTA SECTION ================= */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Take the first step towards a better future. Our expert team is ready to guide you through every step of the process. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now: +880 1XXX-XXXXXX
            </button>
            <button className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Apply Online <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Office: Dhaka, Bangladesh | License No: XXXX/BMET/XXXX
          </p>
        </div>
      </div>

    </div>
  );
};

export default ManPower;