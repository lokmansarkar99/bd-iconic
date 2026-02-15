'use client';

import { Droplets, Truck, FlaskConical, Settings, BadgeCheck, Thermometer, Box, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WaterSupplySectorPage() {
  return (
    <div className="bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
          width={2074}
          height={600}
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Water Bottling Factory Production Line" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-cyan-950/90 to-cyan-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Droplets size={14} /> Utilities & Manufacturing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pure Reliability: <br/>
              <span className="text-cyan-400">Staffing for Water Supply</span>
            </h1>
            <p className="text-cyan-100 text-lg mb-8 leading-relaxed max-w-xl">
              From high-speed bottling lines to heavy transport logistics. We provide medically-screened, Balady-certified manpower for Saudi Arabia's water infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/50">
                Staff My Facility
              </Link>
              <Link href="/services" className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-colors">
                View Capabilities
              </Link>
            </div>
          </div>
          
          {/* Right Side Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl grid grid-cols-2 gap-8">
              <StatBox number="3,500+" label="Workers Deployed" />
              <StatBox number="100%" label="Health Card Compliant" />
              <StatBox number="12" label="Factories Managed" />
              <StatBox number="24hr" label="Logistics Support" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE & ROLES ================= */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Hygiene & Safety are Non-Negotiable</h2>
           <p className="text-slate-600 text-lg">
             In the water industry, a single contamination risk can shut down a plant. We prioritize strict medical screening and technical competence.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
           {/* Feature 1 */}
           <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
              <BadgeCheck size={40} className="text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Balady Health Cards</h3>
              <p className="text-slate-600 leading-relaxed">
                Every worker deployed to production zones arrives with valid medical clearance and municipal health cards, renewed automatically by our HR team.
              </p>
           </div>
           {/* Feature 2 */}
           <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <Thermometer size={40} className="text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Heat Stress Management</h3>
              <p className="text-slate-600 leading-relaxed">
                For delivery drivers and outdoor technicians, we implement strict work-rest cycles and hydration protocols to maintain productivity in Saudi summers.
              </p>
           </div>
           {/* Feature 3 */}
           <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <Settings size={40} className="text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Training</h3>
              <p className="text-slate-600 leading-relaxed">
                 Our machine operators are pre-vetted for experience with automated filling lines (Krones, Sidel) to minimize downtime during onboarding.
              </p>
           </div>
        </div>

        {/* Roles Grid */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-cyan-500 pl-4">Key Roles We Supply</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <RoleCard icon={Truck} title="Tanker Drivers" desc="Heavy license holders, route optimization trained." />
          <RoleCard icon={Settings} title="Line Operators" desc="Bottling, labeling, and packaging machinery." />
          <RoleCard icon={FlaskConical} title="Lab Technicians" desc="Water quality testing (pH, TDS) and sampling." />
          <RoleCard icon={Box} title="Warehouse Crew" desc="Forklift operators and inventory loaders." />
        </div>
      </section>

      {/* ================= PARTNER SPOTLIGHT ================= */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase mb-4">
                 <ShieldCheck size={20} /> Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 Scaling Production for <br/>
                 <span className="text-white border-b-4 border-cyan-500">PureLife Waters</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                 During the Hajj season peak, demand for bottled water spikes by 300%. PureLife needed to add a third shift immediately without compromising quality.
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-1 bg-cyan-500 rounded-full"></div>
                    <div>
                       <h4 className="text-xl font-bold">48-Hour Deployment</h4>
                       <p className="text-slate-400 text-sm">Deployed 50 machine operators within 2 days.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-1 bg-blue-500 rounded-full"></div>
                    <div>
                       <h4 className="text-xl font-bold">Zero Rejections</h4>
                       <p className="text-slate-400 text-sm">100% of staff passed medical & municipality checks.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Quote Card */}
           <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl relative">
              <span className="text-8xl text-cyan-500/20 font-serif absolute top-4 left-6">"</span>
              <p className="text-xl italic text-slate-200 relative z-10 mb-6 leading-relaxed">
                 Finding qualified technicians who understand modern bottling lines is difficult. Their team didn't just send laborers; they sent skilled operators who hit the ground running.
              </p>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center font-bold text-lg">
                    A
                 </div>
                 <div>
                    <h5 className="font-bold">Ahmed Al-Sayed</h5>
                    <p className="text-cyan-400 text-sm">Plant Manager, PureLife</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Operating a Bottling Plant or Delivery Fleet?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Let us handle the visa processing, medical screenings, and accommodation so you can focus on production targets.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-xl">
             Get a Workforce Proposal <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}

// --- Helper Components ---

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h4 className="text-3xl font-bold text-white">{number}</h4>
      <p className="text-cyan-100 text-sm mt-1">{label}</p>
    </div>
  );
}

function RoleCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-cyan-300 transition-colors shadow-sm group">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition-colors">
          <Icon size={20} />
        </div>
        <h4 className="font-bold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm text-slate-500 pl-1">{desc}</p>
    </div>
  );
}