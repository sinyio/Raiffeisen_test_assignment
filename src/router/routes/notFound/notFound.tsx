import { NotFound } from "@pages/NotFound";
import { type RouteObject } from "react-router-dom";

export const notFoundRoute: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];
