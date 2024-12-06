import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import {
  getAllUniqueCitiesController,
  getAllUniqueCountriesController,
} from '../controllers/places.js';

const placesRouter = Router();

placesRouter.use('/cities', ctrlWrapper(getAllUniqueCitiesController));
placesRouter.use('/countries', ctrlWrapper(getAllUniqueCountriesController));
export default placesRouter;
