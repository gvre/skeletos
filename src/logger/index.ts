import { createLogger, format, transports } from 'winston';
import { config } from '../config';
import { isProductionEnvironment } from '../env';

export const logger = createLogger({
  level: isProductionEnvironment() ? 'info' : 'debug',
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp(),
    format.metadata({
      key: 'meta',
      fillExcept: [
        'message',
        'level',
        'timestamp',
        'label',
        'commit',
        'version',
        'requestId',
        'clientIp',
        'userAgent',
        'stack',
        'status',
      ],
    }),
    format.json(),
  ),
  defaultMeta: {
    commit: config.app.commit,
    version: config.app.version,
  },
  transports: [
    new transports.Console({
      silent: false,
    }),
  ],
  exitOnError: false,
});
