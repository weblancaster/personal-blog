import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bymichaellancaster.com",
  // base is required for GitHub Pages project repos (weblancaster.github.io/personal-blog/).
  // Remove this line once your custom domain (bymichaellancaster.com) is fully active
  // in GitHub Settings → Pages and DNS has propagated — the custom domain serves from root.
  base: "/personal-blog",
  integrations: [sitemap()],
  output: "static",
  trailingSlash: "always",
});
