import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

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
