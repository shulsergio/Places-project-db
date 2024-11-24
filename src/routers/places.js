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

placesRouter.get('/places', ctrlWrapper(getAllPlacesController));
placesRouter.get('/places/:placeId', ctrlWrapper(getPlaceByIdController));

placesRouter.post('/places', ctrlWrapper(createPlaceController));

placesRouter.delete('/places/:placeId', ctrlWrapper(deletePlaceController));

placesRouter.put('/places/:placeId', ctrlWrapper(upsertPlaceController));
placesRouter.patch('/places/:placeId', ctrlWrapper(patchPlaceController));

export default placesRouter;
