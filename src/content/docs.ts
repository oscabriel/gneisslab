import accessModelContent from "./docs/access-model.md?raw";
import architectureContent from "./docs/architecture.md?raw";
import hardwareContent from "./docs/hardware.md?raw";
import materialsContent from "./docs/materials.md?raw";
import overviewContent from "./docs/overview.md?raw";
import softwareAndMediaContent from "./docs/software-and-media.md?raw";

export interface PublicDoc {
	slug: string;
	title: string;
	description: string;
	updated: string;
	content: string;
}

export const publicDocs: PublicDoc[] = [
	{
		slug: "overview",
		title: "Lab Overview",
		description: "What GNEISS LAB is, what it's for, and the design principles behind the build.",
		updated: "2026-05-03",
		content: overviewContent,
	},
	{
		slug: "architecture",
		title: "Architecture",
		description: "How compute, storage, networking, DNS, HTTPS, and remote access fit together.",
		updated: "2026-05-03",
		content: architectureContent,
	},
	{
		slug: "hardware",
		title: "Hardware",
		description: "The physical layout, storage topology, cooling plan, and cabling decisions.",
		updated: "2026-05-03",
		content: hardwareContent,
	},
	{
		slug: "software-and-media",
		title: "Software & Media Stack",
		description: "The services running on the lab and the media workflow built around them.",
		updated: "2026-05-03",
		content: softwareAndMediaContent,
	},
	{
		slug: "access-model",
		title: "Access Model",
		description:
			"How the public site, private services, Tailnet access, and app-level auth work together.",
		updated: "2026-05-03",
		content: accessModelContent,
	},
	{
		slug: "materials",
		title: "Build Materials",
		description: "The build list for the first version of the lab.",
		updated: "2026-05-03",
		content: materialsContent,
	},
];

export function getPublicDocBySlug(slug: string) {
	return publicDocs.find((doc) => doc.slug === slug);
}
