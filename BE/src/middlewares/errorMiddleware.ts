import type { NextFunction, Request, Response } from 'express';

import { AppError } from '../types/api.js';

export function errorMiddleware(err: unknown, _req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      data: null,
      message: err.message,
      error: {
        code: err.code,
        details: err.message,
      },
    });
    return;
  }

  const message = err instanceof Error ? err.message : 'Internal Server Error';

  // eslint-disable-next-line no-console
  console.error('[BE] Unhandled error:', err);

  res.status(500).json({
    status: 'error',
    data: null,
    message,
    error: {
      code: 'INTERNAL_ERROR',
      details: message,
    },
  });
}
