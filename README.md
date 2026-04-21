# gneisslab

Public landing page and docs site for the Gneiss minilab.

## Stack

- React 19
- TanStack Router
- Tailwind CSS v4
- Vite
- Alchemy for Cloudflare deployment
- Oxlint and Oxfmt

## Getting Started

Install dependencies:

```bash
bun install
```

Run the web app locally:

```bash
bun run dev
```

Open `http://localhost:3001` in your browser.

## Deployment

Deploy from the repo root:

```bash
bun run deploy
```

Destroy the deployed app:

```bash
bun run destroy
```

## Project Structure

```text
gneisslab/
├── alchemy.run.ts
├── src/content/      # public docs and service metadata
└── src/routes/       # landing page, docs, services
```

## Scripts

- `bun run dev`: Start the Alchemy-backed dev environment on stage `dev`
- `bun run dev:web`: Start Vite without Alchemy
- `bun run build`: Build the web app
- `bun run check-types`: Build and run TypeScript checks
- `bun run deploy`: Deploy the web app through Alchemy on stage `prod`
- `bun run destroy`: Destroy the deployed web app
- `bun run check`: Run Oxlint and Oxfmt
