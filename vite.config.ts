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
      '@': 'src',
      'components': '/src/components',
      'styles': '/src/styles',
      'fonts': 'src/assets/fonts',
      'images':'src/assets/images',
      'atomos':'src/components/Atomos',
      'moleculas':'src/components/Moleculas',
      'organismos':'src/components/Organismos',
      'template':'src/components/template',
      'pages':'src/components/Pages'
    }
  },
  build:{
    outDir:'dist'
  },
  base:'/'
})
