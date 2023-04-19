module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.tsx', 'pages/**/*.tsx'],
  coverageReporters: ['lcov', 'text'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
    '!**/*.+(png|jpg|jpeg|gif|webp|svg)',
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
