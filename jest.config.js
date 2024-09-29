/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  testMatch: ['**/*.test.ts', '**/*.test-i.ts', '**/*.test-e.ts'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};