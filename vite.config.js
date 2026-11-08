import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Production build optimizations for Lighthouse 100
  build: {
    // Target modern browsers for smaller, faster output
    target: 'es2020',

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Generate sourcemaps only for debugging (disable in production for smaller bundles)
    sourcemap: false,

    // Asset inlining threshold (4KB - smaller assets inlined as base64)
    assetsInlineLimit: 4096,

    // Rolldown handles automatic code splitting
    rolldownOptions: {
      output: {
        // Add content hash to filenames for long-term caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },

    // Chunk size warning limit (1MB)
    chunkSizeWarningLimit: 1000,
  },

  // Dev server optimizations
  server: {
    port: 5173,
    open: true,
    // Enable HTTPS for testing PWA features locally
    // https: true,
  },

  // Preview server (for testing production build)
  preview: {
    port: 4173,
    open: true,
  },

  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@emailjs/browser'],
    exclude: [],
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
