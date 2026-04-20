import { createFileRoute } from "@tanstack/react-router";

import { operatorServiceLinks, visitorServiceLinks } from "@/content/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services | gneiss.run",
      },
      {
        name: "description",
        content:
          "Service directory for the Gneiss minilab, including visitor-facing and operator-facing endpoints.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
        <p className="max-w-3xl text-sm/7 text-muted-foreground">
          This is the canonical directory for the `*.gneiss.run` service endpoints. The links are
          public here so the address space is easy to understand, but most services are only useful
          on the trusted network or for users authorized on the Tailnet.
        </p>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Visitor-facing services</h2>
          <p className="text-sm/7 text-muted-foreground">
            These are the surfaces meant for actual use by trusted remote users. Remote access still
            depends on Tailnet authorization and each app&apos;s own sign-in model.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visitorServiceLinks.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator-facing services</h2>
          <p className="text-sm/7 text-muted-foreground">
            These links are included to make the stack legible as a system. They are not intended as
            public endpoints.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {operatorServiceLinks.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    name: string;
    href: string;
    summary: string;
    category: string;
    runsOn: string;
    accessLabel: string;
    accessNote: string;
  };
}) {
  return (
    <section className="space-y-3 border p-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-sm/7 text-muted-foreground">{service.summary}</p>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {service.category}
        </p>
        <p className="text-sm/7 text-muted-foreground">Runs on {service.runsOn}.</p>
        <p className="text-sm font-medium">{service.accessLabel}</p>
        <p className="text-sm/7 text-muted-foreground">{service.accessNote}</p>
        <a
          className="underline underline-offset-4"
          href={service.href}
          rel="noreferrer"
          target="_blank"
        >
          {service.href}
        </a>
      </div>
    </section>
  );
}
