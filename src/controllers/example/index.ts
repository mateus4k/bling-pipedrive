import { UseCaseInterface } from '../../domain/usecases/interface';
import { HttpResponse } from '../../helpers/http';
import { ControllerInterface } from '../controller-interface';
import { IResponse } from '../../helpers/http';

export class ExampleController implements ControllerInterface {
  constructor(private service: UseCaseInterface) {}

  async route(): Promise<IResponse> {
    try {
      const message = this.service.run();
      return HttpResponse.ok({ message });
    } catch (error) {
      return HttpResponse.serverError();
    }
  }
}
