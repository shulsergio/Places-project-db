import { Router } from 'express';
import authRouter from './auth.js';
import placesRouter from './places.js';
import visitsRouter from './visits.js';

const router = Router();
router.use('/auth', authRouter);
router.use('/places', placesRouter);
router.use('/visits', visitsRouter);
export default router;
