GNEISS LAB is a compact split-role minilab built to host a private media stack, a small set of self-hosted tools, and the public site you are reading now.

The lab is deliberately simple in version one:

- one compute machine for interactive work, media playback, and reverse proxy duties
- one storage machine for disks, shares, and the download and automation stack
- one small multi-gig switch for fast local traffic between the two

## Goals

- Keep compute and storage separate.
- Keep the first version on a straightforward SATA-based storage plan.
- Use one set of canonical service URLs instead of a pile of hostnames and ports.
- Make remote access work without exposing the private stack directly to the public internet.
- Treat RAID as availability, not backup.

## What Lives At gneiss.run

The public apex site is the landing page and docs hub.

The service subdomains under `*.gneiss.run` are the private application surface for the lab. Those links are useful if you are on the trusted network locally or authorized on the Tailnet remotely. App-level sign-in still applies where appropriate.

## Current Stack Snapshot

### Compute node

- Beelink SER9 MAX
- runs Jellyfin
- runs the reverse proxy for the private service subdomains
- acts as the general-purpose desktop and development machine

### Storage node

- ZimaBoard 2
- runs ZimaOS for the NAS layer
- stores application data on mirrored SSDs
- stores media and downloads on the HDD array
- runs the media automation and download services

### Network core

- eero router and Wi-Fi
- 2.5GbE switch for wired lab traffic
- split DNS locally and Tailnet-based access remotely

## Principles

### Split roles on purpose

Jellyfin and interactive work stay on the compute node. Storage, shares, and the automation stack stay on the storage node. That keeps the system easier to reason about and makes the responsibilities of each box obvious.

### Stable URLs matter

Every service gets a canonical `*.gneiss.run` address. That lets the same link work locally and remotely even though the underlying network path is different.

### Cooling and power are first-class concerns

The storage node is built around enterprise HDDs. Airflow and separate drive power were treated as design inputs, not afterthoughts.

## What This Public Site Intentionally Leaves Out

The private vault contains operator notes, troubleshooting details, direct network paths, and credentials. This public docs set is intentionally narrower.

You will find the architecture, hardware, and service model here.

You will not find direct fallback URLs, private addresses, ports, credentials, or rebuild runbooks.
