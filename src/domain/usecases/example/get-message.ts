import { IGetMessage } from '../../../infra/repositories/interfaces';

export class getMessage {
  constructor(private getMessageRepository: IGetMessage) {}

  run(): string {
    return this.getMessageRepository.getMessage();
  }
}
