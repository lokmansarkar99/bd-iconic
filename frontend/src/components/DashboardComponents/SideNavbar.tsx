import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, LogOut } from 'lucide-react'; // adjust your icon imports

// Define the shape of a menu item
interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SideNavbarProps {
  sidebarOpen: boolean;
  menuItems: MenuItem[];
  pathname: string;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ sidebarOpen, menuItems, pathname }) => {
  return (
     <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full">
          <div className="h-16 w-full flex items-center px-6 border-b border-gray-100">
             {/* Logo */}
            <Link href="/" className="h-24 w-24 flex items-center justify-center">
              <Image width={96} height={96} className="w-full h-auto object-contain" src="/auth.png" alt="Logo" />
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === item.href 
                    ? "bg-fuchsia-50 text-fuchsia-600" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </div>
                {pathname === item.href && <ChevronRight className="w-4 h-4" />}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-100">
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-500 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
  )
}

export default SideNavbar
