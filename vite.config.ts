/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    environment: "jsdom",
    css:true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/scss/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      styles: '/src/styles'
    }
  },
  build:{
    outDir:'dist'
  }
})
