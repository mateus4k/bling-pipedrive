import { UseCaseInterface } from '../../../domain/usecases/interface';
import { RouterInterface } from '../interface';
import { HttpResponse, ResponseInterface } from '../../helpers';

export class StoreOrdersRouter implements RouterInterface {
  constructor(
    private getDealsPipedriveUseCase: UseCaseInterface,
    private createOrdersBlingUseCase: UseCaseInterface,
    private saveManyDealsUseCase: UseCaseInterface,
  ) {}

  async route(): Promise<ResponseInterface> {
    try {
      const deals = await this.getDealsPipedriveUseCase.run();

      if (!Array.isArray(deals)) {
        return HttpResponse.notFoundError();
      }

      const createOrders = () => this.createOrdersBlingUseCase.run(deals);
      const saveManyDeals = () => this.saveManyDealsUseCase.run(deals);

      await Promise.all([createOrders, saveManyDeals]);

      return HttpResponse.ok({ data: deals });
    } catch (error) {
      return HttpResponse.serverError();
    }
  }
}
