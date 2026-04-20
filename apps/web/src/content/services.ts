export interface ServiceLink {
  name: string;
  href: string;
  summary: string;
  category: string;
  runsOn: string;
  accessLabel: string;
  accessNote: string;
  audience: "visitor" | "operator";
  featured?: boolean;
}

export const serviceLinks: ServiceLink[] = [
  {
    name: "Jellyfin",
    href: "https://watch.gneiss.run",
    summary: "Stream the library from the compute node.",
    category: "Media",
    runsOn: "Compute Node",
    accessLabel: "Tailnet + App Account",
    accessNote: "Remote visitors must be on the Tailnet and also have a Jellyfin account.",
    audience: "visitor",
    featured: true,
  },
  {
    name: "Seerr",
    href: "https://seer.gneiss.run",
    summary: "Request portal for movies and shows.",
    category: "Media",
    runsOn: "Storage Node",
    accessLabel: "Tailnet + App Account",
    accessNote: "Trusted remote users can browse and request through the app.",
    audience: "visitor",
    featured: true,
  },
  {
    name: "Sonarr",
    href: "https://tv.gneiss.run",
    summary: "Automates TV library management.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing service for managing shows and import rules.",
    audience: "operator",
  },
  {
    name: "Radarr",
    href: "https://movies.gneiss.run",
    summary: "Automates movie library management.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing service for movies, quality profiles, and imports.",
    audience: "operator",
  },
  {
    name: "Bazarr",
    href: "https://subs.gneiss.run",
    summary: "Manages subtitles across the media library.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing subtitle management service.",
    audience: "operator",
  },
  {
    name: "Prowlarr",
    href: "https://search.gneiss.run",
    summary: "Central indexer management for the media stack.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Used to sync indexers and app integrations.",
    audience: "operator",
  },
  {
    name: "qBittorrent",
    href: "https://torrent.gneiss.run",
    summary: "Torrent client routed through the VPN layer.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing download client.",
    audience: "operator",
  },
  {
    name: "SABnzbd",
    href: "https://nzb.gneiss.run",
    summary: "Usenet client for the media stack.",
    category: "Media Stack",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing download client.",
    audience: "operator",
  },
  {
    name: "ZimaOS",
    href: "https://home.gneiss.run",
    summary: "Storage node dashboard and system management.",
    category: "Operations",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Primary system administration surface for the NAS node.",
    audience: "operator",
  },
  {
    name: "Terminal",
    href: "https://terminal.gneiss.run",
    summary: "Web terminal into the storage node.",
    category: "Operations",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Restricted operator access only.",
    audience: "operator",
  },
  {
    name: "Pi-hole",
    href: "https://dns.gneiss.run",
    summary: "DNS administration for local split-horizon resolution.",
    category: "Operations",
    runsOn: "Storage Node",
    accessLabel: "Admin only",
    accessNote: "Internal infrastructure service.",
    audience: "operator",
  },
  {
    name: "OpenCode",
    href: "https://code.gneiss.run",
    summary: "Self-hosted coding assistant surface on the compute node.",
    category: "Operations",
    runsOn: "Compute Node",
    accessLabel: "Admin only",
    accessNote: "Operator-only development tool.",
    audience: "operator",
  },
];

export const featuredServiceLinks = serviceLinks.filter((service) => service.featured);
export const visitorServiceLinks = serviceLinks.filter((service) => service.audience === "visitor");
export const operatorServiceLinks = serviceLinks.filter(
  (service) => service.audience === "operator",
);
