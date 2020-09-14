import { Router } from 'express';
import { ExpressRouterAdapter } from '../adapters/express-router';
import { ExampleControllerComposer } from '../composers/example-router';

const adapter = ExpressRouterAdapter.adapt;
const router = Router();

router.get('/', adapter(ExampleControllerComposer.compose()));

export { router };
