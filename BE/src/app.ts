import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { env } from './config/env.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { routes } from './routes/index.js';

export function createApp(): express.Express {
  const app = express();

  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json({ limit: '1mb' }));
  app.use(
    cors({
      origin: env.CORS_ORIGINS,
      credentials: true,
    })
  );

  app.use('/api', routes);

  app.use(errorMiddleware);

  return app;
}
