import { app, env } from './config';
import { MongoHelper } from '../infra/helpers';

MongoHelper.connect(env.mongo.url)
  .then(() => {
    app.listen(env.port, () => {
      console.log(`🚀 App is running at http://localhost:${env.port}`);
    });
  })
  .catch(console.error);
