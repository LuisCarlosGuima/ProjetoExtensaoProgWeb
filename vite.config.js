import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/assets/home.scss' }
    }),
    module.exports = {
      publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 8002,
  },
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};