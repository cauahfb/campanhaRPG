import type { APIRoute } from "astro";
import venenos from "../data/venenos.json";
import { personagens } from "../data/personagens";
import { vinculos } from "../data/vinculos";
import { sessoes } from "../data/sessoes";
import { misterios } from "../data/misterios";
import { cronicas } from "../data/cronicas";
import { SITE } from "../data/site";

/** Páginas ainda sem conteúdo ficam fora do sitemap (e recebem noindex no layout). */
const hiddenRoutes = new Set<string>([
  "/universo/bestiario-do-melvis/",
  ...(vinculos.length === 0 ? ["/corvonescos/vinculos/"] : []),
  ...(sessoes.length === 0 && misterios.length === 0 ? ["/corvonescos/diario-de-bordo/"] : []),
]);

const pageFiles = Object.keys(import.meta.glob("./**/*.{astro,md}"));

const staticRoutes = pageFiles
  .map((file) => file.replace(/^\.\//, "").replace(/\.(astro|md)$/, ""))
  .filter((route) => !route.includes("[") && route !== "404" && route !== "sitemap.xml")
  .map((route) => (route === "index" ? "/" : `/${route.replace(/\/index$/, "")}/`));

const dynamicRoutes = [
  ...personagens.map((item) => `/corvonescos/personagens/${item.slug}/`),
  ...cronicas.map((item) => `/universo/cronicas-da-campanha/${item.slug}/`),
  ...venenos.map((item) => `/tipos-de-venenos/${item.slug}/`),
];

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(SITE.url)).origin;
  const urls = [...new Set([...staticRoutes, ...dynamicRoutes])]
    .filter((route) => !hiddenRoutes.has(route))
    .sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((route) => `  <url><loc>${escapeXml(new URL(route, origin).href)}</loc></url>`)
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
