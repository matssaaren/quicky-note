import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Quicky Notes',
        short_name: 'Notes',
        start_url: '.',
        display: 'standalone',
        background_color: '#0c0c0c',
        theme_color: '#3fb950',
        icons: [
          {
            src: '/img.svg',
            type: 'image/svg+xml',
          }
        ],
      },
    }),
  ],
});
