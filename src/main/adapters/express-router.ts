import { Request, Response } from 'express';
import { ControllerInterface } from '../../controllers/controller-interface';

export class ExpressRouterAdapter {
  static adapt(router: ControllerInterface) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return async (req: Request, res: Response) => {
      const httpRequest = {
        body: req.body,
      };

      const httpResponse = await router.route(httpRequest);

      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}
