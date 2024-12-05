import { Router } from 'express';
import {
  createUserPlaceController,
  deleteUserPlaceController,
  getUserPlaceByIdController,
  getUserPlacesController,
  patchPlaceController,
  updateUserPlaceController,
} from '../controllers/places.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidid.js';
import { authenticate } from '../middlewares/authenticate.js';

const placesRouter = Router();

placesRouter.use(authenticate);

placesRouter.get('/', ctrlWrapper(getUserPlacesController));
placesRouter.get(
  '/:placeId',
  isValidId,
  ctrlWrapper(getUserPlaceByIdController),
);

placesRouter.post('/', ctrlWrapper(createUserPlaceController));

placesRouter.delete(
  '/:placeId',
  isValidId,
  ctrlWrapper(deleteUserPlaceController),
);

placesRouter.put(
  '/:placeId',
  isValidId,
  ctrlWrapper(updateUserPlaceController),
);
placesRouter.patch('/:placeId', isValidId, ctrlWrapper(patchPlaceController));

export default placesRouter;
