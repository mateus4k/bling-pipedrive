import { SaveManyDealsUseCase } from '../save-many';
import { dealMock } from '../../../../utils/mocks/deal';

const makeDealRepository = () => {
  class DealRepositorySpy {
    insertMany() {
      return [];
    }
  }
  return new DealRepositorySpy();
};

const makeSut = () => {
  const dealRepository = makeDealRepository();
  const sut = new SaveManyDealsUseCase(dealRepository);
  return { sut, dealRepository };
};

describe('SaveManyDealsUseCase', () => {
  it('should save many deals successfully', async () => {
    const { sut } = makeSut();
    const response = await sut.run([dealMock]);
    expect(response).toEqual([]);
  });
});
