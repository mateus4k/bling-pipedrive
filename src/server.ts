import { app } from './app';
import config from './config/app';

app.listen(config.port, () => {
  console.log(`🚀 App is running at http://localhost:${config.port}`);
});
