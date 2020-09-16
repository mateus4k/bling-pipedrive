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

  it('returns 200', async () => {
    const repository = new DealsRepository();

    const response = await repository.insert({ message: 'hi' });

    expect(response.ok).toBeTruthy();
  });
});
