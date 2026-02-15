import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ReviewCard from '@/components/HandleFormComponents/TestimonialCard'; 

const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-slate-900 pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by the Kingdom's Leaders
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We don't just supply manpower; we build partnerships that power Saudi Arabia's most ambitious projects. Read success stories from our valued clients.
        </p>
      </section>

      {/* ================= FEATURED CASE STUDY ================= */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Overlay Data */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              width={800}
              height={800}
              src="https://static.dezeen.com/uploads/2018/11/kapsarc-zaha-hadid-architecture-education-saudi-arabia_dezeen_hero-1-1704x959-852x480.jpg" 
              alt="Major Construction Project in Riyadh" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">Featured Success Story</p>
                <h3 className="text-2xl font-bold">Riyadh Mega-Infrastructure Project</h3>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                Deploying 1,500 Skilled Workers in Record Time for Vision 2030
              </h2>
              <p className="text-slate-600 leading-relaxed">
                When a major contracting firm needed a massive influx of skilled labor for a time-critical infrastructure project in Riyadh, they turned to us. 
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Leveraging our global network and streamlined Musaned-compliant processes, we sourced, vetted, and deployed 1,500 skilled carpenters, electricians, and heavy machinery operators within 60 days.
              </p>
            </div>

            {/* Key Stats Metrics */}
            <div className="grid grid-cols-3 gap-6 border-t border-b border-slate-100 py-8">
              <div>
                <h4 className="text-3xl font-extrabold text-fuchsia-600">60 Days</h4>
                <p className="text-sm text-slate-500 font-medium mt-1">Deployment</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-fuchsia-600">1,500+</h4>
                <p className="text-sm text-slate-500 font-medium mt-1">Workers</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-fuchsia-600">98%</h4>
                <p className="text-sm text-slate-500 font-medium mt-1">Retention</p>
              </div>
            </div>

            <button className="group inline-flex items-center gap-2 text-fuchsia-600 font-bold hover:text-fuchsia-700 transition-colors">
              Read Full Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLIENT REVIEWS SECTION ================= */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Partners Say</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Feedback from leading companies across construction, healthcare, and logistics sectors in KSA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              quote="Their understanding of Saudi labor laws and commitment to compliance is unmatched. They provided us with highly qualified medical staff."
              author="Dr. Fatima Al-Saud"
              role="HR Director"
              company="Riyadh Specialized Hospital"
              stars={5}
            />
            <ReviewCard 
              quote="We needed a reliable source for hundreds of general workers. The team delivered ahead of schedule, ensuring high morale on site."
              author="Eng. Khalid Rahman"
              role="Project Manager"
              company="NEOM Construction Group"
              stars={5}
            />
            <ReviewCard 
              quote="The transparency in their billing and the quality of their candidates sets them apart. They are our go-to partner."
              author="Omar Hassan"
              role="Operations Head"
              company="Eastern Province Logistics"
              stars={4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;