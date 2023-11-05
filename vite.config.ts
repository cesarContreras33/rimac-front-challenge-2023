/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'

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
      "@": path.resolve(__dirname,"src"),
      "@styles": path.resolve(__dirname,"src/styles"),
      "@fonts": path.resolve(__dirname,"src/assets/fonts"),
      "@types": path.resolve(__dirname,"src/types"),
      "@images": path.resolve(__dirname,"src/assets/images"),
      "@constants": path.resolve(__dirname,"src/assets/constants"),
      "@atoms": path.resolve(__dirname,"src/components/Atomos"),
      "@molecules": path.resolve(__dirname,"src/components/Moleculas"),
      "@organism": path.resolve(__dirname,"src/components/Organismos"),
      "@template": path.resolve(__dirname,"src/components/template"),
      "@pages": path.resolve(__dirname,"src/components/Pages"),
      "@redux": path.resolve(__dirname,"src/redux"),
      "@utils": path.resolve(__dirname,"utils"),
      "@api": path.resolve(__dirname,"src/api")
    }
  },
  build:{
    outDir:'docs'
  },
  base:'/'
})
