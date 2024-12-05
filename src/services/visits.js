import { PlacesCollection } from '../db/models/place.js';

//--- all data functions
export const getAllUniqueCities = async () => {
  const cities = await PlacesCollection.distinct('city');
  console.log('Unique countries:', cities);
  return cities;
};
