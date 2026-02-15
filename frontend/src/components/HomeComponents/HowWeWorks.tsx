"use client"
import React from 'react';
import { Users, FileCheck, Building, Banknote } from 'lucide-react';

// 1. Type Definition
interface WorkStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// 2. Data Source
const steps: WorkStep[] = [
  {
    id: 1,
    title: 'Recruitment & Onboarding',
    description: 'We manage the candidate pipeline, conduct interviews, issue offer letters, and finalize contracts for new hires.', 
    icon: Users,
  },
  {
    id: 2,
    title: 'Visa & Travel Management',
    description: 'We handle visa processing, stamping, and passport tracking with automated expiry alerts to ensure compliance.',
    icon: FileCheck,
  },
  {
    id: 3,
    title: 'Client Deployment',
    description: 'Workers are deployed to client companies where their daily attendance and timesheets are tracked digitally.',
    icon: Building,
  },
  {
    id: 4,
    title: 'Payroll & Remittance',
    description: 'We collect gross salaries from clients, deduct service charges, and securely transfer the net pay to workers.',
    icon: Banknote,
  },
];

const HowWeWorks: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            How We Works
          </h2>
          <div className="mt-2 h-1.5 w-16 mx-auto rounded-full"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-black">
            A seamless end-to-end manpower management workflow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Connector Line (Large Screens Only) */}
          <div 
            className="absolute top-12 left-0 hidden h-0.5 w-full bg-gray-100 lg:block" 
            aria-hidden="true" 
          />

          {steps.map((step) => (
            <div key={step.id} className="group relative flex flex-col items-center text-center">
              
              {/* Icon Container (Number Badge removed) */}
              <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#d838ed] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <step.icon className="h-10 w-10 text-white" aria-hidden="true" />
              </div>

              {/* Text Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;