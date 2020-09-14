import { Router } from 'express';
import { ExpressRouterAdapter } from '../main/adapters/express-router';
import { ExampleControllerComposer } from '../main/composers/example-router';

const router = Router();
const adapter = ExpressRouterAdapter.adapt;

router.get('/', adapter(ExampleControllerComposer.compose()));

export { router };
