import { GetAllDealsUseCase } from '../get-all';

const makeDealRepository = () => {
  class DealRepositorySpy {
    all() {
      return [];
    }
  }
  return new DealRepositorySpy();
};

const makeSut = () => {
  const dealRepository = makeDealRepository();
  const sut = new GetAllDealsUseCase(dealRepository);
  return { sut, dealRepository };
};

describe('GetAllDealsUseCase', () => {
  it('should return all deals successfully', async () => {
    const { sut } = makeSut();
    const response = await sut.run();
    expect(response).toEqual([]);
  });
});
