import { UnauthorizedError, ServerError } from '../../errors';
import { InvalidParamError, MissingParamError } from '../../../utils/errors';
import { HttpResponse } from '../http-response';

describe('HttpResponse', () => {
  it('should returns ok', () => {
    const body = {
      any: 'field',
    };

    const sut = HttpResponse.ok(body);

    expect(sut).toEqual({
      statusCode: 200,
      body,
    });
  });

  it('should returns a bad request with invalid param error', () => {
    const message = 'mock';

    const sut = HttpResponse.badRequest(new InvalidParamError(message));

    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Invalid param: mock',
      },
    });
  });

  it('should returns a bad request with missing param error', () => {
    const message = 'mock';

    const sut = HttpResponse.badRequest(new MissingParamError(message));

    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Missing param: mock',
      },
    });
  });

  it('should returns an unauthorized error', async () => {
    const sut = HttpResponse.unauthorizedError();

    expect(sut).toEqual({
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    });
  });

  it('should returns a not found error', async () => {
    const sut = HttpResponse.notFoundError();

    expect(sut).toEqual({
      statusCode: 404,
      body: {
        error: 'Not found',
      },
    });
  });

  it('should returns a server error', async () => {
    const sut = HttpResponse.serverError();

    expect(sut).toEqual({
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    });
  });
});
