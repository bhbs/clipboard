import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/clipboard/",
  server: {
    open: true,
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Clipboard",
        short_name: "Clipboard",
        description: "A clipboard tool",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "copy.svg",
            sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: "screen.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
});
