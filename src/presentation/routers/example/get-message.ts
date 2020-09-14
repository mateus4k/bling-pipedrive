import { UseCaseInterface } from '../../../domain/usecases/interface';
import { RouterInterface } from '../interface';
import { HttpResponse, ResponseInterface } from '../../../helpers/http';

export class GetMessageRouter implements RouterInterface {
  constructor(private GetMessageUseCase: UseCaseInterface) {}

  async route(): Promise<ResponseInterface> {
    try {
      const message = this.GetMessageUseCase.run();
      return HttpResponse.ok({ message });
    } catch (error) {
      return HttpResponse.serverError();
    }
  }
}
