import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-inter">
      <body>
        <div className="min-h-screen bg-[#121212] text-gray-200 flex">
          <Navbar />
          <div className="w-full overflow-x-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
