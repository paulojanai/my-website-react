import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@scss": `${path.resolve(__dirname, "./src/scss/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@data": `${path.resolve(__dirname, "./src/data/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
    },
  }
})
