import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@img": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/pages/session10/practice/redux", import.meta.url)),
    },
  },
})
