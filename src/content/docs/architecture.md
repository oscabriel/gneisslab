The lab is built around one public site, a separate private service surface, and two core nodes with distinct responsibilities.

## Public and private surfaces

`gneiss.run` is the public landing page and docs site. It explains the lab, links to the service subdomains, and documents how the stack is put together.

`*.gneiss.run` is the canonical address space for the self-hosted services. Those endpoints are not open to the general internet — remote access requires Tailnet authorization, and application-level accounts still apply.

## Node responsibilities

The **compute node** handles the parts of the system that benefit from a stronger client and playback machine: Jellyfin streaming, the reverse proxy with HTTPS termination for the service subdomains, and day-to-day desktop and development work.

The **storage node** handles everything that wants to live near the disks: NAS and file shares, the media automation stack, download clients, DNS for the local network, VPN for the torrent workflow, and home automation through Home Assistant and its Matter backend.

## Network model

The network is intentionally flat in version one. The router provides DHCP, NAT, and Wi-Fi. A compact 2.5GbE switch serves as the wired aggregation point, and the compute and storage nodes talk to each other over it. Client devices use the same wired core where it makes sense. This keeps things easy to debug while still giving the lab fast local transfers.

## DNS, HTTPS, and remote access

The access story depends on several layers working together.

**Cloudflare** hosts the authoritative DNS for `gneiss.run`. A wildcard A record covers all service subdomains, and the Cloudflare API provides the DNS-01 challenge that lets Caddy obtain a wildcard TLS certificate from Let's Encrypt. No traffic is proxied through Cloudflare — it acts purely as the DNS authority and cert-issuance hook.

**Caddy** runs as a Docker container on the compute node and serves as the reverse proxy for the entire `*.gneiss.run` surface. It terminates HTTPS with the wildcard cert and forwards each request to the correct backend service based on subdomain. Every service gets one stable URL while the implementation details stay hidden behind the proxy layer.

**Local DNS** resolves the service subdomains to Caddy on the compute node through split DNS on the trusted home network. Local traffic stays local.

**Remote DNS and overlay networking** resolves the same subdomains through the Tailnet path for trusted remote users instead of the local one.

## Why this layout works

The public site stays simple and explains the system clearly. Trusted users get one canonical address for each service. Compute and storage responsibilities stay separated. The network can remain simple until there is a real reason to introduce VLANs or more complex firewall rules.

## Next infrastructure steps

The current design is stable for daily use. The roadmap still includes backups for app data and critical configuration, monitoring and health visibility, a UPS, deeper validation for sustained transfers and thermals, and managed networking only if the simple LAN stops being enough.
