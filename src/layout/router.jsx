import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import ErrorPage from "../error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "suspense",
        lazy: async () => {
          let { Suspense } = await import("../routes/suspense");
          return { Component: Suspense };
        },
      },
      {
        path: "transition",
        lazy: async () => {
          let { Transition } = await import("../routes/transition");
          return { Component: Transition };
        },
      },
      {
        path: "context-api",
        lazy: async () => {
          let { Root: ContextRoot } = await import("../routes/context-api");
          return { Component: ContextRoot };
        },
      },
      {
        path: "flexbox-grid",
        lazy: async () => {
          let { FlexboxGridExample } = await import("../routes/flexbox-grid");
          return { Component: FlexboxGridExample };
        },
      },
    ],
  },
]);
