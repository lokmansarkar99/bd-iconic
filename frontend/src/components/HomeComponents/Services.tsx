"use client"
import React from 'react';
import { Users, FileText, Globe, CreditCard, Shield, TrendingUp, Clock, Headphones } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Worker Recruitment & Onboarding",
      description: "Complete recruitment pipeline from candidate selection to deployment",
      features: [
        "International recruitment",
        "Pre-departure processing",
        "Contract management",
        "Training & orientation"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document & Visa Management",
      description: "Comprehensive documentation and visa processing services",
      features: [
        "Passport & visa processing",
        "Work permit management",
        "Document expiry tracking",
        "Automated notifications"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payroll & Salary Management",
      description: "Efficient salary collection, processing and disbursement",
      features: [
        "Salary collection on behalf",
        "Service charge calculation",
        "Multi-currency support",
        "Automated payslips"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Company Placement",
      description: "Deploy workers to multiple client companies seamlessly",
      features: [
        "Client company management",
        "Worker assignment tracking",
        "Performance monitoring",
        "Placement optimization"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Attendance & Timesheet",
      description: "Real-time attendance tracking with GPS integration",
      features: [
        "GPS-based check-in/out",
        "Mobile attendance app",
        "Timesheet approvals",
        "Overtime calculation"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Reports & Analytics",
      description: "Comprehensive business intelligence and reporting",
      features: [
        "Real-time dashboards",
        "Financial reports",
        "Compliance tracking",
        "Custom report builder"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Security",
      description: "Full regulatory compliance and data security",
      features: [
        "Audit trail logging",
        "GOSI compliance",
        "Data encryption",
        "Role-based access"
      ]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support & Grievance",
      description: "24/7 support system with ticketing and escalation",
      features: [
        "Multi-channel support",
        "Ticket management",
        "SLA tracking",
        "Complaint resolution"
      ]
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive manpower management solutions for international workforce deployment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-fuchsia-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 text-[#d838ed] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#d838ed] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#d838ed] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to streamline your manpower management?
            </h3>
            <p className="mb-6 text-fuchsia-100">
              Get started with our comprehensive platform today
            </p>
            <button className="bg-white text-[#d838ed] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;