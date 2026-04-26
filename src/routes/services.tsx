import { createFileRoute } from "@tanstack/react-router";

import { ServiceTable } from "@/components/service-table";
import { operatorServiceLinks, serviceLinks, visitorServiceLinks } from "@/content/services";

export const Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{
				title: "Services | GNEISS LAB",
			},
			{
				name: "description",
				content:
					"Service directory for GNEISS LAB, including visitor-facing and operator-facing endpoints.",
			},
		],
	}),
	component: ServicesPage,
});

function ServicesPage() {
	const hostCount = new Set(serviceLinks.map((service) => service.runsOn)).size;

	return (
		<main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6">
			{/* Page header - compact like US Graphics */}
			<section>
				<h2 className="font-mono text-sm font-semibold tracking-wide">Services</h2>
				<div className="section-divider mt-1" />
			</section>

			<div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
				{/* Left: Description */}
				<div className="space-y-3">
					<p className="text-sm font-medium">Complete service directory.</p>
					<p className="text-ink-muted text-sm">
						Directory for the <code className="sku-badge">*.gneiss.run</code> address space. Links
						are published for reference, but most services require local network access or Tailnet
						authorization.
					</p>
				</div>

				{/* Right: Quick stats */}
				<div>
					<table className="border-ink w-full border-l-4 text-sm">
						<tbody>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">{visitorServiceLinks.length}</td>
								<td className="text-ink-muted py-1">Visitor-facing services</td>
							</tr>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">{operatorServiceLinks.length}</td>
								<td className="text-ink-muted py-1">Operator-facing services</td>
							</tr>
							<tr className="border-border-light border-b">
								<td className="py-1 pl-3 font-medium">{hostCount}</td>
								<td className="text-ink-muted py-1">Host nodes</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* Visitor services */}
			<section className="pt-2">
				<h3 className="font-mono text-sm font-semibold">Visitor-Facing Services</h3>
				<div className="section-divider mt-1" />
				<p className="text-ink-muted mt-2 text-xs">
					Surfaces for trusted remote users. Access depends on Tailnet authorization and app
					sign-in.
				</p>
				<ServiceTable services={visitorServiceLinks} />
			</section>

			{/* Operator services */}
			<section className="pt-2">
				<h3 className="font-mono text-sm font-semibold">Operator-Facing Services</h3>
				<div className="section-divider mt-1" />
				<p className="text-ink-muted mt-2 text-xs">
					Administrative and infrastructure services. Included for system legibility.
				</p>
				<ServiceTable services={operatorServiceLinks} />
			</section>

			{/* Footer */}
			<footer className="border-ink mt-4 border-t pt-4 text-center">
				<p className="text-ink-muted font-mono text-xs">
					GNEISS LAB · Service Catalog · gneiss.run
				</p>
			</footer>
		</main>
	);
}
