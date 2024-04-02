import { Suspense as RSuspense } from "react";
import Pokemons from "./pokemons";
import { Button } from "@mui/material";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

export function Transition() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              There was an error!{" "}
              <Button onClick={() => resetErrorBoundary()}>Try again</Button>
              <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
          )}
          onReset={reset}
        >
          <RSuspense fallback={<div>Loading pokemons...</div>}>
            <Pokemons />
          </RSuspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

