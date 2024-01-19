import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";
import TopNavBar from "@/components/main/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my portfolio",
  description: "this is testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <TopNavBar />
        <NavBar />
        <StarCanvas />

        {children}
        <Footer />
      </body>
    </html>
  );
}
