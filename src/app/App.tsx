import { FC } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import "@styles/normalize.css";
// import "@styles/App.css";

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
