import { createFileRoute, Link } from "@tanstack/react-router";

import { publicDocs } from "@/content/docs";
import { featuredServiceLinks } from "@/content/services";

// const title = `
//  ██████╗ ███╗   ██╗███████╗██╗███████╗███████╗    ██╗      █████╗ ██████╗
// ██╔════╝ ████╗  ██║██╔════╝██║██╔════╝██╔════╝    ██║     ██╔══██╗██╔══██╗
// ██║  ███╗██╔██╗ ██║█████╗  ██║███████╗███████╗    ██║     ███████║██████╔╝
// ██║   ██║██║╚██╗██║██╔══╝  ██║╚════██║╚════██║    ██║     ██╔══██║██╔══██╗
// ╚██████╔╝██║ ╚████║███████╗██║███████║███████║    ███████╗██║  ██║██████╔╝
//  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝╚══════╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝ `;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "GNEISS LAB",
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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6">

      {/* ASCII Banner Section */}
      <section className="pt-4">
        <h3 className="font-mono text-sm font-semibold">Lab Banner</h3>
        <div className="section-divider mt-1" />

        <div className="grid gap-6 pt-4 lg:grid-cols-[1fr_1fr]">
          {/* Left: Banner announcement */}
          <div className="flex items-start gap-3">
            <span className="inline-block bg-accent-red px-1.5 py-0.5 font-mono text-[10px] font-bold text-cream">
              NEW
            </span>
            <div className="space-y-2">
              <p className="text-sm font-medium">GNEISS LAB v1 is online!</p>
              <p className="text-sm text-ink-muted">
                Split-role architecture with compute and storage nodes, Tailnet-first access, and a
                complete media automation stack.
              </p>
              <Link to="/docs" className="btn-secondary mt-2 inline-flex">
                GL-01 Lab Overview →
              </Link>
            </div>
          </div>

          {/* Right: ASCII art with shadow effect */}
          <div className="overflow-x-auto">
            <div className="relative inline-block">
              {/* Main title */}
              {/*<pre
                className="relative font-mono text-[0.4rem] leading-none text-ink sm:text-[0.5rem] md:text-[0.6rem]"
                aria-label="GNEISS LAB"
              >
                {title}
              </pre>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - Compact Table */}
      <section className="pt-2">
        <h3 className="font-mono text-sm font-semibold">Featured Services</h3>
        <div className="section-divider mt-1" />

        <table className="table-catalog mt-3">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Service</th>
              <th className="hidden sm:table-cell">Description</th>
              <th>Access</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {featuredServiceLinks.map((service, index) => (
              <tr key={service.name}>
                <td>
                  <span className="sku-badge">SV-{String(index + 1).padStart(3, "0")}</span>
                </td>
                <td className="font-medium">{service.name}</td>
                <td className="hidden text-xs text-ink-muted sm:table-cell">{service.summary}</td>
                <td className="text-xs text-ink-muted">{service.accessLabel}</td>
                <td>
                  <a href={service.href} target="_blank" rel="noreferrer" className="btn-primary">
                    OPEN →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Documentation - Compact Table */}
      <section className="pt-2">
        <h3 className="font-mono text-sm font-semibold">Documentation</h3>
        <div className="section-divider mt-1" />

        <table className="table-catalog mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Document</th>
              <th className="hidden sm:table-cell">Description</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {publicDocs.map((doc, index) => (
              <tr key={doc.slug}>
                <td>
                  <span className="sku-badge">DOC-{String(index + 1).padStart(2, "0")}</span>
                </td>
                <td className="font-medium">{doc.title}</td>
                <td className="hidden max-w-xs truncate text-xs text-ink-muted sm:table-cell">
                  {doc.description}
                </td>
                <td className="font-mono text-xs text-ink-muted">{doc.updated}</td>
                <td>
                  <Link
                    to="/docs/$slug"
                    params={{ slug: doc.slug }}
                    className="btn-secondary"
                  >
                    READ
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="mt-4 border-t border-ink pt-4 text-center">
        <p className="font-mono text-xs text-ink-muted">
          GNEISS LAB · Private Infrastructure · gneiss.run
        </p>
      </footer>
    </main>
  );
}
