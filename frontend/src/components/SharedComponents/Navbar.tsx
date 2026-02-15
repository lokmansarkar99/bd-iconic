"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react"; 

const NavBar: React.FC = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Our Companies", href: "/our-companies" },

    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },

    { name: "Contact", href: "/contact" },
  ];

  const aboutSubMenu = [
    { name: "Our Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Our Companies", href: "/our-companies" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Why Choose Us", href: "/why-choose-us" },
  ];

  const companiesSubMenu = [
    { name: "Water Supply", href: "/our-companies/water-supply" },
    { name: "Petrol Pump", href: "/our-companies/petrol-pump" },
    { name: "Furniture", href: "/our-companies/furniture" },
    { name: "Transport", href: "/our-companies/transport" },
    { name: "Man Power", href: "/our-companies/man-power" },

  ];


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);


  const session = useSession();
  console.log(session);

  const isLoggedIn = session && session.status === "authenticated";

  const user = session.data?.user;

  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path;
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/"))
    return <></>;

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <div className="lg:hidden relative mr-2">
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>

              {/* Mobile Menu Dropdown Content */}
              {isMobileMenuOpen && (
                <ul className="absolute top-12 left-0 mt-3 w-52 p-2 shadow-lg bg-white rounded-lg flex flex-col gap-2 border border-gray-100">
                  {menuItems.map((item) =>
                    item.name === "About Us" ? (
                      <li key={item.name}>
                        <button
                          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                          className="w-full flex justify-between items-center px-4 py-2 rounded-md text-gray-700 hover:text-fuchsia-500"
                        >
                          About Us

                        </button>

                        {isMobileDropdownOpen && (
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>
                              <Link
                                href="/about"
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500 rounded-md"
                              >
                                About Page
                              </Link>
                            </li>
                            {aboutSubMenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500 rounded-md"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (

                      item.name === "Our Companies" ? (
                        <li key={item.name}>
                          <button
                            onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                            className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            Our Companies
                          </button>

                          {isCompaniesOpen && (
                            <ul className="ml-4 mt-1 space-y-1">
                              <li>
                                <Link
                                  href="/our-companies"
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500 rounded-md"
                                >
                                  Companies Page
                                </Link>
                              </li>

                              {companiesSubMenu.map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500 rounded-md"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ) :
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 rounded-md hover:text-fuchsia-500 ${isActive(item.href)
                              ? "text-fuchsia-500 font-medium"
                              : "text-gray-700"
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                    )
                  )}

                </ul>
              )}
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="h-16 w-16 flex items-center justify-center"
            >
              <Image
                width={64}
                height={64}
                className="w-full h-auto object-contain"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* ============================== */}
          {/* Navbar Center (Desktop)   */}
          {/* ============================== */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center space-x-2 px-1">
              {menuItems.map((item) =>
                item.name === "About Us" ? (
                  <li key={item.name} className="relative group">
                    {/* Main Link */}
                    <Link
                      href="/about"
                      className={`px-4 py-2 rounded-md flex items-center gap-1 hover:bg-gray-100 transition ${isActive("/about")
                        ? "text-fuchsia-500 font-semibold"
                        : "text-gray-700"
                        }`}
                    >
                      About Us
                    </Link>

                    {/* Hover Dropdown */}
                    <ul className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      {aboutSubMenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  item.name === "Our Companies" ? (
                    <li key={item.name} className="relative group">
                      <Link
                        href="/our-companies"
                        className={`px-4 py-2 rounded-md flex items-center gap-1 hover:text-fuchsia-500 transition ${pathname.startsWith("/our-companies")
                          ? "text-fuchsia-500 font-semibold"
                          : "text-gray-700"
                          }`}
                      >
                        Our Companies

                      </Link>

                      {/* Hover Dropdown */}
                      <ul className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        {companiesSubMenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-fuchsia-500"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-md transition-colors hover:text-fuchsia-500 ${isActive(item.href)
                          ? "text-fuchsia-500 font-semibold"
                          : "text-gray-700"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )
              )}

            </ul>
          </div>

          {/* ============================== */}
          {/* Navbar End (Right)            */}
          {/* ============================== */}
          <div className="flex items-center relative">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-500 font-semibold hover:bg-fuchsia-50 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="ml-2.5 px-4 py-2 rounded-lg bg-fuchsia-500 text-white font-semibold hover:bg-fuchsia-600 transition shadow-sm"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Avatar */}
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="h-9 w-9 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-fuchsia-500 text-2xl font-bold"
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
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-52 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    <ul className="py-1">
                      <li>
                        <Link
                          href="dashboard/profile"
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          onClick={() => signOut({ callbackUrl: "/" })}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
