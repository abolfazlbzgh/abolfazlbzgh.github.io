import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // ... other options
        assetFileNames: (assetInfo) => (assetInfo.name.endsWith('.jsx') ? '[name].js' : '[name].[ext]'),
        // Add MIME type for JSX files
        chunkFileNames: '[name].[format].js',
        sourcemapFileNames: '[file].map',
        // ... other options
      },
    },
  },
})
