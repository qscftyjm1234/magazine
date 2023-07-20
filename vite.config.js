import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/magazine/',  // 部屬專案名稱
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