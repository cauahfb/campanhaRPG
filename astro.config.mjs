import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Necessário para URLs canônicas, Open Graph e sitemap.
  site: "https://campanharpg.com.br",
  output: "static",
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  // O catálogo de venenos vive em /tipos-de-venenos/; esta URL antiga era só um rascunho.
  redirects: {
    "/regras-da-casa/tipos-de-venenos/": "/tipos-de-venenos/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
