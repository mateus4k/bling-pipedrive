import { Router } from 'express';
import { ExpressRouterAdapter } from '../adapters/express-router';
import { ExampleRouterComposer } from '../composers/example-router';

const adapter = ExpressRouterAdapter.adapt;
const router = Router();

router.get('/', adapter(ExampleRouterComposer.compose()));

export { router };
