import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { paths } from "./src/routes/Navigation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Abre diretamente a rota /login no servidor
    open: paths.login,
  },
});
