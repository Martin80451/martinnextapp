// @ts-expect-error CSS is loaded by the bundler; TypeScript has no declaration for this import.
import "./globals.css";
import {
  isRouteErrorResponse,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  Outlet,
  useRouteError,
} from "react-router";
import { Header } from "../components/Header";
import { type ReactNode, Suspense } from "react";
import { Toaster } from "../components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/react-router/v8";
import NotFound from "./routes/notfound";

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

export function ErrorBoundary() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;

  if (status === 404) {
    return <NotFound />;
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1>{status} - Something went wrong</h1>
      <p>Please try again later.</p>
    </main>
  );
}
