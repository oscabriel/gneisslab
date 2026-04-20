import { createFileRoute } from "@tanstack/react-router";

import MarkdownContent from "@/components/markdown-content";
import { getPublicDocBySlug } from "@/content/docs";

export const Route = createFileRoute("/docs/$slug")({
  head: ({ params }) => {
    const doc = getPublicDocBySlug(params.slug);

    return {
      meta: [
        {
          title: doc ? `${doc.title} | gneiss.run` : "Doc not found | gneiss.run",
        },
        {
          name: "description",
          content: doc?.description ?? "Requested documentation page was not found.",
        },
      ],
    };
  },
  component: DocPage,
});

function DocPage() {
  const { slug } = Route.useParams();
  const doc = getPublicDocBySlug(slug);

  if (!doc) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Docs</p>
        <h1 className="text-3xl font-semibold tracking-tight">Document not found</h1>
        <p className="text-sm/7 text-muted-foreground">
          The requested public note does not exist in this docs set.
        </p>
        <a className="underline underline-offset-4" href="/docs">
          Back to docs
        </a>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Docs</p>
        <h1 className="text-3xl font-semibold tracking-tight">{doc.title}</h1>
        <p className="text-sm/7 text-muted-foreground">{doc.description}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Updated {doc.updated}
        </p>
      </div>
      <MarkdownContent content={doc.content} />
    </main>
  );
}
