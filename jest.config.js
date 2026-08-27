const nextJest = require("next/jest");

// Reads next.config.mjs and the jsconfig paths so tests compile JSX, resolve
// `@/*` imports and stub static assets exactly like the application does.
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "app/**/*.js",
    "components/**/*.js",
    "data/**/*.js",
    "lib/**/*.js",
  ],
};

module.exports = createJestConfig(config);
