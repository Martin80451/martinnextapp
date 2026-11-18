import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import paths from "vite-plugin-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), paths()],
  server: { port: 3000 },
});
