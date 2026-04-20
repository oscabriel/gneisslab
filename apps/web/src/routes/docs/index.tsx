import { createFileRoute } from "@tanstack/react-router";

import { publicDocs } from "@/content/docs";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      {
        title: "Docs | gneiss.run",
      },
      {
        name: "description",
        content: "Public documentation for the Gneiss minilab.",
      },
    ],
  }),
  component: DocsIndexPage,
});

function DocsIndexPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="max-w-3xl text-sm/7 text-muted-foreground">
          These pages are a curated public subset of the lab notes. The content is kept in markdown
          so it can stay easy to edit in an Obsidian-style workflow while still drawing a hard line
          around what is safe to publish.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {publicDocs.map((doc) => (
          <section className="space-y-3 border p-4" key={doc.slug}>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">{doc.title}</h2>
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
      </section>
    </main>
  );
}
