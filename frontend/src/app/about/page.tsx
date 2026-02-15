import React from 'react';
import { ShieldCheck, Globe, Users, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import OurSisterConcern from '@/components/HomeComponents/OurSisterConcern';

// TypeScript Interfaces
interface ValueItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const VALUES: ValueItem[] = [
  { icon: ShieldCheck, title: "Compliance", desc: "Fully licensed by the Ministry of Human Resources and strictly adhering to Saudi Labor Law." },
  { icon: Globe, title: "Global Reach", desc: "Strategic partnerships across 12 countries, ensuring a steady flow of diverse talent." },
  { icon: Users, title: "Human Centric", desc: "We prioritize worker welfare, ethical recruitment, and fair treatment in every placement." },
  { icon: Target, title: "Efficiency", desc: "Streamlined visa processing and documentation for rapid, error-free deployment." }
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* --- Hero Banner with New Professional Image --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 w-full h-full">
           <Image 
              // New Industrial/Construction Professional Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional Construction Manpower"
              fill
              className="object-cover"
              priority={true} 
           />
           {/* Gradient Overlay for a cinematic and readable feel */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent opacity-90"></div>
           <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Connecting Talent with <br />
            <span className="text-fuchsia-500">Opportunity</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Providing Saudi Arabia with ethical recruitment and professional excellence since 2010. Supporting the infrastructure of <span className="text-white font-semibold">Vision 2030</span>.
          </p>
        </div>
      </section>

      {/* --- Values Grid --- */}
      <section className="container mx-auto py-24 px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((v, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                <v.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Industrial Context --- */}
      <section className="container mx-auto py-12 px-6 overflow-hidden">
        <div className=" grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1000" 
              alt="Industrial Growth" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-60"></div>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Legacy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Building the <br /> <span className="text-fuchsia-600">Infrastructure</span> of Tomorrow
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              For over a decade, we have been a trusted partner to the Kingdom's most ambitious projects. 
              Our selection process ensures every candidate is skilled, certified, and ready to meet the 
              high standards of modern Saudi industry.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-6 border-y border-slate-200">
              <div className="">
                <h4 className="text-4xl font-black text-slate-900">50k<span className="text-fuchsia-600">+</span></h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tighter">Personnel Deployed</p>
              </div>
              <div className="">
                <h4 className="text-4xl font-black text-slate-900">100<span className="text-fuchsia-600">%</span></h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tighter">Compliant & Legal</p>
              </div>
            </div>

            <button className="group flex items-center gap-3 font-bold text-fuchsia-600 hover:text-fuchsia-800 transition-all">
              Learn more about our process 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="container mx-auto pt-24 pb-14 px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-24 text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with the <br /> Industry Leaders</h2>
              <p className="text-slate-400 text-lg mb-0 max-w-md">
                Accelerate your project timelines with reliable, skilled, and professional manpower solutions.
              </p>
            </div>
            <div className="lg:text-right">
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-fuchsia-600/30 hover:-translate-y-1">
                Contact Us Now
              </button>
            </div>
          </div>
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        </div>
      </section>

      {/* Our Sister Concern  */}
      <section>
        <OurSisterConcern></OurSisterConcern>
      </section>

    </div>
  );
}