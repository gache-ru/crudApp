import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@chakra-ui/react": "@chakra-ui/react",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/",
      },
    },
  },
});
