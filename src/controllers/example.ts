import { Response, Request } from 'express';
import { getMessage } from '../services/example/getMessage';

export const index = (_req: Request, res: Response): Response => {
  const message = new getMessage().run();
  return res.json({ message });
};
