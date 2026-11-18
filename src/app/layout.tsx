import "./globals.css";
import {
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  Outlet,
} from "react-router";
import { Header } from "@/components/Header";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/react-router/v8";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: MetaFunction = () => {
  return [
    { title: "The Posts App" },
    { name: "description", content: "Next.js app for blog posts." },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  console.log("Am I on the server or client?");
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NuqsAdapter>
          <Header />
          {children}
          <Toaster />
        </NuqsAdapter>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
