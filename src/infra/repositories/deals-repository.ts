import { MongoHelper } from '../helpers';

export class DealsRepository {
  private collection = 'deals';

  async all() {
    const model = await MongoHelper.getCollection(this.collection);
    const response = await model.find();
    return response;
  }

  async find(id: unknown) {
    const model = await MongoHelper.getCollection(this.collection);
    const response = await model.findOne(id);
    return response;
  }

  async insert(data: unknown) {
    const model = await MongoHelper.getCollection(this.collection);
    const response = await model.insertOne(data);
    return response.result;
  }

  async insertMany(data: unknown[]) {
    const model = await MongoHelper.getCollection(this.collection);
    const response = await model.insertMany(data);
    return response.result;
  }
}
