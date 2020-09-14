import { UnauthorizedError, ServerError } from '../../errors';
import { InvalidParamError, MissingParamError } from '../../../utils/errors';
import { HttpResponse } from '../http-response';

describe('HttpResponse', () => {
  it('should returns ok', () => {
    const body = {
      any: 'field',
    };
    class Mock {
      run() {
        return HttpResponse.ok(body);
      }
    }

    const sut = new Mock().run();
    expect(sut).toEqual({
      statusCode: 200,
      body,
    });
  });

  it('should returns a bad request with invalid param error', () => {
    const message = 'mock';
    class Mock {
      run() {
        return HttpResponse.badRequest(new InvalidParamError(message));
      }
    }

    const sut = new Mock().run();
    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Invalid param: mock',
      },
    });
  });

  it('should returns a bad request with missing param error', () => {
    const message = 'mock';
    class Mock {
      run() {
        return HttpResponse.badRequest(new MissingParamError(message));
      }
    }

    const sut = new Mock().run();
    expect(sut).toEqual({
      statusCode: 400,
      body: {
        error: 'Missing param: mock',
      },
    });
  });

  it('should returns an unauthorized error', async () => {
    class Mock {
      run() {
        return HttpResponse.unauthorizedError();
      }
    }

    const sut = new Mock().run();
    expect(sut).toEqual({
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    });
  });

  it('should returns an server error', async () => {
    class Mock {
      run() {
        return HttpResponse.serverError();
      }
    }

    const sut = new Mock().run();
    expect(sut).toEqual({
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    });
  });
});
