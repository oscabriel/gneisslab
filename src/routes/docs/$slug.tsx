import { createFileRoute, Link } from "@tanstack/react-router";

import MarkdownContent from "@/components/markdown-content";
import { getPublicDocBySlug, publicDocs } from "@/content/docs";

export const Route = createFileRoute("/docs/$slug")({
	head: ({ params }) => {
		const doc = getPublicDocBySlug(params.slug);

		return {
			meta: [
				{
					title: doc ? `${doc.title} | GNEISS LAB` : "Doc not found | GNEISS LAB",
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
			<main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8">
				<div className="border-ink border-2 px-6 py-4">
					<p className="text-ink-muted font-mono text-sm font-medium tracking-[0.3em]">
						GNEISS LAB
					</p>
					<h1 className="mt-1 font-mono text-2xl font-bold tracking-tight">DOCUMENT NOT FOUND</h1>
				</div>
				<p className="text-ink-muted text-sm">
					The requested document does not exist in this documentation set.
				</p>
				<Link to="/docs" className="btn-secondary w-fit">
					← BACK TO DOCS
				</Link>
			</main>
		);
	}

	// Find current doc index for navigation
	const currentIndex = publicDocs.findIndex((d) => d.slug === slug);
	const prevDoc = currentIndex > 0 ? publicDocs[currentIndex - 1] : null;
	const nextDoc = currentIndex < publicDocs.length - 1 ? publicDocs[currentIndex + 1] : null;

	return (
		<main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-8">
			{/* Document header */}
			<header className="space-y-4">
				<div className="flex items-center gap-3">
					<Link
						to="/docs"
						className="text-ink-muted hover:text-ink font-mono text-xs transition-colors"
					>
						← DOCS
					</Link>
					<span className="text-ink-faint">/</span>
					<span className="sku-badge">DOC-{String(currentIndex + 1).padStart(2, "0")}</span>
				</div>

				<div className="border-ink border-b-2 pb-4">
					<h1 className="font-mono text-2xl font-bold tracking-tight">{doc.title}</h1>
					<p className="text-ink-muted mt-2 text-sm">{doc.description}</p>
					<p className="text-ink-faint mt-3 font-mono text-xs">Last updated: {doc.updated}</p>
				</div>
			</header>

			{/* Document content */}
			<article className="doc-content">
				<MarkdownContent content={doc.content} />
			</article>

			{/* Navigation */}
			<nav className="border-ink flex flex-col gap-4 border-t pt-6 sm:flex-row sm:justify-between">
				{prevDoc ? (
					<Link
						to="/docs/$slug"
						params={{ slug: prevDoc.slug }}
						className="group border-ink hover:bg-ink hover:text-cream flex flex-col border p-4 transition-colors"
					>
						<span className="text-ink-muted group-hover:text-cream/70 font-mono text-xs">
							← PREVIOUS
						</span>
						<span className="mt-1 font-mono text-sm font-medium">{prevDoc.title}</span>
					</Link>
				) : (
					<div />
				)}

				{nextDoc ? (
					<Link
						to="/docs/$slug"
						params={{ slug: nextDoc.slug }}
						className="group border-ink hover:bg-ink hover:text-cream flex flex-col border p-4 text-right transition-colors sm:items-end"
					>
						<span className="text-ink-muted group-hover:text-cream/70 font-mono text-xs">
							NEXT →
						</span>
						<span className="mt-1 font-mono text-sm font-medium">{nextDoc.title}</span>
					</Link>
				) : (
					<div />
				)}
			</nav>

			{/* Footer */}
			<footer className="border-ink border-t pt-6 text-center">
				<p className="text-ink-muted font-mono text-xs">GNEISS LAB · Documentation · gneiss.run</p>
			</footer>
		</main>
	);
}
