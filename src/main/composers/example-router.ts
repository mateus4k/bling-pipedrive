import { GetMessageRouter } from '../../presentation/routers/example/get-message';
import { getMessage } from '../../domain/usecases/example';
import { ExampleRepository } from '../../infra/repositories/example-repository';

export class ExampleControllerComposer {
  static compose() {
    const getMessageRepository = new ExampleRepository();
    const getMessageService = new getMessage(getMessageRepository);
    return new GetMessageRouter(getMessageService);
  }
}
