import ExampleController from '../../controllers/example/index';
import { getMessage } from '../../services/example/getMessage';

export class ExampleControllerComposer {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static compose() {
    const getMessageService = new getMessage();
    return new ExampleController(getMessageService);
  }
}
