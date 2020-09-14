import { ExampleController } from '../../controllers/example/index';
import { getMessage } from '../../services/example/getMessage';
import { ExampleRepository } from '../../infra/repositories/example-repository';

export class ExampleControllerComposer {
  static compose() {
    const getMessageRepository = new ExampleRepository();
    const getMessageService = new getMessage(getMessageRepository);
    return new ExampleController(getMessageService);
  }
}