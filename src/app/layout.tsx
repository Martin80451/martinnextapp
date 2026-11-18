import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Suspense, type ReactNode } from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Posts App",
  description: "Next.js app for blog posts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("Am I on the server or client?");
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
