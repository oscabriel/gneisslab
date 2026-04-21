The public site and the private lab services are intentionally different surfaces.

## Public Vs Private

### Public

`gneiss.run` is the public-facing site. It exists so anyone can understand what the lab is, how it is built, and what services it offers.

### Private

The service subdomains under `*.gneiss.run` are the operational surface of the lab. They are designed for trusted local access and trusted remote access, not anonymous internet traffic.

## Remote Access

Remote visitors need to be authorized on the Tailnet before the private service subdomains are useful. That overlay network is the remote entry point.

Being on the Tailnet is necessary, but it is not always sufficient.

- media apps still use their own accounts
- operator-facing tools remain restricted
- some links are listed publicly for completeness even though they are not intended for general visitor use

## Local Access

On the trusted home network, the same service URLs continue to work through the local DNS path. That keeps the user-facing address stable while changing the network path under the hood.

## Canonical URLs

Every service gets one canonical `*.gneiss.run` URL.

That choice simplifies:

- bookmarks
- client configuration
- documentation
- switching between local and remote access

## Service Access Levels Used On This Site

### Tailnet + app account

The service is intended for trusted remote users, but it still expects the user to sign in inside the app.

### Admin only

The service is operational infrastructure. It may still be linked from this site, but it is not meant to be a public destination.

## What This Site Does Not Publish

To keep the public docs safe, this site does not publish:

- direct internal network paths
- fallback LAN addresses or ports
- SSH details
- provider secrets
- credentials
- raw troubleshooting notes from the private vault

The result is a cleaner boundary: enough public context to explain the system, without turning the docs into an operator notebook.
