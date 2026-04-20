This is the high-level build list for the first version of the lab.

It is intentionally a public summary, not the private purchasing and warranty tracker.

## Compute And Storage

| Component                    | Role                                            |
| ---------------------------- | ----------------------------------------------- |
| Beelink SER9 MAX             | Compute node, Jellyfin host, reverse proxy host |
| ZimaBoard 2 1664             | Storage node and service host                   |
| JMB585 SATA card             | Expands the storage node for the HDD array      |
| 2x Crucial MX500 1TB SSD     | Mirrored app-data tier                          |
| 4x Seagate Exos X18 12TB HDD | Bulk media and downloads tier                   |

## Network And Rack

| Component            | Role                                |
| -------------------- | ----------------------------------- |
| eero router          | Router, Wi-Fi, DHCP                 |
| TP-Link TL-SG108S-M2 | Wired 2.5GbE aggregation            |
| Cat6 patch panel     | Clean front-facing cable management |
| Cat6A patch cables   | Internal and rack-side network runs |

## Power And Cooling

| Component                   | Role                                              |
| --------------------------- | ------------------------------------------------- |
| SilverStone SX500-G SFX PSU | Dedicated HDD power path                          |
| ATX jumper                  | Keeps the standalone PSU on without a motherboard |
| Noctua NF-A8 fans           | Active cooling for the storage zone               |
| Surge protector             | Shared power distribution outside the rack        |

## Public Summary Notes

- the build intentionally sticks to SATA for version one
- the storage node uses separate power for the HDD array
- the layout is designed around compactness, cable clarity, and sustained airflow

The private notes track purchase history, seller details, receipts, serials, and follow-up tasks. Those stay out of the public docs on purpose.
