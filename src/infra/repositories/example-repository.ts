import { IGetMessage } from './interfaces';

export class ExampleRepository implements IGetMessage {
  getMessage(): string {
    return 'hi';
  }
}
