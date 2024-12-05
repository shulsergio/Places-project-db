import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import {
  getAllUniqueCitiesController,
  getAllUniqueCountriesController,
} from '../controllers/visits.js';

const visitsRouter = Router();

visitsRouter.use('/cities', ctrlWrapper(getAllUniqueCitiesController));
visitsRouter.use('/countries', ctrlWrapper(getAllUniqueCountriesController));
export default visitsRouter;
