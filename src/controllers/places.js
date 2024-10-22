import {
  createPlace,
  deletePlace,
  getAllPlaces,
  getPlaceById,
  updatePlace,
} from '../services/places.js';
import createHttpError from 'http-errors';

export const getAllPlacesController = async (req, res) => {
  const places = await getAllPlaces();
  res.status(200).json({
    status: 200,
    message: 'Successfully found places!',
    data: places,
  });
};

export const getPlaceByIdController = async (req, res, next) => {
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

export const createPlaceController = async (req, res) => {
  const place = await createPlace(req.body);
  console.log('place in createPlaceController: ', place);
  res.status(201).json({
    status: 201,
    message: `Successfully created a place!`,
    data: place,
  });
};

export const deletePlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const place = await deletePlace(placeId);
  if (!place) {
    next(createHttpError(404, 'Place not found'));
  }
  res.status(204).send();
};

export const upsertPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const result = await updatePlace(placeId, req.body, { upsert: true });
  console.log('result in upsertPlaceController: ', result);
  if (!result) {
    next(createHttpError(404, 'Place not found'));
  }
  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a place!`,
    data: result.place,
  });
};

export const patchPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const result = await updatePlace(placeId, req.body);
  console.log('result in patchPlaceController: ', result);
  if (!result) {
    next(createHttpError(404, 'Place not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully patched a place!`,
    data: result.place,
  });
};
