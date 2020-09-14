import { UnauthorizedError, ServerError } from '../../errors';
import { InvalidParamError, MissingParamError } from '../../../utils/errors';
import { HttpResponse } from '../http-response';

const makeSut = (callback) => {
  class Mock {
    run() {
      return callback();
    }
  }

  return new Mock().run();
};

describe('HttpResponse', () => {
  it('should returns ok', () => {
    const body = {
      any: 'field',
    };

    const sut = makeSut(() => HttpResponse.ok(body));

    expect(sut).toEqual({
      statusCode: 200,
      body,
    });
  });

  it('should returns a bad request with invalid param error', () => {
    const message = 'mock';

    const sut = makeSut(() =>
      HttpResponse.badRequest(new InvalidParamError(message)),
    );

    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Invalid param: mock',
      },
    });
  });

  it('should returns a bad request with missing param error', () => {
    const message = 'mock';

    const sut = makeSut(() =>
      HttpResponse.badRequest(new MissingParamError(message)),
    );

    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Missing param: mock',
      },
    });
  });

  it('should returns an unauthorized error', async () => {
    const sut = makeSut(() => HttpResponse.unauthorizedError());

    expect(sut).toEqual({
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    });
  });

  it('should returns an server error', async () => {
    const sut = makeSut(() => HttpResponse.serverError());

    expect(sut).toEqual({
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    });
  });
});
