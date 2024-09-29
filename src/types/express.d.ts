import winston from 'winston';

declare global {
  namespace Express {
    interface Request {
      logger: winston.Logger;
      requestId: string;
    }
  }
}
