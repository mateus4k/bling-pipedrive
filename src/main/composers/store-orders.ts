import {
  SaveManyDealsUseCase,
  GetDealsPipedriveUseCase,
  CreateOrdersBlingUseCase,
} from '../../domain/usecases';
import {
  PipedriveRepository,
  BlingRepository,
  DealsRepository,
} from '../../infra/repositories';
import { StoreOrdersRouter } from '../../presentation/routers';
import { env } from '../config/env';

export class StoreOrdersComposer {
  static compose() {
    /**
     * getDealsPipedriveCase
     */
    const pipedriveRepository = new PipedriveRepository(
      env.pipedrive.baseUrl,
      env.pipedrive.token,
    );
    const getDealsPipedriveCase = new GetDealsPipedriveUseCase(
      pipedriveRepository,
    );

    /**
     * createOrdersBlingCase
     */
    const blingRepository = new BlingRepository(
      env.bling.baseUrl,
      env.bling.token,
    );
    const createOrdersBlingCase = new CreateOrdersBlingUseCase(blingRepository);

    /**
     * saveManyDealsUseCase
     */
    const dealsRepository = new DealsRepository();
    const saveManyDealsUseCase = new SaveManyDealsUseCase(dealsRepository);

    return new StoreOrdersRouter(
      getDealsPipedriveCase,
      createOrdersBlingCase,
      saveManyDealsUseCase,
    );
  }
}
