module.exports = {
  
    testMatch: [
      "<rootDir>/__tests__/*.spec.js"
    ],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ]
  };