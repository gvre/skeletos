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

// Middlewares
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

// Routes
app.use('/', router);

// Default error handler
router.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // If you call next() with an error after you have started writing the response
  // (for example, if you encounter an error while streaming the response to the client)
  // the Express default error handler closes the connection and fails the request.
  // So when you add a custom error handler, you must delegate to the default Express error handler,
  // when the headers have already been sent to the client.
  if (res.headersSent) {
    return next(err);
  }

  req.logger.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

export { app };
