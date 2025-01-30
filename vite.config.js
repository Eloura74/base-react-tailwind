import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext", // Optimisation pour les navigateurs modernes
    outDir: "dist",
    minify: "esbuild", // Minification plus rapide
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur
  },
});
