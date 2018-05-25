module.exports = {
  collectCoverageFrom: [
    // "components/**/!(index).(js|ts)?(x)",
    // "helpers/**/!(index).(js|ts)?(x)",
    "pages/**/*.(js|ts)?(x)"
  ],
  coverageDirectory: "coverage",
  testMatch: [
    // "<rootDir>/components/**/?(*.)(spec|test).(js|ts)?(x)",
    // "<rootDir>/helpers/**/?(*.)(spec|test).(js|ts)?(x)",
    "<rootDir>/pages/**/?(*.)(spec|test).(js|ts)?(x)"
  ],
  // reporters: process.env.CI ? undefined : ["jest-spec-reporter"],
  rootDir: ".",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
  ],
  moduleNameMapper: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jest-environment-webdriver",
  globals: {
    "ts-jest": {
      skipBabel: true
      // useBabelrc: true
    }
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/'
  ],
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js"
};
