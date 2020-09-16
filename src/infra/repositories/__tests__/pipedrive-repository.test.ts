import { PipedriveRepository } from '../pipedrive-repository';
import { env } from '../../../main/config/env';

describe('PipedriveRepository', () => {
  it('returns 200', async () => {
    const repository = new PipedriveRepository(
      env.pipedrive.baseUrl,
      env.pipedrive.token,
    );

    const limit = 15;
    const response = await repository.getDeals('won', limit);

    expect(response.additional_data.pagination.limit).toBe(limit);
    expect(response.success).toBeTruthy();
  });
});
