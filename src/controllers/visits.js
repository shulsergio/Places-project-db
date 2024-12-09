import createHttpError from 'http-errors';
import {
  createUserPlace,
  deleteUserPlace,
  getUserPlaceById,
  getUserPlaces,
  updateUserPlace,
} from '../services/visits.js';

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
  const { _is: userId } = req.user;
  const place = await getUserPlaceById({ placeId, userId });
  if (!place) {
    throw createHttpError(404, 'Place not found');
  }
  res.status(200).json({
    message: 'find placeId',
    data: place,
  });
};

export const createUserPlaceController = async (req, res) => {
  const { name, city, country, description, isFavourite } = req.body;
  const data = req.body;

  const { _id: userId } = req.user;
  console.log(' its data', data);
  console.log(' its userId', userId);

  console.log(' its name', name);
  console.log(' its city', city);
  console.log(' its country', country);

  if (!city || !country) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid location data. Please provide city and country.',
    });
  }
  const place = await createUserPlace({
    name,
    city,
    country,
    description,
    isFavourite,
    userId,
  });

  console.log('place in createPlaceController: ', place);
  res.status(201).json({
    status: 201,
    message: `Successfully created user place!`,
    data: place,
  });
};

export const deleteUserPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  console.log('---placeId in deleteUserPlaceController:', placeId);
  const { _id: userId } = req.user;
  console.log('---req.user in deleteUserPlaceController:', req.user);
  console.log('---userId in deleteUserPlaceController:', userId);
  const place = await deleteUserPlace(userId, placeId);
  if (!place) {
    next(createHttpError(404, 'Place not found'));
  }
  res.status(204).send();
};

export const updateUserPlaceController = async (req, res, next) => {
  const { placeId } = req.params;
  const result = await updateUserPlace(placeId, req.body, { upsert: true });
  console.log('result in upsertUserPlaceController: ', result);
  if (!result) {
    next(createHttpError(404, 'Place not found'));
  }
  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a User place!`,
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
