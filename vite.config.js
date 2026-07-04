import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/filo/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon-180x180.png', 'data/*.json'],
      manifest: {
        name: '唯识研读',
        short_name: '唯识研读',
        description: '《成唯识论》中英文版本对照及唯识研读',
        theme_color: '#060813',
        background_color: '#060813',
        display: 'standalone',
        icons: [
          {
            src: '/filo/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/filo/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/filo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/filo/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
});
