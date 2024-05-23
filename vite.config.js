import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/abolfazlbzgh.github.io/',
  plugins: [react()],
 
})
