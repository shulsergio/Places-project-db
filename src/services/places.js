import { PlacesCollection } from '../db/models/place.js';

export const getAllPlaces = async () => {
  const places = await PlacesCollection.find();
  return places;
};

export const getPlaceById = async (placeId) => {
  const place = await PlacesCollection.findById(placeId);
  return place;
};
export const createPlace = async (payload) => {
  const place = await PlacesCollection.create(payload);
  return place;
};

export const deletePlace = async (placeId) => {
  const place = await PlacesCollection.findOneAndDelete({ _id: placeId });
  return place;
};

export const updatePlace = async (placeId, payload, options = {}) => {
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
