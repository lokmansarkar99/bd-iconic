'use client';

import { Fuel, ShieldCheck, Clock, Users, CheckCircle2, Droplets, Car, Coffee, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PetrolStationSectorPage() {
  return (
    <div className="bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            width={2074}
            height={600} 
            src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=2074&auto=format&fit=crop" 
            alt="Petrol Station Attendant at night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Fuel size={14} /> Energy & Retail Sector
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Fueling the Kingdom: <br/>
              <span className="text-fuchsia-500">24/7 Manpower Solutions</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
              We provide trained, safety-certified attendants and retail staff for Saudi Arabia's leading fuel station networks. Ensuring operational continuity and customer service excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-fuchsia-600 text-white rounded-xl font-bold hover:bg-fuchsia-700 transition-colors">
                Request Staffing
              </Link>
              <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors">
                View Safety Standards
              </button>
            </div>
          </div>
          
          {/* Right Side Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-8">
              <StatBox number="1,200+" label="Attendants Deployed" />
              <StatBox number="45" label="Stations Managed" />
              <StatBox number="100%" label="Balady Compliant" />
              <StatBox number="24/7" label="Shift Coverage" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE CHALLENGE & SOLUTION ================= */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Challenge: Safety & Reliability</h2>
              <p className="text-slate-600 leading-relaxed">
                Fuel retail is a high-stakes environment. A single untrained worker can cause safety hazards or inventory losses. Furthermore, the 24-hour nature of the business means high attrition rates can lead to station closures.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-fuchsia-600" />
                Our Safety-First Approach
              </h3>
              <ul className="space-y-3">
                <ListItem text="Civil Defense approved fire safety training for all staff." />
                <ListItem text="Hazardous material handling certification." />
                <ListItem text="Emergency spill response protocols." />
                <ListItem text="Strict uniform and hygiene compliance." />
              </ul>
            </div>
          </div>

          {/* Right: Roles We Supply */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Roles We Supply</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RoleCard icon={Droplets} title="Pump Attendants" desc="Fueling, payment handling, safety checks." />
              <RoleCard icon={Coffee} title="Store Cashiers" desc="POS operation, inventory stocking." />
              <RoleCard icon={Car} title="Car Wash Crew" desc="Detailing, polishing, machinery operation." />
              <RoleCard icon={Users} title="Station Supervisors" desc="Shift management, cash reconciliation." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER SPOTLIGHT ================= */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row items-center justify-between mb-12">
             <div>
                <h2 className="text-3xl font-bold text-white">Partner Spotlight</h2>
                <p className="text-slate-400 mt-2">Delivering excellence for Al-Dawaa Fuels Co.</p>
             </div>
             {/* Logo Placeholder */}
             <div className="mt-6 md:mt-0 h-16 px-8 bg-white rounded-xl flex items-center justify-center font-bold text-xl tracking-widest text-slate-800">
                FUEL<span className="text-fuchsia-600">CO.</span>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                 <div className="h-12 w-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-6 text-white">
                    <Clock size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Zero Downtime</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   We implemented a "Shadow Shift" system where standby workers are ready to deploy within 60 minutes, ensuring pumps never stop.
                 </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                 <div className="h-12 w-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6 text-white">
                    <ShieldCheck size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">100% Safety Record</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Over 3 years of partnership, our deployed staff have maintained a perfect safety record with zero major incidents.
                 </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                 <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center mb-6 text-white">
                    <Users size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">High Retention</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Through fair compensation and good accommodation, we reduced worker turnover by 40% compared to industry average.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Staff for your Petrol Station Chain?</h2>
        <p className="text-slate-600 text-lg mb-8">
          We handle the visas, the training, the accommodation, and the payroll. You focus on expanding your network.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-600 text-white rounded-xl font-bold hover:bg-fuchsia-700 transition-colors shadow-xl shadow-fuchsia-600/20">
           Get a Corporate Quote <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}

// --- Helper Components ---

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h4 className="text-3xl font-bold text-white">{number}</h4>
      <p className="text-slate-400 text-sm mt-1">{label}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 size={20} className="text-fuchsia-600 shrink-0 mt-0.5" />
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}

function RoleCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 hover:border-fuchsia-200 transition-colors shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-fuchsia-50 text-fuchsia-600 rounded-lg">
          <Icon size={18} />
        </div>
        <h4 className="font-bold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm text-slate-500 pl-11">{desc}</p>
    </div>
  );
}