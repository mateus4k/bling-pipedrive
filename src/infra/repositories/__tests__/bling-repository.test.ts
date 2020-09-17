import { BlingRepository } from '../bling-repository';
import { env } from '../../../main/config/env';
import { dealMock } from '../../../utils/mocks/deal';
import { InvalidParamError } from '../../../utils/errors';

const makeSut = () => {
  const sut = new BlingRepository(env.bling.baseUrl, env.bling.token);
  return { sut };
};

describe('BlingRepository', () => {
  it('returns 200', async () => {
    const { sut } = makeSut();
    const response = await sut.createOrder(dealMock);

    expect(response.numero).toBeTruthy();
    expect(response.idPedido).toBeTruthy();
  });

  it('createManyOrders should throw if no orders is provided', async () => {
    const { sut } = makeSut();
    const promise = sut.createManyOrders(undefined);
    return expect(promise).rejects.toThrow(new InvalidParamError('orders'));
  });

  it('createManyOrders should call createOrder', async () => {
    const { sut } = makeSut();
    jest.spyOn(sut, 'createOrder');
    await sut.createManyOrders([dealMock, dealMock]);
    expect(sut.createOrder).toHaveBeenCalledWith(dealMock);
    expect(sut.createOrder).toHaveBeenCalledTimes(2);
  });
});
