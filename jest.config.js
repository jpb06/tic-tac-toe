const { transformTsPaths } = require('ts-paths-transform');
const nextJest = require('next/jest');

const {
  compilerOptions: { paths },
} = require('./tsconfig');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/**
 * @type {import('@jest/types').Config.ProjectConfig}
 **/
// Add any custom config to be passed to Jest
const customJestConfig = {
  rootDir: '.',
  globalSetup: '<rootDir>/jest/jest.setup.env.ts',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'es2021',
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: transformTsPaths(paths, {
    prefix: '<rootDir>/',
    debug: true,
  }),
  testEnvironment: 'jest-environment-jsdom',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./src/tests/**',
    '!./src/pages/**',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/*.type.ts',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
