import Footer from "@/components/SharedComponents/Footer";
import Image from "next/image";
import React from "react";


const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <header className="sticky top-0 z-50">

          {/* <NavBar/> */}
          </header>
    
    <div className="min-h-[65vh] w-full flex bg-gray-50">
      
      {/* LEFT SIDE (Brand / Visual) */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-white px-16 py-10">
        <div className="w-full max-w-lg text-center">
          {/* Image */}
          <Image
          width={280}
          height={120}
            src="/auth2.png"
            alt="BD Iconic"
            className="mx-auto mb-10 max-h-72 object-contain"
          />

          {/* Brand text */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your journey abroad <br />
            <span className="text-fuchsia-500">starts with BD Iconic</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base">
            We provide reliable visa processing with clear guidance and
            professional support. Track your application and move confidently
            toward your international goals.
          </p>

          {/* Divider */}
          <div className="mt-8 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-fuchsia-500"></span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Form Area) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 md:px-12 bg-gray-50 py-10">
        {children}
      </div>
    </div>
    </div>
  );
};

export default AuthLayout;
