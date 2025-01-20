// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: 'https://gitlabce.tools.aws.vodafone.com/IOT/Portal_2.0/cms-iot.git',
  plugins: [
    react(),
    federation({
      name: 'cms-iot',
      remotes: {
        translations: 'http://localhost:9091/assets/remoteEntry.js',
        flags: 'http://localhost:9081/assets/remoteEntry.js',
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
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
