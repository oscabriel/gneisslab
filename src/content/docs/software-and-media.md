The software side of the lab is split the same way as the hardware: compute-sensitive work stays on the compute node, storage-adjacent work stays on the storage node, and home automation stays on a dedicated appliance.

## Compute Node Services

### Jellyfin

Jellyfin is the main playback surface for the media library. It reads the library from the NAS share and serves the apps and clients that connect to the lab.

### Reverse proxy

The reverse proxy owns the `*.gneiss.run` service URLs, handles HTTPS, and forwards requests to the correct backend.

### General-purpose development

The compute node is also the day-to-day machine for development and experimentation.

## Storage Node Services

### NAS and storage

- ZimaOS for the NAS layer
- shares for the compute node and clients
- mirrored app-data tier
- bulk media and downloads tier

### Media automation

- Sonarr for TV
- Radarr for movies
- Prowlarr for indexer management
- Bazarr for subtitles
- Seerr for requests

### Download layer

- qBittorrent for torrent workflows
- SABnzbd for Usenet workflows
- VPN protection around the torrent path

### Local network plumbing

- Pi-hole for DNS and split-horizon name resolution

## Home Automation Appliance

### Home Assistant

Home Assistant lives on its own appliance so smart-home duties do not compete with media playback, storage, or download jobs. The public-facing service names now keep that split explicit: `home.gneiss.run` is reserved for Home Assistant, while `zima.gneiss.run` stays with the NAS dashboard.

## Media Workflow

The media path is designed around one unified data layout.

### Requests and discovery

Users request content through Seerr. The automation stack then decides what to search for and where to send it.

### Download stage

Downloads land in the bulk storage tier through the appropriate client.

### Import stage

The automation apps import completed content into the library layout.

### Playback stage

Jellyfin reads the final library over the NAS share and serves clients from the compute node.

## Why The Data Layout Matters

The stack follows the same broad principles used by TRaSH Guides.

- downloads and media live on the same filesystem
- the automation apps see one unified data root
- torrent imports can use hardlinks instead of duplicating data
- moves stay fast and predictable

That is the difference between a stack that quietly scales and one that slowly turns into a mess of duplicate copies and brittle path mappings.

## Quality And Playback Priorities

The stack is tuned around reliable direct play and strong 4K playback where the source makes sense.

- custom formats and quality profiles are curated for the library
- the system prefers good source material over blind maximization
- the first version avoids a dedicated GPU and focuses on direct play first

## Operational Priorities Still On The Roadmap

- backups for app data and critical configuration
- monitoring and alerting
- more sustained transfer and thermal validation
