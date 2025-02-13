import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { paths } from "./src/routes/Navigation";
import svgr from "@svgr/rollup";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.ttf", "**/*.woff", "**/*.woff2"],
  server: {
    // Abre diretamente a rota /login no servidor
    open: paths.home,
  },
});
