module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ["app/**/*.tsx"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}