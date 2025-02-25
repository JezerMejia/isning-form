import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isning Form",
  description: "Formulario sencillo con React y Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className={
            "mb-20 sm:mb-16 py-8 lg:py-12 flex flex-col gap-24 container mx-auto 2xl:max-w-7xl px-3"
          }
        >
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
