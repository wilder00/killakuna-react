module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.cjs',
  }
}