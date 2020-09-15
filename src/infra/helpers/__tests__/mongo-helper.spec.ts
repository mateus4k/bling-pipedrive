import { MongoHelper as sut } from '..';

describe('MongoHelper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  it('should reconnect when getCollection() is invoked and client is disconnected', async () => {
    expect(sut.getDb()).toBeTruthy();

    await sut.disconnect();
    expect(sut.getDb()).toMatchObject({});

    await sut.getCollection('users');
    expect(sut.getDb()).toBeTruthy();
  });
});
