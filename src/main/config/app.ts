import * as express from 'express';
import { router } from '../routes';
import { cors } from '../middlewares';

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(cors);
app.use(router);

export { app };
