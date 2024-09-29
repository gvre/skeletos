import { app } from './app';
import { cleanup } from './cleanup';
import { config } from './config';

const server = app.listen(config.app.port, () => {
  console.log(`Listening on port ${config.app.port}...`);
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
// Listen for termination signals
process.on('SIGINT', () => cleanup(server)); // Ctrl+C
process.on('SIGTERM', () => cleanup(server)); // Termination signal

process.on('unhandledRejection', (error) => {
  console.error('Uncaught Exception:', error);
  cleanup(server);
});
