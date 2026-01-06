import { Router } from 'express';
import type { Request, Response } from 'express';

export const routes = Router();

routes.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    data: {
      ok: true,
    },
    message: 'OK',
  });
});
