import { IGetMessage } from '../../../infra/repositories/interfaces';

export class GetMessageUseCase {
  constructor(private getMessageRepository: IGetMessage) {}

  run(): string {
    return this.getMessageRepository.getMessage();
  }
}
