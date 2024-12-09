import { PlacesCollection } from '../db/models/place.js';

//--- User data functions

export const getUserPlaces = async (userId) => {
  const placesQuery = PlacesCollection.find({ userId: userId.toString() });
  const places = await placesQuery.exec();
  console.log('places in getAllPlaces: ', places);
  console.log('userId in getAllPlaces: ', userId);

  return places;
};

export const getUserPlaceById = async ({ placetId, userId }) => {
  const place = await PlacesCollection.findById({
    _id: placetId,
    userId: userId,
  });
  return place;
};
export const createUserPlace = async (payload) => {
  const place = await PlacesCollection.create(payload);
  return place;
};

export const deleteUserPlace = async (userId, placeId) => {
  console.log(' !!! userId in deleteUserPlace', userId);
  console.log(' !!! placeId in deleteUserPlace', placeId);
  console.log(' !!! placeId in deleteUserPlace', placeId);
  const place = await PlacesCollection.findOneAndDelete({
    _id: placeId,
    userId: userId.toString(), // Преобразование ObjectId в строку
  });
  return place;
};

export const updateUserPlace = async (placeId, payload, options = {}) => {
  const rawResult = await PlacesCollection.findOneAndUpdate(
    { _id: placeId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    place: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
