import { RouterInterface } from '../../presentation/routers/interface';

export class ExpressRouterAdapter {
  static adapt(router: RouterInterface) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body,
      };

      const httpResponse = await router.route(httpRequest);

      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}
