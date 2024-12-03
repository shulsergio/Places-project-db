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

const placesRouter = Router();

placesRouter.get('/', ctrlWrapper(getAllPlacesController));
placesRouter.get('/:placeId', ctrlWrapper(getPlaceByIdController));

placesRouter.post('/', ctrlWrapper(createPlaceController));

placesRouter.delete('/:placeId', ctrlWrapper(deletePlaceController));

placesRouter.put('/:placeId', ctrlWrapper(upsertPlaceController));
placesRouter.patch('/:placeId', ctrlWrapper(patchPlaceController));

export default placesRouter;
