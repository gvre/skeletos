import { app } from './app';
import { cleanup } from './cleanup';
import { config } from './config';
import { logger } from './logger';

const server = app.listen(config.app.port, () => {
  logger.info(`Listening on port ${config.app.port}...`);
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
// Listen for termination signals
process.on('SIGINT', () => cleanup(server)); // Ctrl+C
process.on('SIGTERM', () => cleanup(server)); // Termination signal

process.on('unhandledRejection', (error) => {
  logger.error('Uncaught Exception:', error);
  cleanup(server);
});
