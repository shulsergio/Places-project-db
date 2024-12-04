import { Router } from 'express';
import {
  createPlaceController,
  deletePlaceController,
  getAllPlacesController,
  getPlaceByIdController,
  patchPlaceController,
  upsertPlaceController,
} from '../controllers/places.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidid.js';
import { authenticate } from '../middlewares/authenticate.js';

const placesRouter = Router();
placesRouter.use(authenticate);
placesRouter.get('/', ctrlWrapper(getAllPlacesController));
placesRouter.get('/:placeId', isValidId, ctrlWrapper(getPlaceByIdController));

placesRouter.post('/', ctrlWrapper(createPlaceController));

placesRouter.delete('/:placeId', isValidId, ctrlWrapper(deletePlaceController));

placesRouter.put('/:placeId', isValidId, ctrlWrapper(upsertPlaceController));
placesRouter.patch('/:placeId', isValidId, ctrlWrapper(patchPlaceController));

export default placesRouter;
