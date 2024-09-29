import { commit, version } from '../../package.json';

export type Config = {
  app: {
    port: number;
    commit: string;
    version: string;
  };
};

export const config: Config = {
  app: {
    port: 3000,
    commit,
    version,
  },
};
