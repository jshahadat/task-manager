import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Explicitly set output directory
    emptyOutDir: true, // Clear the directory before building
  },
  server: {
    port: 3000, // Optional: Set development server port
  },
});
