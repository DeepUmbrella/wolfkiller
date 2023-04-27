import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
const config = require("./tsconfig.json");

console.log(config);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@styles": resolve(__dirname, "src/styles"),
      "@template": resolve(__dirname, "src/template"),
      "@vtypes": resolve(__dirname, "src/types"),
      "@constant": resolve(__dirname, "src/constant"),
      "@pages": resolve(__dirname, "src/pages"),
      "@api": resolve(__dirname, "src/api"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
  server: {
    hmr: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    open: true,
    host: "0.0.0.0",
  },
});
