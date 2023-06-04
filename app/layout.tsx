"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.variable}>
        <main className="font-mont bg-light w-full min-h-screen">
          <Navbar />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
          <Footer />
        </main>
      </body>
    </html>
  );
}
