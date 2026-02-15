'use client';

import Image from "next/image";
import Link from "next/link";
import { Truck, ShieldCheck, Users, MapPinned, ArrowRight, CheckCircle, Navigation } from 'lucide-react';

export default function TransportSectorPage() {
  return (
    <div className="bg-white">
      
      {/* ================= HERO SECTION (Updated Structure) ================= */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            width={2074}
            height={600} 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2074&auto=format&fit=crop" 
            alt="Logistics and Fleet Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Truck size={14} /> Logistics & Supply Chain
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Driving the Kingdom: <br/>
              <span className="text-amber-500">Fleet & Logistics Solutions</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
              From heavy haulage to last-mile delivery, we provide certified drivers and fleet personnel who keep Saudi Arabia's supply chain moving safely and efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors">
                Request Staffing
              </Link>
              <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors">
                View Compliance
              </button>
            </div>
          </div>
          
          {/* Right Side Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-8">
              <StatBox number="2,500+" label="Certified Drivers" />
              <StatBox number="180+" label="Fleets Managed" />
              <StatBox number="99.9%" label="Safety Record" />
              <StatBox number="24/7" label="Support Desk" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROLES & CAPABILITIES ================= */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Comprehensive Transport Staffing</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We source and manage specialized personnel for every link in the logistics chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoleCard 
            icon={Navigation} 
            title="Heavy Truck Drivers" 
            desc="Certified Class-A license holders for long-haul and regional transport."
          />
          <RoleCard 
            icon={MapPinned} 
            title="Delivery Specialists" 
            desc="Last-mile experts trained in GPS tracking and professional customer service."
          />
          <RoleCard 
            icon={Users} 
            title="Fleet Managers" 
            desc="Experienced dispatchers to optimize routes and monitor vehicle health."
          />
          <RoleCard 
            icon={ShieldCheck} 
            title="Safety Officers" 
            desc="Regulatory compliance experts focusing on Muroor and TGA standards."
          />
        </div>
      </section>

      {/* ================= COMPLIANCE SECTION ================= */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Regulatory & Safety Excellence</h2>
            <p className="text-slate-600 leading-relaxed">
              Transport in the Kingdom requires strict adherence to dynamic regulations. We handle the complexity of licensing and training so your operations remain uninterrupted.
            </p>
            <ul className="space-y-4">
              <ListItem text="TGA (Transport General Authority) compliant staffing." />
              <ListItem text="Automatic license renewal and medical tracking." />
              <ListItem text="Defensive driving and hazardous material training." />
              <ListItem text="Nitaqat and Saudization strategy support." />
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
             <Image 
                fill
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Hub"
                className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Scale Your Fleet?</h2>
        <p className="text-slate-600 text-lg mb-8">
          Join the leading transport companies in Saudi Arabia that rely on our manpower to keep their wheels turning.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
           Get a Custom Quote <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- Internal Helper Components ---

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-3xl font-bold text-white tracking-tight">{number}</h4>
      <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function RoleCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle size={20} className="text-amber-500 shrink-0" />
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}