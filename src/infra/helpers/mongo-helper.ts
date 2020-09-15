import { MongoClient } from 'mongodb';

export default {
  async getDb() {
    return this.db;
  },

  async connect(uri) {
    this.uri = uri;
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = this.client.db();
  },

  async disconnect() {
    await this.client.close();
    this.client = null;
    this.db = null;
  },

  async getCollection(name) {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri);
    }
    return this.db.collection(name);
  },
};
