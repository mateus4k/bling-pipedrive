import { app, env } from './config';

app.listen(env.port, () => {
  console.log(`🚀 App is running at http://localhost:${env.port}`);
});
