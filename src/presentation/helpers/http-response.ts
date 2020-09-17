import { UnauthorizedError, ServerError } from '../errors';

export interface ResponseInterface {
  statusCode: number;
  body: {
    error?: string;
  };
}

class HttpResponse {
  static ok(body: unknown): ResponseInterface {
    return {
      statusCode: 200,
      body,
    };
  }

  static badRequest(error: Error): ResponseInterface {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  static unauthorizedError(): ResponseInterface {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    };
  }

  static notFoundError(): ResponseInterface {
    return {
      statusCode: 404,
      body: {
        error: 'Not found',
      },
    };
  }

  static serverError(): ResponseInterface {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    };
  }
}

export { HttpResponse };
