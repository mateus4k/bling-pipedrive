import { GetMessageInterface } from './interfaces';

export class ExampleRepository implements GetMessageInterface {
  getMessage(): string {
    return 'hi';
  }
}
