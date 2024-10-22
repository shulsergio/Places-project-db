import { Router } from 'express';
import {
  getAllPlacesControler,
  getPlaceByIdControler,
} from '../controllers/places';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const router = Router();

router.get('/places', ctrlWrapper(getAllPlacesControler));
router.get('/places/:placeId', ctrlWrapper(getPlaceByIdControler));

export default router;
