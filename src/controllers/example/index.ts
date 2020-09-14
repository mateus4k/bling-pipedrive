// import { Response, Request } from 'express';
import { ServiceInterface } from '../../services/service-interface';
import { HttpResponse } from '../../helpers/http';
import { ControllerInterface } from '../controller-interface';
import { IResponse } from '../../helpers/http';

class ExampleController implements ControllerInterface {
  constructor(private service: ServiceInterface) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async route(httpRequest): Promise<IResponse> {
    try {
      const message = this.service.run();
      return HttpResponse.ok({ message });
    } catch (error) {
      return HttpResponse.serverError();
    }
  }
}

export default ExampleController;
