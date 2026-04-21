import { createFileRoute, Link } from "@tanstack/react-router";

import { publicDocs } from "@/content/docs";

export const Route = createFileRoute("/docs/")({
	head: () => ({
		meta: [
			{
				title: "Docs | GNEISS LAB",
			},
			{
				name: "description",
				content: "Public documentation for GNEISS LAB.",
			},
		],
	}),
	component: DocsIndexPage,
});

function DocsIndexPage() {
	return (
		<main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6">
			{/* Page header - compact */}
			<section>
				<h2 className="font-mono text-sm font-semibold tracking-wide">Docs</h2>
				<div className="section-divider mt-1" />
			</section>

			<div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
				{/* Left: Description */}
				<div className="space-y-3">
					<p className="text-sm font-medium">Public documentation archive.</p>
					<p className="text-ink-muted text-sm">
						Curated public subset of lab notes. Content is maintained in markdown for easy editing
						while preserving a clear boundary between public documentation and private operational
						details.
					</p>
				</div>

				{/* Right: Quick stats */}
				<div>
					<table className="border-ink w-full border-l-4 text-sm">
						<tbody>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">{publicDocs.length}</td>
								<td className="text-ink-muted py-1">Available documents</td>
							</tr>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">Markdown</td>
								<td className="text-ink-muted py-1">Source format</td>
							</tr>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">2026-04</td>
								<td className="text-ink-muted py-1">Last updated</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* Docs table - compact */}
			<section className="pt-2">
				<h3 className="font-mono text-sm font-semibold">Available Documents</h3>
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
								<td className="text-ink-muted hidden max-w-xs truncate text-xs sm:table-cell">
									{doc.description}
								</td>
								<td className="text-ink-muted font-mono text-xs">{doc.updated}</td>
								<td>
									<Link to="/docs/$slug" params={{ slug: doc.slug }} className="btn-secondary">
										READ
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			{/* Footer */}
			<footer className="border-ink mt-4 border-t pt-4 text-center">
				<p className="text-ink-muted font-mono text-xs">GNEISS LAB · Documentation · gneiss.run</p>
			</footer>
		</main>
	);
}
