import alchemy from "alchemy";
import { Vite } from "alchemy/cloudflare";

const app = await alchemy("gneisslab");
const domain = app.stage === "prod" ? "gneiss.run" : undefined;

export const web = await Vite("web", {
  cwd: ".",
  assets: "dist",
  adopt: true,
  domains: domain
    ? [
        {
          domainName: domain,
          adopt: true,
        },
      ]
    : undefined,
  bindings: {
    VITE_SERVER_URL: alchemy.env.VITE_SERVER_URL!,
  },
});

console.log(`Web    -> ${domain ? `https://${domain}` : web.url}`);

await app.finalize();
