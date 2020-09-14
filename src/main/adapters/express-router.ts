import { Request, Response } from 'express';
import { RouterInterface } from '../../presentation/routers/interface';

export class ExpressRouterAdapter {
  static adapt(router: RouterInterface) {
    return async (req: Request, res: Response) => {
      const httpRequest = {
        body: req.body,
      };

      const httpResponse = await router.route(httpRequest);

      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}
