import { defineConfig } from "vite";

// GitHub Pages project site: https://<username>.github.io/<repo>/
// Repo name = handchord => base phải là "/handchord/" khi build trên GitHub Actions.
// Local dev và build local vẫn dùng "/" để không vỡ đường dẫn.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGitHubPages ? "/handchord/" : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
