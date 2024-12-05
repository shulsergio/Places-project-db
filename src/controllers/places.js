import createHttpError from 'http-errors';
import {
  createUserPlace,
  deleteUserPlace,
  getUserPlaceById,
  getUserPlaces,
  updateUserPlace,
} from '../services/places.js';

export const getUserPlacesController = async (req, res) => {
  const { _id: userId } = req.user;
  console.log('userId in getAllPlacesController = ', userId);

  const places = await getUserPlaces(userId);
  res.status(200).json({
    status: 200,
    message: 'Successfully found places!',
    data: places,
  });
};

export const getUserPlaceByIdController = async (req, res, next) => {
  const { placeId } = req.params;
  const place = await getUserPlaceById(placeId);
  if (!place) {
    throw createHttpError(404, 'Place not found');
  }
  res.status(200).json({
    message: 'find placeId',
    data: place,
  });
};

export const createUserPlaceController = async (req, res) => {
  const place = await createUserPlace(req.body);
  console.log('place in createPlaceController: ', place);
  res.status(201).json({
    status: 201,
    message: `Successfully created a place!`,
    data: place,
  });
};

export const deleteUserPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const place = await deleteUserPlace(placeId);
  if (!place) {
    next(createHttpError(404, 'Place not found'));
  }
  res.status(204).send();
};

export const updateUserPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const result = await updateUserPlace(placeId, req.body, { upsert: true });
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
  const result = await updateUserPlace(placeId, req.body);
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
