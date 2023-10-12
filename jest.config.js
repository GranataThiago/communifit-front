const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})


const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [ 
    '<rootDir>/**.tsx',
    '!<rootDir>/app/**/layout.tsx',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/app/components/index.ts', 
    '!<rootDir>/app/components/fonts.ts',
    '!<rootDir>/app/layout.tsx',
    '!<rootDir>/app/providers/**'
    ],
    coverageDirectory: "coverage",
    preset: 'ts-jest',
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 75,
            lines: 80,
            statements: 80,
        },
    },
}    

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: ['node_modules/'],
})