module.exports = {
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/main/index.ts',
    'interface?(s)'
  ]
}
