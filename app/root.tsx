// @ts-expect-error CSS is loaded by the bundler; TypeScript has no declaration for this import.
import "./globals.css";
import {
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  Outlet,
} from "react-router";
import { Header } from "../components/Header";
import { type ReactNode, Suspense } from "react";
import { Toaster } from "../components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/react-router/v8";

import { cn } from "../lib/utils";

export const metadata: MetaFunction = () => {
  return [
    { title: "The Posts App" },
    { name: "description", content: "Next.js app for blog posts." },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  console.log("Am I on the server or client?");
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-mono")}>
      <body className="min-h-full flex flex-col">
        <NuqsAdapter>
          <Suspense fallback={<p>Loading...</p>}>
            <Header />
            {children}
            <Toaster />
          </Suspense>
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
