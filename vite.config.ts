import { configDefaults, defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          const normalized = id.replace(/\\/g, '/');
          if (normalized.includes('/node_modules/')) {
            if (
              normalized.includes('/react/') ||
              normalized.includes('/react-dom/') ||
              normalized.includes('/react-router')
            ) {
              return 'vendor-react';
            }
            if (normalized.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
          const courseMatch = normalized.match(/\/src\/data\/courses\/([^/]+)\.ts$/);
          if (courseMatch) {
            return `course-${courseMatch[1]}`;
          }
          return undefined;
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },
  };
});
