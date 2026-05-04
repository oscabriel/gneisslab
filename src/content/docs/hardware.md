The first version of the lab is a compact build with two core nodes, a small wired core, and a deliberately simple rack plan.

## Core hardware

The **compute node** is a [Beelink SER9 MAX](https://www.bee-link.com/products/beelink-ser9-max-amd-ryzen-7-h-255?variant=48458730733810); it's the main workstation, Jellyfin host, and reverse proxy host.

The **storage node** is a [ZimaBoard 2](https://shop.zimaspace.com/products/zimaboard2-single-board-server?variant=50683134312740) with onboard SATA for the SSD pair and a [JMB585 SATA expansion card](https://shop.zimaspace.com/products/pcie-to-5-port-sata-iii-adapter-jmb585-chipset) for the HDD array. Home automation also runs here through the ZimaOS app ecosystem.

The **network core** is an eero router and Wi-Fi base paired with a [TP-Link TL-SG108S-M2 2.5GbE switch](https://www.amazon.com/TP-Link-TL-SG108S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMFX748Y) as the wired aggregation point. A front-facing patch panel keeps cable routing clean inside the build.

## Storage topology

The storage node uses two separate tiers.

The **fast tier** is two used Crucial MX500 1TB SATA SSDs (`CT1000MX500`) (purchased from [kIO](https://www.ebay.com/str/kl0) on eBay) mirrored for application data and Docker state, containing configs, metadata, and anything that benefits from fast random access.

The **bulk tier** is four used Seagate Exos X18 12TB enterprise HDDs (`ST12000NM000J`) (purchased from [GoHardDrive](https://www.ebay.com/str/goharddrivewholesaleandretail) on eBay) in RAID5 for media, downloads, large sequential workloads, and library growth.

Storage costs are prohibitive right now, so the lab uses trusted eBay resellers for both SSDs and HDDs. Lists of reputable resellers are available on various hardware subreddits.

This split keeps day-to-day application state off the spinning disks while the HDD array handles the capacity-heavy part of the lab.

## Rack and layout

The target layout is compact and purpose-built: switch near the top for easy patching, compute node and client gear on a shared shelf, storage node directly above the disk zone to keep SATA runs short, and the HDD stack, separate PSU, and fans grouped together as one storage and cooling zone. The patch panel mounts externally to save internal rack height.

## Power strategy

The enterprise drives do not share the same power path as the board and SSDs. The board and SSDs stay on the stock board-side power, and the HDD array gets its own SFX power supply. No drive is ever powered by both paths, keeping spin-up and sustained load away from the board power budget.

## Cooling strategy

Cooling is required infrastructure. The storage zone uses dedicated rear-mounted fans with airflow designed to pass through in one clear direction. The drive array and PSU share that cooling path, and the storage node above benefits from the same general airflow pattern. The goal is to keep drives comfortable during sustained transfer workloads rather than waiting for temperature problems to appear.

## Cabling approach

The build uses the patch panel to keep the front and rear of the lab readable. Short front patch cables connect the switch to the panel, short rear runs connect local devices into the back of the panel, and longer remote runs terminate there as well. The result is a layout that stays serviceable even in a small footprint.
