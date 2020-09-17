import { ResponseInterface } from '../../../presentation/helpers';
import { RouterInterface } from '../../../presentation/routers/interface';
import { ExpressRouterAdapter } from '../express-router';

const makeRouterSpy = () => {
  class RouterSpy implements RouterInterface {
    async route(): Promise<ResponseInterface> {
      return {
        statusCode: 200,
        body: {},
      };
    }
  }
  return new RouterSpy();
};

const makeExpressMock = () => {
  class MockResponse {
    status() {
      return this;
    }
    json() {
      jest.fn();
    }
  }

  const response = new MockResponse();
  const request = { body: {} };

  return { request, response };
};

const makeSut = async () => {
  const routerSpy = makeRouterSpy();
  const { request, response } = makeExpressMock();

  const adapt = ExpressRouterAdapter.adapt(routerSpy);
  const sut = await adapt(request, response);

  return { sut };
};

describe('ExpressRouterAdapter', () => {
  it('should receive a request and response a json successfully', async () => {
    const { sut } = await makeSut();
    expect(sut).toBeUndefined();
  });
});
