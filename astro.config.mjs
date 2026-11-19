import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://campanharpg.com.br",
  output: "static",
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  redirects: {
    "/regras-da-casa/tipos-de-venenos/": "/tipos-de-venenos/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
