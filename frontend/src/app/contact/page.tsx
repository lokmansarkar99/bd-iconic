import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Clock, MessageSquare, Briefcase } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/HandleFormComponents/ContactForm'; 
import OurSisterConcern from '@/components/HomeComponents/OurSisterConcern';

const ContactPage = () => {
  
  const faqs = [
    { 
      q: "What industries do you provide manpower for?", 
      a: "We specialize in Construction, RMG (Ready-Made Garments), IT Services, and Healthcare professionals for both local and international markets." 
    },
    { 
      q: "Where is your Motijheel office located exactly?", 
      a: "Our headquarters is situated in the heart of Motijheel C/A, near the Shapla Chattar area, making it easily accessible for business clients." 
    },
    { 
      q: "How do you verify the skills of your candidates?", 
      a: "Every candidate undergoes a multi-stage vetting process including background checks, practical skill assessments, and medical clearance." 
    },
    { 
      q: "Can I apply for a job directly through this website?", 
      a: "Yes, you can use the contact form to send your query, or visit our dedicated 'Careers' portal to upload your CV directly." 
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop" 
            alt="Global Recruitment and Support"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#c800de] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-slate-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">Get in Touch with Us</h1>
          <p className="text-slate-200 text-lg">
            Have questions about our recruitment process or need tailored manpower solutions? 
            Our team is here to bridge the gap between talent and opportunity.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="container mx-auto px-6 mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Phone className="w-6 h-6" />, title: "Support Line", detail: "+880 2-9550000", sub: "Sun - Thu, 9am - 6pm" },
            { icon: <Mail className="w-6 h-6" />, title: "Business Email", detail: "info@dhakamanpower.com", sub: "Response within 12 hours" },
            { icon: <MapPin className="w-6 h-6" />, title: "Motijheel HQ", detail: "Motijheel C/A, Dhaka 1000", sub: "Near Shapla Chattar" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-14 h-14 bg-fuchsia-50 text-[#c800de] rounded-2xl flex items-center justify-center mb-5 rotate-3 group-hover:rotate-0 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="text-slate-900 font-semibold">{item.detail}</p>
              <p className="text-slate-500 text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto pt-24 pb-12 px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Form Section */}
          <section className="lg:col-span-7">
            
            {/* Calling Client Component */}
            <ContactForm />

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#c800de]">15k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Staff Deployed</div>
              </div>
              <div className="text-center border-x border-slate-100">
                <div className="text-2xl font-bold text-[#c800de]">1000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Client Base</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#c800de]">24/7</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Local Support</div>
              </div>
            </div>
          </section>

          {/* Right Side: FAQ & Information */}
          <section className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-[#c800de]" />
                Common Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl transition-all duration-300 open:bg-white open:shadow-lg">
                    <summary className="list-none p-5 font-bold flex justify-between items-center cursor-pointer hover:text-[#c800de]">
                      <span className="pr-4">{f.q}</span>
                      <ChevronRight className="group-open:rotate-90 transition-transform text-slate-400" size={18} />
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Operational Info Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="text-[#c800de]" size={20} /> Operational Hours
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Sunday — Thursday:</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Saturday:</span>
                    <span className="text-white font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between text-slate-500">
                    <span>Friday:</span>
                    <span className="font-medium">Closed (Weekly Holiday)</span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-fuchsia-500/10 rounded-xl border border-fuchsia-500/20">
                  <p className="text-xs leading-relaxed text-fuchsia-100">
                    <strong>Note:</strong> For emergency staffing requirements outside of office hours, please contact our 24/7 hotline.
                  </p>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Briefcase size={120} />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Our Sister Concern  */}
      <section>
        <OurSisterConcern></OurSisterConcern>
      </section>
    </div>
  );
};

export default ContactPage;