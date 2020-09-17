import { MongoHelper } from '../../helpers';
import { DealsRepository } from '../deals-repository';

describe('DealsRepository', () => {
  let dealModel;

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
    dealModel = await MongoHelper.getCollection('deals');
  });

  beforeEach(async () => {
    await dealModel.deleteMany();
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  it('all', async () => {
    const repository = new DealsRepository();

    const response = await repository.all();

    expect(response).toEqual([]);
  });

  it('find', async () => {
    const repository = new DealsRepository();

    const objectToBeInserted = { message: 'hi' };

    await repository.insert(objectToBeInserted);
    const response = await repository.find(objectToBeInserted);

    expect(response).toEqual(objectToBeInserted);
  });

  it('insert', async () => {
    const repository = new DealsRepository();

    const response = await repository.insert({ message: 'hi' });

    expect(response.ok).toBeTruthy();
  });

  it('insertMany', async () => {
    const repository = new DealsRepository();

    const arrayToBeInserted = [{ data: 1 }, { data: 2 }, { data: 3 }];

    const response = await repository.insertMany(arrayToBeInserted);
    const all = await repository.all();

    expect(response.ok).toBeTruthy();
    expect(all).toEqual(arrayToBeInserted);
  });
});
