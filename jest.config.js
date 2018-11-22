module.exports = {
    name: "ergoform",
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@classes/(.*)$': '<rootDir>/src/classes/$1'
    },
    // testMatch: []
};