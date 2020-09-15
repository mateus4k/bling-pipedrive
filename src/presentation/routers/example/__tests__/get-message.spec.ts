import { GetMessageRouter } from '../get-message';
import { UseCaseInterface } from '../../../../domain/usecases/interface';
import { HttpResponse } from '../../../helpers';

const makeMessageUseCase = ({ error = false }) => {
  class ExampleUseCaseSpy implements UseCaseInterface {
    async run() {
      if (error) {
        throw new Error('something');
      }

      return true;
    }
  }
  return new ExampleUseCaseSpy();
};

describe('GetMessageRouter', () => {
  it('should return 200', async () => {
    const authUseCaseSpy = makeMessageUseCase({ error: false });
    const sut = new GetMessageRouter(authUseCaseSpy);
    const httpResponse = await sut.route();
    const success = HttpResponse.ok({});
    expect(httpResponse.statusCode).toBe(success.statusCode);
  });

  it('should return 400 if usecase fails', async () => {
    const authUseCaseSpy = makeMessageUseCase({ error: true });
    const sut = new GetMessageRouter(authUseCaseSpy);
    const httpResponse = await sut.route();
    const error = HttpResponse.serverError();
    expect(httpResponse.statusCode).toEqual(error.statusCode);
    expect(httpResponse.body).toEqual(error.body);
  });
});
