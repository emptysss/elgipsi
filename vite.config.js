import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
  },
  server: {
    port: 3000,
  },
});
