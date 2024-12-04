import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {QueryProvider} from "@/components/query-provider";
import {ClerkProvider} from "@clerk/nextjs";
import {Navbar} from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Full Stack Case-Study #2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <QueryProvider>
      <div className="flex w-full flex-col">
        <Navbar/>
        <main>{children}</main>
      </div>
    </QueryProvider>
    </body>
    </html>
    </ClerkProvider>
  );
}
