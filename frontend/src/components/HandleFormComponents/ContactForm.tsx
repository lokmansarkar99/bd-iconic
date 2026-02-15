"use client"
import React, { useState } from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Inquiry Form</h2>
        <p className="text-slate-600">Please provide your details and our relationship manager will contact you shortly.</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900">Message Sent!</h3>
          <p className="text-emerald-700 mt-2">Thank you for reaching out. We will get back to you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-emerald-600 font-semibold underline">Send another message</button>
        </div>
      ) : (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <input required type="text" placeholder="e.g. Karim Ahmed" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#c800de] focus:bg-white transition-all outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Phone Number</label>
            <input required type="tel" placeholder="+880 17XX XXXXXX" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#c800de] focus:bg-white transition-all outline-none" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700">Subject</label>
            <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#c800de] focus:bg-white transition-all outline-none">
              <option>Corporate Manpower Supply</option>
              <option>Foreign Recruitment Inquiry</option>
              <option>Skill Development & Training</option>
              <option>General Support</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700">Your Message</label>
            <textarea required placeholder="Briefly describe your requirements..." rows={5} className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#c800de] focus:bg-white transition-all outline-none" />
          </div>
          <button type="submit" className="md:col-span-2 w-full bg-[#c800de] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-fuchsia-100 flex items-center justify-center gap-2">
            Submit Request <ChevronRight size={18} />
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;