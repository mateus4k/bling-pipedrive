import { GetMessageRouter } from '../../presentation/routers/example/get-message';
import { GetMessageUseCase } from '../../domain/usecases/example';
import { ExampleRepository } from '../../infra/repositories/example-repository';

export class ExampleRouterComposer {
  static compose() {
    const getMessageRepository = new ExampleRepository();
    const getMessageUseCase = new GetMessageUseCase(getMessageRepository);
    return new GetMessageRouter(getMessageUseCase);
  }
}
