import express from 'express';
import { hostname } from 'node:os';

enum HealthStatus {
  Healthy = 'healthy',
  Degraded = 'degraded',
  Unhealthy = 'unhealthy',
}

type HealthCheckResponse = {
  datetime: string;
  status: HealthStatus;
  hostname: string;
  runtimeVersion?: string;
  commit?: string;
  appVersion?: string;
};

const host = hostname();
const runtimeVersion = process.versions.node;

export function registerHealthRoutes(extra?: { commit?: string; appVersion?: string }): express.Router {
  const router = express.Router();
  router.get('/', (req: express.Request, res: express.Response) => {
    const healthCheckResponse: HealthCheckResponse = {
      datetime: new Date().toISOString(),
      status: HealthStatus.Healthy,
      hostname: host,
      runtimeVersion,
      ...extra,
    };
    res.json(healthCheckResponse);
  });

  return router;
}
