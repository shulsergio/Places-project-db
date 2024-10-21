import { PlacesCollection } from '../db/models/place.js';

export const getAllPlaces = async () => {
  const places = await PlacesCollection.find();
  return places;
};

export const getPlaceById = async (placeId) => {
  const place = await PlacesCollection.findById(placeId);
  return place;
};
