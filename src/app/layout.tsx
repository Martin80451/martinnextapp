import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Posts App",
  description: "Next.js app for blog posts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  console.log("Am I on the server or client?");
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
