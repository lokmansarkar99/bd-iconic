import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/SharedComponents/Footer";
import NavBar from "@/components/SharedComponents/Navbar";
import AuthProvider from "@/provider/AuthProvider"


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Man Power Management System",
  description: "Manage your workforce efficiently with our platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <header className="sticky top-0 z-50">
          <NavBar/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
    </AuthProvider>
  );
}
