The software side of the lab follows the same split as the hardware: compute-sensitive work stays on the compute node, and storage-adjacent work stays on the storage node.

## Compute node

**Jellyfin** is the main playback surface for the media library. It reads the library from the NAS share and serves the apps and clients connected to the lab.

**The reverse proxy** owns the `*.gneiss.run` service URLs, handles HTTPS, and forwards requests to the correct backend.

The compute node also serves as the day-to-day machine for development and general-purpose work.

## Storage node

**NAS and storage** runs through ZimaOS with shares for the compute node and clients, a mirrored app-data tier, and a bulk media and downloads tier.

**Media automation** is handled by Sonarr for TV, Radarr for movies, Prowlarr for indexer management, Bazarr for subtitles, and Seerr for requests.

**The download layer** uses qBittorrent for torrent workflows and SABnzbd for Usenet workflows, with VPN protection around the torrent path.

**Pi-hole** provides DNS and split-horizon name resolution for the local network.

**Home Assistant** runs on the storage node through the ZimaOS app ecosystem, with a Python Matter Server backend for smart-home bridge integrations. A dedicated appliance remains a future option if smart-home uptime becomes critical enough to justify additional hardware.

## Media workflow

The media path follows a single unified data layout. Users request content through Seerr, and the automation stack decides what to search for and where to send it. Downloads land in the bulk storage tier through the appropriate client. The automation apps import completed content into the library layout. Jellyfin reads the final library over the NAS share and serves clients from the compute node.

## Why the data layout matters

The stack follows the broad principles from [TRaSH Guides](https://trash-guides.info/): downloads and media live on the same filesystem, the automation apps see one unified data root, torrent imports use hardlinks instead of duplicating data, and moves stay fast and predictable.

## Quality and playback priorities

The stack is tuned for reliable direct play with strong 4K playback where the source material justifies it. Custom formats and quality profiles are curated, the system prefers good source material over blind maximization, and the first version avoids a dedicated GPU in favor of direct play.

## Roadmap

Backups for app data and critical configuration, monitoring and alerting, and more sustained transfer and thermal validation remain on the list.
