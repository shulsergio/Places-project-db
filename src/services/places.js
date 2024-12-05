import { PlacesCollection } from '../db/models/place.js';

//--- User data functions

export const getUserPlaces = async (userId) => {
  const placesQuery = PlacesCollection.find({ userId });
  const places = await placesQuery.exec();
  console.log('places in getAllPlaces: ');
  console.log(places);

  return places;
};

export const getUserPlaceById = async (placeId) => {
  const place = await PlacesCollection.findById(placeId);
  return place;
};
export const createUserPlace = async (payload) => {
  const place = await PlacesCollection.create(payload);
  return place;
};

export const deleteUserPlace = async (placeId) => {
  const place = await PlacesCollection.findOneAndDelete({ _id: placeId });
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
