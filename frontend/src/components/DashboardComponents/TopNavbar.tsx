import { Bell, Menu, Search, User, Settings, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface TopNavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const session = useSession();

  const user = session.data?.user;
  const router = useRouter()

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 px-4 lg:px-8 flex items-center justify-between">
      {/* Left */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 text-gray-500"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 focus-within:bg-white focus-within:ring-2 focus-within:ring-fuchsia-500">
        <Search className="w-4 h-4 text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent border-none text-sm outline-none w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Notification */}
        <button className="p-2 text-gray-400 hover:text-fuchsia-500 relative cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-fuchsia-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile */}
        <button
          onClick={() => setOpen(!open)}
          className="h-9 w-9 rounded-full cursor-pointer bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-fuchsia-500 text-2xl font-bold"
        >
          {user?.imageUrl ? (
            <Image
              src={user?.imageUrl}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full"
            />
          ) : (
            user?.name?.charAt(0).toUpperCase()
          )}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-in fade-in zoom-in">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold text-gray-800">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>

            <ul className="py-1">
              <button
                onClick={()=>router.push("/dashboard/profile")}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                <User className="w-4 h-4" /> Profile
              </button>
              <button
                onClick={()=>router.push("/dashboard/settings")}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                <Settings className="w-4 h-4" /> Settings
              </button>
              <li
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopNavbar;
