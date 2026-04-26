The lab is built around one public site, a separate private service surface, and a dedicated smart-home appliance.

## The Big Picture

### Public surface

- `gneiss.run` is the public landing page and docs site.
- It explains the lab, links to the service subdomains, and documents how the stack is put together.

### Private service surface

- `*.gneiss.run` is the canonical address space for the self-hosted services.
- Those endpoints are not meant to be open to the general internet.
- Remote access depends on Tailnet authorization.
- Application access still depends on the account model of each service.

## Node Responsibilities

### Compute node

The compute machine handles the parts of the system that benefit from a stronger client and playback box:

- Jellyfin streaming
- reverse proxy and HTTPS termination for the service subdomains
- desktop and development work

### Storage node

The storage machine handles the parts of the system that want to live near the disks:

- NAS and file shares
- media automation stack
- download clients
- DNS for the local network
- VPN layer for the torrent workflow

### Home automation appliance

The Home Assistant appliance keeps the smart-home layer off the main lab nodes.

- Home Assistant Green hardware
- `home.gneiss.run` for the smart-home control plane
- isolated automation duties and future Zigbee or Thread expansion

## Network Model

The network is intentionally flat in version one.

- the router still provides DHCP, NAT, and Wi-Fi
- a compact 2.5GbE switch is the wired aggregation point
- the compute and storage nodes talk to each other over the switch
- client devices can use the same wired core where it makes sense

This keeps the first version easy to debug while still giving the lab fast local transfers.

## DNS, HTTPS, And Remote Access

The access story depends on three layers working together.

### Local DNS

On the trusted home network, split DNS resolves the service subdomains to the reverse proxy on the compute node. That keeps local traffic local.

### Remote DNS and overlay networking

For trusted remote users, the same service subdomains resolve through the Tailnet path instead of the local one.

### Reverse proxy

The reverse proxy terminates HTTPS and forwards each request to the correct backend service. This gives every service one stable URL while keeping the implementation details hidden behind the proxy layer.

## Why This Layout Works Well

- the public site can stay simple and explain the system clearly
- trusted users get one canonical address for each service
- the compute and storage responsibilities stay separated
- smart-home duties stay isolated on their own appliance
- the network can stay simple until there is a real reason to introduce VLANs or a more complex firewall

## Next Infrastructure Steps

The current design is stable enough for daily use, but the roadmap still includes:

- backups for app data and critical configuration
- monitoring and health visibility
- a UPS
- deeper validation for sustained transfers and thermals
- managed networking only if the simple LAN stops being enough
