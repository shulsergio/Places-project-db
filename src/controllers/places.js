import { getAllPlaces, getPlaceById } from '../services/places';
import createHttpError from 'http-errors';

export const getAllPlacesControler = async (req, res) => {
  const places = await getAllPlaces();
  res.status(200).json({
    status: 200,
    message: 'Successfully found places!',
    data: places,
  });
};

export const getPlaceByIdControler = async (req, res, next) => {
  const { placeId } = req.params;
  const place = await getPlaceById(placeId);
  if (!place) {
    throw createHttpError(404, 'Place not found');
  }
  res.status(200).json({
    message: 'find placeId',
    data: place,
  });
};
