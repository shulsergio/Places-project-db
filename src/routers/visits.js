import { Router } from 'express';
import {
  createUserPlaceController,
  deleteUserPlaceController,
  getUserPlaceByIdController,
  getUserPlacesController,
  patchPlaceController,
  updateUserPlaceController,
} from '../controllers/visits.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidid.js';
import { authenticate } from '../middlewares/authenticate.js';

const visitsRouter = Router();

visitsRouter.use(authenticate);

visitsRouter.get('/', ctrlWrapper(getUserPlacesController));
visitsRouter.get(
  '/:placeId',
  isValidId,
  ctrlWrapper(getUserPlaceByIdController),
);

visitsRouter.post('/', ctrlWrapper(createUserPlaceController));

visitsRouter.delete(
  '/:placeId',
  isValidId,
  ctrlWrapper(deleteUserPlaceController),
);

visitsRouter.put(
  '/:placeId',
  isValidId,
  ctrlWrapper(updateUserPlaceController),
);
visitsRouter.patch('/:placeId', isValidId, ctrlWrapper(patchPlaceController));

export default visitsRouter;
