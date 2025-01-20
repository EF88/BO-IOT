// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'backoffice-iot.vercel.app' : '/',
  plugins: [
    react(),
    federation({
      name: 'cms-iot',
      remotes: {
        translations: process.env.VITE_TRANSLATIONS_URL || 'http://localhost:9091/assets/remoteEntry.js',
        flags: process.env.VITE_FLAGS_URL || 'http://localhost:9081/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '~/': `${resolve(__dirname, '.')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/tailwind.css";',
      },
    },
  },
  build: {
    outDir: 'dist',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
