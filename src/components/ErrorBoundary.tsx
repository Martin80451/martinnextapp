"use client";
import type { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorAlert } from "./ErrorAlert";

import { FallbackProps } from "react-error-boundary";
import { ComponentType } from "react";

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorAlert as ComponentType<FallbackProps>}
      onError={(error, info) => {
        console.error("Unexpected error", {
          error,
          info,
        });
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
