import { Router } from 'express';
import authRouter from './auth.js';
import placesRouter from './places.js';

const router = Router();

router.use('/places', placesRouter);
router.use('/auth', authRouter);

export default router;
