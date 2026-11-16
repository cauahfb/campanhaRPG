import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Configuração inicial: portal estático, sem servidor ou banco de dados.
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
