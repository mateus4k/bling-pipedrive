import { UseCaseInterface } from '../interface';

export class GetAllDealsUseCase implements UseCaseInterface {
  constructor(private dealRepository) {}

  async run() {
    const response = await this.dealRepository.all();
    return response;
  }
}
