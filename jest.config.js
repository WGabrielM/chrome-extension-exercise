import '@testing-library/jest-dom';

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy", // Handle CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
