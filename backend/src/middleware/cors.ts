import type { Request, Response, NextFunction,  } from 'express';

export function corsLite(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin as string | undefined;

  if (origin && (origin === 'http://localhost:4200' )) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Vary', 'Origin');
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
}
