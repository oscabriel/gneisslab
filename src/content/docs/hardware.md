The first version of the lab is a compact build with two core nodes, one dedicated automation appliance, a small wired core, and an intentionally simple rack plan.

## Core Hardware

### Compute

- Beelink SER9 MAX
- main workstation and client machine
- Jellyfin host
- reverse proxy host

### Storage

- ZimaBoard 2
- onboard SATA for the SSD pair
- JMB585 SATA expansion card for the HDD array

### Automation

- Home Assistant Green
- dedicated appliance for the smart-home stack
- room for a future ZBT-1 radio for Zigbee and Thread duties

### Network

- eero router and Wi-Fi base
- TP-Link 2.5GbE switch as the wired core
- front-facing patch panel for clean cable routing inside the build

## Storage Topology

The storage node uses two separate storage tiers.

### Fast tier

- two SATA SSDs
- mirrored for application data and Docker state
- intended for configs, metadata, and fast random access

### Bulk tier

- four enterprise HDDs
- RAID5 for the media and downloads volume
- intended for large sequential workloads and library growth

This split keeps the day-to-day application state off the spinning disks while still using the HDD array for the capacity-heavy part of the lab.

## Rack And Layout Ideas

The target layout is compact and purpose-built.

- switch near the top for easy patching
- compute node and client gear on a shared shelf
- storage node directly above the disk zone to keep SATA runs short
- HDD stack, separate PSU, and fans grouped together as one storage and cooling zone
- patch panel mounted externally to save internal rack height

## Power Strategy

The enterprise drives do not share the same power path as the board and SSDs.

- the board and SSDs stay on the stock board-side power path
- the HDD array gets its own SFX power supply
- no drive should ever be powered by both paths

That keeps the spin-up and sustained load of the HDD array away from the board power budget.

## Cooling Strategy

Cooling is treated as required infrastructure.

- the storage zone uses dedicated rear-mounted fans
- airflow is designed to pass through the storage area in one clear direction
- the drive array and PSU share that cooling path
- the storage node above benefits from the same general airflow pattern

The design goal is simple: keep the drives comfortable during sustained transfer workloads instead of waiting for temperature problems to show up later.

## Cabling Approach

The build uses the patch panel to keep the front and rear of the lab readable.

- short front patch cables connect the switch to the panel
- short rear runs connect local devices into the back of the panel
- longer remote runs terminate there as well

The result is a layout that stays serviceable even in a small footprint.
