import { IndexOrdersRouter } from '../index-orders';
import { UseCaseInterface } from '../../../../domain/usecases/interface';
import { HttpResponse } from '../../../helpers';

const makeAllDealsUseCase = ({ error = false }) => {
  class GetAllDealsUseCaseSpy implements UseCaseInterface {
    async run() {
      if (error) {
        throw new Error('something');
      }

      return [];
    }
  }
  return new GetAllDealsUseCaseSpy();
};

describe('IndexOrdersRouter', () => {
  it('should return 200', async () => {
    const allDealsUseCaseSpy = makeAllDealsUseCase({ error: false });
    const sut = new IndexOrdersRouter(allDealsUseCaseSpy);
    const httpResponse = await sut.route();
    const success = HttpResponse.ok({});
    expect(httpResponse.statusCode).toBe(success.statusCode);
  });

  it('should return 400 if usecase fails', async () => {
    const allDealsUseCaseSpy = makeAllDealsUseCase({ error: true });
    const sut = new IndexOrdersRouter(allDealsUseCaseSpy);
    const httpResponse = await sut.route();
    const error = HttpResponse.serverError();
    expect(httpResponse.statusCode).toEqual(error.statusCode);
    expect(httpResponse.body).toEqual(error.body);
  });
});
