import cors, { type CorsOptions } from 'cors';
import { randomUUID } from 'crypto';
import express from 'express';
import morgan from 'morgan';
import { logger } from './logger';
import { router } from './routes';

const app = express();
app.disable('x-powered-by');

// Get the user IP, instead of the proxy one.
app.enable('trust proxy');

// Logger middleware
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const clientIp = req.ip;
  const userAgent = req.get('User-Agent');
  const requestId = req.header('X-Request-Id') ?? randomUUID();

  req.requestId = requestId;
  res.setHeader('X-Request-Id', requestId);

  req.logger = logger.child({ requestId, clientIp, userAgent });
  next();
});

const corsOptions: CorsOptions = {
  exposedHeaders: ['X-Request-Id'],
};
app.use(cors(corsOptions));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

export { app };
