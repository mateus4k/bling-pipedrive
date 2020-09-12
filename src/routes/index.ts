import { Router } from 'express';
import * as exampleController from '../controllers/example';

const router = Router();

router.get('/', exampleController.index);

export { router };
