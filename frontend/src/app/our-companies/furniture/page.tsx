import { Hammer, Truck, Sofa, Ruler, Award, Star, PackageCheck, Layers, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FurnitureClientActions from '@/components/CompaniesClientComponents/FurnitureClient';

// --- Helper Components ---
function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
      <div className="h-12 w-12 bg-stone-50 text-stone-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold text-stone-900 mb-3">{title}</h4>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-3xl font-bold text-white tracking-tight">{number}</h4>
      <p className="text-stone-400 text-sm font-medium mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function FurnitureSectorPage() {
  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <Image
            fill
            priority
            src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg" 
            alt="Premium Furniture Craftsmanship" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/85"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Sofa size={14} /> Craftsmanship & Retail
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Precision in Every Detail: <br/>
              <span className="text-orange-500">Furniture & Fit-out Staffing</span>
            </h1>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-xl">
              From the factory floor to the customer's living room. We provide master carpenters, skilled assemblers, and professional installers for KSA's leading furniture brands.
            </p>
            
            <FurnitureClientActions />
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] grid grid-cols-2 gap-10">
              <StatBox number="850+" label="Master Carpenters" />
              <StatBox number="12k+" label="Monthly Installs" />
              <StatBox number="100%" label="Quality Assured" />
              <StatBox number="Tier 1" label="Partner Status" />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS SECTION */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Specialized Talent for Interior Sector</h2>
            <p className="text-stone-600 mb-8">
              The furniture industry demands a blend of physical strength and delicate precision. Our vetting process includes hands-on technical testing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-800 font-semibold">
                <PackageCheck className="text-orange-600" size={20} /> White-Glove Delivery
              </div>
              <div className="flex items-center gap-3 text-stone-800 font-semibold">
                <Ruler className="text-orange-600" size={20} /> Drawing Literacy
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <FeatureCard icon={Hammer} title="Factory Production" desc="Skilled woodworkers and CNC operators for mass manufacturing." />
            <FeatureCard icon={Layers} title="Custom Fit-Out" desc="Interior carpenters for high-end office and hotel cabinetry." />
            <FeatureCard icon={Truck} title="Delivery & Assembly" desc="Teams trained in customer service and complex home assembly." />
            <FeatureCard icon={Award} title="Quality Control" desc="Specialized inspectors for export-quality standards." />
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="bg-stone-50 py-24 px-6 border-y border-stone-200">
        <div className="container mx-auto">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row border border-stone-200 relative">
            {/* Image Container */}
            <div className="lg:w-1/2 h-[450px] lg:h-auto relative">
               <Image 
                 fill
                 src="https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg" 
                 alt="Furniture Assembly Team" 
                 className="object-cover"
               />
               <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-2 rounded-lg font-bold">
                  CASE STUDY
               </div>
            </div>
            
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-orange-500 fill-orange-500" />)}
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-6">Optimizing 400+ Installs</h3>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed italic">
                "Our partnership transformed our last-mile delivery. They provided technicians who represent our brand with professionalism."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-stone-900 flex items-center justify-center font-bold text-white">HL</div>
                <div>
                  <h5 className="font-bold text-stone-900 text-lg">Operations Manager</h5>
                  <p className="text-stone-500">Home Luxe Interiors, Riyadh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-stone-900 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="inline-block p-4 bg-orange-500/10 text-orange-500 rounded-3xl mb-8">
            <Sofa size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Scale Your Business Today</h2>
          <Link href="/contact" className="inline-flex px-12 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all items-center gap-3">
            Request a Proposal <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}