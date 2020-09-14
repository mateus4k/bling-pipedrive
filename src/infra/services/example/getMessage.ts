import { ServiceInterface } from '../service-interface';
import { IGetMessage } from '../../repositories/interfaces';

export class getMessage implements ServiceInterface {
  constructor(private getMessageRepository: IGetMessage) {}

  run(): string {
    return this.getMessageRepository.getMessage();
  }
}
