import {
  Building2,
  Clock,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <section className="h-[300px] bg-linear-to-b from-white to-slate-100 border-b border-slate-200 flex items-center text-center">
        <div className="max-w-4xl mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Built on Trust, Compliance and Ethical Recruitment
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            We help organizations scale confidently with legally compliant,
            transparent, and fast workforce solutions.
          </p>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className=" py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            The Foundation of Our Client Trust
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-14">
            We combine regulatory compliance, ethical recruitment, and fast
            mobilization to deliver reliable workforce solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-10 px-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <ShieldCheck
                size={42}
                className="text-fuchsia-600 mx-auto mb-6"
              />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                100% Musaned Compliant
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We strictly follow Ministry of Human Resources regulations,
                ensuring legal safety for both employers and workers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Users
                size={42}
                className="text-fuchsia-600 mx-auto mb-6"
              />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Ethical Recruitment
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Our zero-cost-to-worker policy creates motivated, reliable, and
                debt-free professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Clock
                size={42}
                className="text-fuchsia-600 mx-auto mb-6"
              />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Rapid Mobilization
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Pre-vetted talent pools allow us to deploy manpower faster than
                industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center bg-fuchsia-600 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 text-fuchsia-500/30">
                <Building2 size={200} />
              </div>
              <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to build your workforce?</h2>
              <p className="text-fuchsia-100 text-lg mb-8 leading-relaxed relative z-10">
                Whether you need 10 specialized technicians or 1,000 general workers, our team is ready to provide a tailored staffing solution.
              </p>
              <ul className="space-y-4 relative z-10 font-medium text-fuchsia-50">
                <li className="flex items-center gap-3"><ShieldCheck size={20} /> Free Initial Consultation</li>
                <li className="flex items-center gap-3"><Clock size={20} /> Response within 24 Hours</li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="p-12 lg:p-16">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Request Staffing Consultation</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none bg-slate-50" />
                  <input type="text" placeholder="Last Name" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none bg-slate-50" />
                </div>
                <input type="text" placeholder="Company Name" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none bg-slate-50" />
                <input type="email" placeholder="Business Email" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none bg-slate-50" />
                <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent outline-none bg-slate-50 text-slate-500">
                  <option>Select Industry</option>
                  <option>Construction</option>
                  <option>Oil & Gas</option>
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                </select>
                <button type="submit" className="w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-600/20">
                  Send Request <Send size={18} />
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">By submitting, you agree to our privacy policy.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
