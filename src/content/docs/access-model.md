The public site and the private lab services are intentionally different surfaces.

## Public vs. private

`gneiss.run` is the public-facing site. It exists so anyone can understand what the lab is, how it is built, and what services it offers.

The service subdomains under `*.gneiss.run` are the operational surface. They are designed for trusted local and trusted remote access, not anonymous internet traffic.

## Remote access

Remote visitors need to be authorized on the Tailnet before the private service subdomains are useful. That overlay network is the remote entry point.

Being on the Tailnet is necessary but not always sufficient. Media apps still use their own accounts, operator-facing tools remain restricted, and some links are listed publicly for completeness even though they are not intended for general visitor use.

## Local access

On the trusted home network, the same service URLs work through the local DNS path. The user-facing address stays stable while the network path changes under the hood.

## Canonical URLs

Every service gets one canonical `*.gneiss.run` URL. That simplifies bookmarks, client configuration, documentation, and switching between local and remote access.

## Service access levels

**Tailnet + app account** means the service is intended for trusted remote users, but still expects sign-in inside the app.

**Admin only** means the service is operational infrastructure. It may be linked from this site, but is not a public destination.
