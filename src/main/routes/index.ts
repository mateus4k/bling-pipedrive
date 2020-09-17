import { Router } from 'express';
import { ExpressRouterAdapter } from '../adapters/express-router';
import { IndexOrdersComposer, StoreOrdersComposer } from '../composers';

const adapter = ExpressRouterAdapter.adapt;
const router = Router();

router.get('/deals', adapter(IndexOrdersComposer.compose()));
router.post('/deals', adapter(StoreOrdersComposer.compose()));

export { router };
