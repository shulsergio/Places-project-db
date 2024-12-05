import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import { getAllUniqueCitiesController } from '../controllers/visits.js';

const visitsRouter = Router();

visitsRouter.use('/', ctrlWrapper(getAllUniqueCitiesController));

export default visitsRouter;
