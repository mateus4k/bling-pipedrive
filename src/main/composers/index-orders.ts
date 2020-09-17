import { GetAllDealsUseCase } from '../../domain/usecases';
import { DealsRepository } from '../../infra/repositories';
import { IndexOrdersRouter } from '../../presentation/routers';

export class IndexOrdersComposer {
  static compose() {
    const dealsRepository = new DealsRepository();
    const getAllDealsUseCase = new GetAllDealsUseCase(dealsRepository);
    return new IndexOrdersRouter(getAllDealsUseCase);
  }
}
