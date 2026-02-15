import OurSisterConcern from "@/components/HomeComponents/OurSisterConcern";
import Image from "next/image";
import React from "react";

// TypeScript Interfaces
interface TeamMember {
  name: string;
  role: string;
  category: string;
  bio: string;
  img: string;
  linkedin: string;
  email: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: "Ahmed Al-Zahrani", 
    role: "Chief Executive Officer", 
    category: "Executive",
    bio: "20+ years of experience in strategic manpower planning and industrial growth in KSA.",
    img: "https://www.shutterstock.com/image-photo/happy-confident-arabic-company-owner-260nw-2510267627.jpg",
    linkedin: "#",
    email: "ceo@company.com"
  },
  { 
    name: "Sarah Malik", 
    role: "Head of Recruitment", 
    category: "HR & Talent",
    bio: "Expert in sourcing top-tier talent for mega projects like NEOM and Red Sea Global.",
    img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/04/24/2076811-900830558.png?itok=70rGQlnX",
    linkedin: "#",
    email: "sarah@company.com"
  },
  { 
    name: "Yusuf Khan", 
    role: "Operations Manager", 
    category: "Operations",
    bio: "Specializes in logistical efficiency and large-scale workforce deployment.",
    img: "https://www.shutterstock.com/image-photo/arab-middle-eastern-businessman-office-600nw-2483373875.jpg",
    linkedin: "#",
    email: "yusuf@company.com"
  },
  { 
    name: "Layla Hassan", 
    role: "Legal Compliance Officer", 
    category: "Legal",
    bio: "Ensures all recruitment processes align with the latest Saudi Labor Laws.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    email: "legal@company.com"
  },
  { 
    name: "Omar Bakri", 
    role: "Technical Lead", 
    category: "Engineering",
    bio: "Oversees technical skill assessment for engineering and construction roles.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    email: "omar@company.com"
  },
  { 
    name: "Fatima Noor", 
    role: "Client Relations Manager", 
    category: "Sales",
    bio: "Building long-term partnerships with government and private sectors.",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    email: "fatima@company.com"
  },
  { 
    name: "Ahmed Al-Zahrani", 
    role: "Chief Executive Officer", 
    category: "Executive",
    bio: "20+ years of experience in strategic manpower planning and industrial growth in KSA.",
    img: "https://www.shutterstock.com/image-photo/happy-confident-arabic-company-owner-260nw-2510267627.jpg",
    linkedin: "#",
    email: "ceo@company.com"
  },
  { 
    name: "Sarah Malik", 
    role: "Head of Recruitment", 
    category: "HR & Talent",
    bio: "Expert in sourcing top-tier talent for mega projects like NEOM and Red Sea Global.",
    img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/04/24/2076811-900830558.png?itok=70rGQlnX",
    linkedin: "#",
    email: "sarah@company.com"
  },
];

export default function CorporatePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header with Background Image */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Office Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-fuchsia-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">Our Leadership Team</h1>
          <p className="text-slate-200 text-lg">
            Dedicated professionals working together to provide world-class manpower solutions 
            and driving the Vision 2030 of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-6 mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="relative h-52 w-full overflow-hidden">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 right-3">
                  <span className="bg-white/80 backdrop-blur-sm text-slate-800 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-tighter shadow-sm">
                    {member.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-fuchsia-600 transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-fuchsia-600 font-semibold text-xs mt-0.5">{member.role}</p>
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {member.bio}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex space-x-2.5">
                    <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-fuchsia-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a>
                    <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                  <button className="text-[10px] font-bold text-slate-400 group-hover:text-fuchsia-600 uppercase tracking-wider transition-colors">
                    Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="mt-24 max-w-5xl mx-auto px-6 py-12 bg-white rounded-[40px] shadow-sm border border-slate-100 flex flex-wrap justify-center items-center gap-12 grayscale opacity-70">
          <span className="font-bold text-slate-400 text-xl">Saudi Aramco</span>
          <span className="font-bold text-slate-400 text-xl">NEOM</span>
          <span className="font-bold text-slate-400 text-xl">RIYADH METRO</span>
          <span className="font-bold text-slate-400 text-xl">RED SEA GLOBAL</span>
      </section>

      <div>
        <OurSisterConcern />
      </div>
    </div>
  );
}