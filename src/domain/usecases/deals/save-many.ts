import { Deal as PipedriveDeal } from '../../../infra/repositories/interfaces';
import { UseCaseInterface } from '../interface';

export class SaveManyDealsUseCase implements UseCaseInterface {
  constructor(private dealRepository) {}

  async run(deals: PipedriveDeal[]) {
    const preparedDeals = deals.map((deal) => {
      const { id, value, currency, status, title } = deal;

      return {
        id,
        user: deal.user_id,
        creator: deal.creator_user_id,
        person: deal.person_id,
        org: deal.org_id,
        title,
        value,
        currency,
        status,
        created_at: deal.expected_close_date,
      };
    });

    const response = await this.dealRepository.insertMany(preparedDeals);

    return response;
  }
}
