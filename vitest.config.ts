import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.ts', '**/*.test-i.ts', '**/*.test-e.ts'],
    // Clear the mocks call count before each test so that we don't have to call vi.clearAllMocks manually - https://vitest.dev/config/#clearmocks
    clearMocks: true,
  },
});
