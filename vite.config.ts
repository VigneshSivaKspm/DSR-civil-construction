import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { seoPlugin } from './seo/vitePluginSeo';

export default defineConfig({
  plugins: [react(), seoPlugin()],
  server: {
    port: 5173,
    host: true
  }
});
