import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const urbanist = Urbanist({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={urbanist.className} >
        <NavBar />
        <div className="pl-0 sm:pl-14 2xl:pl-[296px]">
          {children}
        </div>
      </body>
    </html>
  );
}
