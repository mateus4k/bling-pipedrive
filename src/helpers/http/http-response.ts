import { UnauthorizedError, ServerError } from '../../exceptions';

export interface IResponse {
  statusCode: number;
  body: {
    error?: string;
  };
}

class HttpResponse {
  static ok(body: unknown): IResponse {
    return {
      statusCode: 200,
      body,
    };
  }

  static badRequest(error: Error): IResponse {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  static unauthorizedError(): IResponse {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message,
      },
    };
  }

  static serverError(): IResponse {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    };
  }
}

export default HttpResponse;
