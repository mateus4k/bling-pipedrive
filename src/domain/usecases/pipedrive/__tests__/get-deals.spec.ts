import {
  DealsInterface,
  GetDealsInterface,
} from '../../../../infra/repositories/interfaces';
import { dealMock } from '../../../../utils/mocks/deal';
import { GetDealsPipedriveUseCase } from '../get-deals';

const mockGetDealsResult = () => ({
  additional_data: {
    pagination: { limit: 15, more_items_in_collection: false, start: 0 },
  },
  data: [dealMock],
  success: true,
});

const makePipedriveRepository = () => {
  class PipedriveRepositorySpy implements GetDealsInterface {
    async getDeals(): Promise<DealsInterface> {
      return mockGetDealsResult();
    }
  }
  return new PipedriveRepositorySpy();
};

const makeSut = () => {
  const pipedriveRepository = makePipedriveRepository();
  const sut = new GetDealsPipedriveUseCase(pipedriveRepository);
  return { sut, pipedriveRepository };
};

describe('GetDealsPipedriveUseCase', () => {
  it('should return all deals successfully', async () => {
    const { sut } = makeSut();
    const response = await sut.run();
    expect(response).toEqual(mockGetDealsResult());
  });
});
