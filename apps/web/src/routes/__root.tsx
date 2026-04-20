import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import Header from "@/components/header";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "gneiss.run",
      },
      {
        name: "description",
        content:
          "Public landing page and docs for the Gneiss minilab and its self-hosted services.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="grid min-h-svh grid-rows-[auto_1fr] bg-background">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
