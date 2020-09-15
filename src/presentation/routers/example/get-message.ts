import { UseCaseInterface } from '../../../domain/usecases/interface';
import { RouterInterface } from '../interface';
import { HttpResponse, ResponseInterface } from '../../helpers';

export class GetMessageRouter implements RouterInterface {
  constructor(private getMessageUseCase: UseCaseInterface) {}

  async route(): Promise<ResponseInterface> {
    try {
      const message = await this.getMessageUseCase.run();
      return HttpResponse.ok({ message });
    } catch (error) {
      return HttpResponse.serverError();
    }
  }
}
