import { PipedriveRepository } from '../pipedrive-repository';
import { env } from '../../../main/config/env';

describe('PipedriveRepository', () => {
  it('returns 200', async () => {
    const repository = new PipedriveRepository(
      env.pipedrive.baseUrl,
      env.pipedrive.token,
    );

    const response = await repository.getDeals('won', 1);
    expect(response[0].id).toBeTruthy();
  });
});
