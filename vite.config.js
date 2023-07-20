import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
      postcss: {
        plugins: [tailwindcss]
      },
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/src/styles/global.scss";`
        }
      }
  }
})
