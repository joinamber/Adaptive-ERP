// Vercel resolves static files before it applies `rewrites`, so a rewrite from
// "/" can never win against a built dist/index.html. To serve the static
// homepage at the root we have to *be* dist/index.html.
//
// The SPA keeps index.html as its Vite entry (so `npm run dev` is unchanged);
// after the build we swap the two in the output directory:
//   dist/index.html (SPA shell)  -> dist/app.html   [vercel.json falls back here]
//   dist/home.html  (static page) -> dist/index.html
import { rename, copyFile, unlink, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const at = (f) => resolve(dist, f);

for (const f of ["index.html", "home.html"]) {
  await access(at(f)).catch(() => {
    throw new Error(`postbuild: expected dist/${f} to exist after vite build`);
  });
}

await rename(at("index.html"), at("app.html"));
await copyFile(at("home.html"), at("index.html"));
// Drop the duplicate so the homepage is reachable at exactly one URL.
await unlink(at("home.html"));

console.log("postbuild: dist/index.html = static homepage, dist/app.html = SPA shell");
