import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://vercel-backend-hfgz.onrender.com/api/products",
      "/uploads/": "https://vercel-backend-hfgz.onrender.com/api/products",
    },
  },
});
