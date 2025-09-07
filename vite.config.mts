import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: vite
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.tests.ts'],
    include: [
      './src/**/*.test.tsx',
      './src/**/*.spec.tsx',
      './src/**/*.test.ts',
    ],
    globals: false,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/tests/**/*', 'src/**/*.type.ts', 'src/**/*/index.ts'],
    },
  },
});
