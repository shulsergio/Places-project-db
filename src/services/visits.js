import { PlacesCollection } from '../db/models/place.js';

//--- all data functions
export const getAllUniqueCountries = async () => {
  const countries = await PlacesCollection.distinct('location.country');
  console.log('Unique country:', countries);

  return countries;
};

export const getAllUniqueCities = async () => {
  const cities = await PlacesCollection.distinct('location.city');

  return cities;
};
