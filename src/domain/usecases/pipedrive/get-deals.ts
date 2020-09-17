import {
  DealsInterface,
  GetDealsInterface,
} from '../../../infra/repositories/interfaces';
import { UseCaseInterface } from '../interface';

export class GetDealsPipedriveUseCase implements UseCaseInterface {
  constructor(private pipedriveRepository: GetDealsInterface) {}

  async run(): Promise<DealsInterface> {
    const limit = 100;
    const response = await this.pipedriveRepository.getDeals('won', limit);
    return response;
  }
}
