import type { ServiceLink } from "@/content/services";

function getCompactAccessLabel(label: string) {
	if (label === "Tailnet + App Account") return "Tailnet + App";
	if (label === "Admin only") return "Admin";
	return label;
}

export function ServiceTable({ services }: { services: ServiceLink[] }) {
	return (
		<table className="table-catalog mt-3 table-fixed">
			<thead>
				<tr>
					<th className="w-[6rem] sm:w-[7rem]">ID</th>
					<th>Service</th>
					<th className="hidden md:table-cell md:w-[40%]">Description</th>
					<th className="w-[7rem] sm:w-[8.5rem] lg:w-[12rem]">Access</th>
					<th className="w-[4.25rem] sm:w-[5.25rem]"></th>
				</tr>
			</thead>
			<tbody>
				{services.map((service) => (
					<tr key={service.id}>
						<td className="align-top">
							<span className="sku-badge">{service.id}</span>
						</td>
						<td className="align-top font-medium">
							<span className="block truncate">{service.name}</span>
						</td>
						<td className="text-ink-muted hidden align-top text-xs leading-5 md:table-cell">
							{service.summary}
						</td>
						<td className="align-top">
							<span
								className={`block truncate text-xs ${
									service.accessLabel === "Admin only" ? "text-accent-orange" : "text-accent-green"
								}`}
							>
								{service.accessLabel === "Admin only" ? "◆" : "●"}{" "}
								<span className="lg:hidden">{getCompactAccessLabel(service.accessLabel)}</span>
								<span className="hidden lg:inline">{service.accessLabel}</span>
							</span>
						</td>
						<td className="text-right align-top">
							<a href={service.href} target="_blank" rel="noreferrer" className="btn-primary">
								<span>OPEN</span>
								<span className="hidden sm:inline">→</span>
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
