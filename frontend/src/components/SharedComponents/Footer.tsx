"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {
    const pathname = usePathname();
  
    if(pathname === "/dashboard" || pathname.startsWith("/dashboard/")) return 
  
  return (
    <footer className="bg-sky-400 text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">
            BD ICONIC
            <span className="block text-sm font-light">BD ICONIC</span>
          </h2>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Suite: 8/A&B, LilyPond Center, 3, R K Mission Road,
                Motijheel, Dhaka-1000, Bangladesh
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope />
              info@bdiconicksa.com
            </li>

            <li className="flex items-center gap-2">
              <FaGlobe />
              www.bdiconicksa.com
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              Soudi Arab (Phone): +966 55 891 0390
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              Bangladesh (Phone): 01716 801 330
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-5">Navigation</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:translate-x-1 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Water Supply",
              "Petrol Pump",
              "Man Power Support",
              "Furniture Market",
              "Transport Service",
              "Information Technology",
            ].map((service) => (
              <li
                key={service}
                className="hover:translate-x-1 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & QR */}
        <div>
          <h3 className="font-semibold text-lg mb-5">Social Media</h3>

          <div className="flex gap-4 text-lg mb-6">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="cursor-pointer hover:scale-110 transition" />
            <FaPinterestP className="cursor-pointer hover:scale-110 transition" />
          </div>

          <h4 className="font-medium mb-3">Scan for QR</h4>

          <div className=" rounded-md w-fit">
            <Image
            width={288}
            height={96}
              src="/QR.jpg" // replace with your QR image path
              alt="QR Code"
              className="w-2xs h-24 object-contain"
            />
          </div>

          <p className="text-xs mt-3 leading-relaxed">
            To scan with your camera’s default photo mode, point your camera at a QR code.
          </p>
        </div>
      </div>
    

      {/* Bottom Bar */}
    <BottomFooter/>

      {/* Scroll To Top */}
      <button className="absolute bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-md hover:scale-110 transition">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

export const BottomFooter = () => {
  return  ( <div className="bg-fuchsia-600 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-white">
        <p>Copyright © 2025 BD ICONIC KSA. All Rights Reserved.  |  Designed and Developed By <span className="hover:underline"><Link href={"https://iconicdigitalsolution.com/"}><i>ICONIC SOFT LTD</i></Link></span></p> 

        <div className="flex gap-5">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms & Conditions</span>
          <span className="cursor-pointer hover:underline">Sitemap</span>
        </div>
      </div>)
}
