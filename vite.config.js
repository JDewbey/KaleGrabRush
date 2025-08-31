import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [basicSsl()],
  server: {
    https: true,
    host: true,   // allows 0.0.0.0 / LAN
    port: 5173
  }
});
