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
    href: "https://jellyfin.gneiss.run",
    summary: "Stream the library from the compute node.",
    category: "Media",
    runsOn: "Beelink compute node",
    accessLabel: "Tailnet + app account",
    accessNote: "Remote visitors must be on the Tailnet and also have a Jellyfin account.",
    audience: "visitor",
    featured: true,
  },
  {
    name: "Requests",
    href: "https://requests.gneiss.run",
    summary: "Request movies and shows through Seerr.",
    category: "Media",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Tailnet + app account",
    accessNote: "Remote visitors must be on the Tailnet and have a Seerr account.",
    audience: "visitor",
    featured: true,
  },
  {
    name: "Sonarr",
    href: "https://sonarr.gneiss.run",
    summary: "Automates TV library management.",
    category: "Media stack",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing service for managing shows and import rules.",
    audience: "operator",
  },
  {
    name: "Radarr",
    href: "https://radarr.gneiss.run",
    summary: "Automates movie library management.",
    category: "Media stack",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing service for movies, quality profiles, and imports.",
    audience: "operator",
  },
  {
    name: "Prowlarr",
    href: "https://prowlarr.gneiss.run",
    summary: "Central indexer management for the media stack.",
    category: "Media stack",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Used to sync indexers and app integrations.",
    audience: "operator",
  },
  {
    name: "qBittorrent",
    href: "https://qbittorrent.gneiss.run",
    summary: "Torrent client routed through the VPN layer.",
    category: "Media stack",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing download client.",
    audience: "operator",
  },
  {
    name: "SABnzbd",
    href: "https://sabnzbd.gneiss.run",
    summary: "Usenet client for the media stack.",
    category: "Media stack",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Operator-facing download client.",
    audience: "operator",
  },
  {
    name: "ZimaOS",
    href: "https://zima.gneiss.run",
    summary: "Storage node dashboard and system management.",
    category: "Operations",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Primary system administration surface for the NAS node.",
    audience: "operator",
  },
  {
    name: "Terminal",
    href: "https://terminal.gneiss.run",
    summary: "Web terminal into the storage node.",
    category: "Operations",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Restricted operator access only.",
    audience: "operator",
  },
  {
    name: "Pi-hole",
    href: "https://pihole.gneiss.run",
    summary: "DNS administration for local split-horizon resolution.",
    category: "Operations",
    runsOn: "ZimaBoard storage node",
    accessLabel: "Admin only",
    accessNote: "Internal infrastructure service.",
    audience: "operator",
  },
  {
    name: "OpenCode",
    href: "https://opencode.gneiss.run",
    summary: "Self-hosted coding assistant surface on the compute node.",
    category: "Operations",
    runsOn: "Beelink compute node",
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
