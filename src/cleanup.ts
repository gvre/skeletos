import * as console from 'node:console';
import type * as http from 'node:http';
import * as process from 'node:process';

export const cleanup = (server: http.Server): void => {
  console.log(`Cleaning up before exit...`);
  server.close(() => {
    console.log('HTTP server closed');
  });

  // Perform your cleanup tasks here, e.g., closing database connections, stopping background jobs, etc.

  // Example: If you have a database connection, close it here
  // db.close();

  process.exit(0);
};
