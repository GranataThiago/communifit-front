module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [ 
    '<rootDir>/app/components/**',
    '<rootDir>/app/**.tsx',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/.next/**',
    ],
    coverageDirectory: "coverage",
    preset: 'ts-jest',
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 80,
            statements: 80,
        },
    },
}    