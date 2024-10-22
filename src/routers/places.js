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

const router = Router();

router.get('/places', ctrlWrapper(getAllPlacesController));
router.get('/places/:placeId', ctrlWrapper(getPlaceByIdController));

router.post('/places', ctrlWrapper(createPlaceController));

router.delete('/places/:placeId', ctrlWrapper(deletePlaceController));

router.put('/places/:placeId', ctrlWrapper(upsertPlaceController));
router.patch('/places/:placeId', ctrlWrapper(patchPlaceController));

export default router;
