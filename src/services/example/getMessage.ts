import {
  Example as ExampleRepository,
  IExample,
} from '../../repositories/example';
import { ServiceInterface } from '../interface';

export class getMessage implements ServiceInterface {
  private repository: IExample;

  constructor() {
    this.repository = new ExampleRepository();
  }

  run(): string {
    return this.repository.getMessage();
  }
}
