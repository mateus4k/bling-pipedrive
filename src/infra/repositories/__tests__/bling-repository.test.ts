import { BlingRepository } from '../bling-repository';
import { env } from '../../../main/config/env';
import { dealMock } from '../../../utils/mocks/deal';

describe('BlingRepository', () => {
  it('returns 200', async () => {
    const repository = new BlingRepository(env.bling.baseUrl, env.bling.token);
    const response = await repository.createOrder(dealMock);

    expect(response.numero).toBeTruthy();
    expect(response.idPedido).toBeTruthy();
  });
});
