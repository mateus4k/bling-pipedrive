import { GetMessageInterface } from '../../../infra/repositories/interfaces';

export class GetMessageUseCase {
  constructor(private getMessageRepository: GetMessageInterface) {}

  run(): string {
    return this.getMessageRepository.getMessage();
  }
}
