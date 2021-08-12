import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
   "setupFilesAfterEnv": [
      "<rootDir>/jest.setup.ts"
    ],
  moduleNameMapper: {
    '^pages(.*)$': '<rootDir>/pages$1',
  },
};

export default config;
