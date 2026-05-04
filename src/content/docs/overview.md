GNEISS LAB is a compact split-role minilab built to host a private media stack, a small set of self-hosted tools, home automation, and the public site you are reading now.

## Goals

The first version is deliberately simple: one compute machine for interactive work, media playback, and reverse proxy duties, and one storage machine for disks, shares, the download and automation stack, and home automation. A small multi-gig switch handles fast local traffic between the two nodes.

The design keeps compute and storage separate, sticks to a straightforward SATA-based storage plan, and uses one set of canonical service URLs rather than a pile of hostnames and ports. Remote access works through a Tailnet overlay without exposing the private stack to the public internet. RAID provides availability, not backup.

## What lives at gneiss.run

The public apex site is the landing page and docs hub. The service subdomains under `*.gneiss.run` form the private application surface, useful on the trusted local network or when authorized on the Tailnet remotely. App-level sign-in still applies where appropriate.

## Current stack

The **compute node** is a Beelink SER9 MAX. It runs Jellyfin, the reverse proxy for all service subdomains, and general desktop and development work.

The **storage node** is a ZimaBoard 2 running ZimaOS for the NAS layer. Application data lives on mirrored SSDs, media and downloads live on the HDD array, and the media automation and download services all run here. Home Assistant and its supporting Matter backend also run on this machine through the ZimaOS app ecosystem.

The **network core** is an eero router for Wi-Fi and DHCP, a 2.5GbE switch for wired lab traffic, split DNS locally, and Tailnet-based access remotely.

## Design principles

**Split roles on purpose.** Jellyfin and interactive work stay on the compute node. Storage, shares, the media automation stack, and home automation stay on the storage node. That keeps responsibilities clear and each box easy to reason about.

**Stable URLs matter.** Every service gets a canonical `*.gneiss.run` address so the same link works locally and remotely, even though the underlying network path is different.

**Cooling and power are first-class concerns.** The storage node is built around enterprise HDDs. Airflow and separate drive power were design inputs, not afterthoughts.
