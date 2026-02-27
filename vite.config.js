import { defineConfig } from "vite";

export default defineConfig({
  // Serve the root directory as the built output for preview mode
  build: {
    outDir: ".",
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
});
