import { CreateManyOrdersInterface } from '../../../infra/repositories/interfaces';
import { MissingParamError } from '../../../utils/errors';
import { UseCaseInterface } from '../interface';

export class CreateOrdersBlingUseCase implements UseCaseInterface {
  constructor(private blingRepository: CreateManyOrdersInterface) {}

  async run(orders) {
    if (!orders) {
      throw new MissingParamError('orders');
    }

    const response = await this.blingRepository.createManyOrders(orders);
    return response;
  }
}
