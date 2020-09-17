import { MissingParamError } from '../../../../utils/errors';
import { CreateOrdersBlingUseCase } from '../create-orders';

const makeBlingRepository = () => {
  class BlingRepositorySpy {
    createManyOrders(orders) {
      return orders;
    }
  }
  return new BlingRepositorySpy();
};

const makeSut = () => {
  const blingRepository = makeBlingRepository();
  const sut = new CreateOrdersBlingUseCase(blingRepository);
  return { sut, blingRepository };
};

describe('CreateOrdersBlingUseCase', () => {
  it('should return 200', async () => {
    const { sut } = makeSut();
    const orders = [];
    const response = await sut.run(orders);
    expect(response).toBe(orders);
  });

  it('should throw if no orders is provided', async () => {
    const { sut } = makeSut();
    const promise = sut.run(null);
    return expect(promise).rejects.toThrow(new MissingParamError('orders'));
  });
});
