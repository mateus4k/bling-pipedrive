import { UseCaseInterface } from '../../../../domain/usecases/interface';
import { HttpResponse } from '../../../helpers';
import { StoreOrdersRouter } from '../store-orders';

const makeGetDealsPipedriveUseCaseSpy = ({
  error = false,
  isNotAnArray = false,
}) => {
  class GetDealsPipedriveUseCaseSpy implements UseCaseInterface {
    async run() {
      if (error) {
        throw new Error('something');
      }

      return isNotAnArray ? {} : [];
    }
  }

  return new GetDealsPipedriveUseCaseSpy();
};

const makeCreateOrdersBlingUseCaseSpy = () => {
  class CreateOrdersBlingUseCaseSpy implements UseCaseInterface {
    async run() {
      return true;
    }
  }

  return new CreateOrdersBlingUseCaseSpy();
};

const makeSaveManyDealsUseCaseSpy = () => {
  class SaveManyDealsUseCaseSpy implements UseCaseInterface {
    async run() {
      return true;
    }
  }

  return new SaveManyDealsUseCaseSpy();
};

const makeSut = (errorOptions = {}) => {
  const getDealsPipedriveUseCase = makeGetDealsPipedriveUseCaseSpy(
    errorOptions,
  );
  const createOrdersBlingUseCase = makeCreateOrdersBlingUseCaseSpy();
  const saveManyDealsUseCase = makeSaveManyDealsUseCaseSpy();

  const sut = new StoreOrdersRouter(
    getDealsPipedriveUseCase,
    createOrdersBlingUseCase,
    saveManyDealsUseCase,
  );

  return {
    sut,
    getDealsPipedriveUseCase,
    createOrdersBlingUseCase,
    saveManyDealsUseCase,
  };
};

describe('StoreOrdersRouter', () => {
  it('should return 200', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.route();
    const success = HttpResponse.ok({});
    expect(httpResponse.statusCode).toBe(success.statusCode);
  });

  it('should return 400 if some usecase fails', async () => {
    const { sut } = makeSut({ error: true });
    const httpResponse = await sut.route();
    const error = HttpResponse.serverError();
    expect(httpResponse.statusCode).toEqual(error.statusCode);
    expect(httpResponse.body).toEqual(error.body);
  });

  it('should return 404 if deals is not an array', async () => {
    const { sut } = makeSut({ isNotAnArray: true });
    const httpResponse = await sut.route();
    const error = HttpResponse.notFoundError();
    expect(httpResponse.statusCode).toEqual(error.statusCode);
    expect(httpResponse.body).toEqual(error.body);
  });
});
