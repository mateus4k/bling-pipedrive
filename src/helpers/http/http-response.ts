import { UnauthorizedError, ServerError } from '../../presentation/exceptions';

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
