import { UseCaseInterface } from '../../../domain/usecases/interface';
import { RouterInterface } from '../interface';
import { HttpResponse, ResponseInterface } from '../../helpers';

export class IndexOrdersRouter implements RouterInterface {
  constructor(private getAllDealsUseCase: UseCaseInterface) {}

  async route(): Promise<ResponseInterface> {
    try {
      const deals = await this.getAllDealsUseCase.run();
      return HttpResponse.ok({ data: deals });
    } catch (error) {
      console.error({error});
      return HttpResponse.serverError();
    }
  }
}
