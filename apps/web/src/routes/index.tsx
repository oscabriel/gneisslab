import { createFileRoute } from "@tanstack/react-router";

import { publicDocs } from "@/content/docs";
import { featuredServiceLinks } from "@/content/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "gneiss.run",
      },
      {
        name: "description",
        content:
          "Landing page and public docs for a compact split-role minilab with private self-hosted services.",
      },
    ],
  }),
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-8">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Gneiss</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            Public docs and private services for a compact minilab.
          </h1>
          <p className="max-w-3xl text-base/7 text-muted-foreground">
            Gneiss is a split-role homelab built around one compute node, one storage node, and one
            clean set of service URLs. This site explains how the stack works and links to the
            private `*.gneiss.run` surfaces for trusted users.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="underline underline-offset-4" href="/services">
            Browse services
          </a>
          <a className="underline underline-offset-4" href="/docs">
            Read the docs
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <section className="space-y-2 border p-4">
          <h2 className="text-lg font-semibold">Compute</h2>
          <p className="text-sm/7 text-muted-foreground">
            Interactive work, playback, and reverse proxy duties.
          </p>
          <p>
            Beelink SER9 MAX running Jellyfin, the service proxy, and day-to-day development
            tooling.
          </p>
        </section>
        <section className="space-y-2 border p-4">
          <h2 className="text-lg font-semibold">Storage</h2>
          <p className="text-sm/7 text-muted-foreground">
            Disks, shares, automation, and download workflows.
          </p>
          <p>
            ZimaBoard 2 with mirrored SSD app storage, HDD bulk storage, and the media automation
            stack.
          </p>
        </section>
        <section className="space-y-2 border p-4">
          <h2 className="text-lg font-semibold">Access</h2>
          <p className="text-sm/7 text-muted-foreground">
            One public site and one private service surface.
          </p>
          <p>
            The apex site is public. The private service subdomains are intended for trusted local
            and Tailnet access.
          </p>
        </section>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Featured services</h2>
          <p className="text-sm/7 text-muted-foreground">
            These are the main visitor-facing entry points. Remote use still depends on Tailnet
            authorization and the app-level access model.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredServiceLinks.map((service) => (
            <section className="space-y-3 border p-4" key={service.name}>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-sm/7 text-muted-foreground">{service.summary}</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {service.accessLabel}
                </p>
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
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Docs</h2>
          <p className="text-sm/7 text-muted-foreground">
            The docs are a curated public subset of the private lab notes. They cover architecture,
            hardware, software, and access without publishing direct internal addresses, ports, or
            credentials.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {publicDocs.map((doc) => (
            <section className="space-y-3 border p-4" key={doc.slug}>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{doc.title}</h3>
                <p className="text-sm/7 text-muted-foreground">{doc.description}</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Updated {doc.updated}
                </p>
                <a className="underline underline-offset-4" href={`/docs/${doc.slug}`}>
                  Open {doc.title}
                </a>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
