"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, User, Settings,Files, Banknote, Bell
} from "lucide-react";
import TopNavbar from "@/components/DashboardComponents/TopNavbar";
import SideNavbar from "@/components/DashboardComponents/SideNavbar";
import { BottomFooter } from "@/components/SharedComponents/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Documents", href: "/dashboard/documents", icon: Files },
    { name: "Payslips", href: "/dashboard/payslips", icon: Banknote },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell},
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="h-screen bg-[#F9FAFB] flex text-gray-700 relative">
      {/* Sidebar Navigation */}
     <SideNavbar 
        sidebarOpen={sidebarOpen} 
        menuItems={menuItems} 
        pathname={pathname} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavbar setSidebarOpen={setSidebarOpen} />

        <main className="p-4 lg:p-8 overflow-y-auto min-h-[calc(100vh-64px-64px)] flex-1">
          {children}
          
        </main>
     <BottomFooter/>
        
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" />
      )}
    </div>
  );
}