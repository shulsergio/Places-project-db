import {
  getAllUniqueCities,
  getAllUniqueCountries,
} from '../services/places.js';

export const getAllUniqueCitiesController = async (req, res) => {
  const cities = await getAllUniqueCities();
  res.status(200).json({
    status: 200,
    message: 'Successfully found ALL cities!',
    data: cities,
  });
};
export const getAllUniqueCountriesController = async (req, res) => {
  const cities = await getAllUniqueCountries();
  res.status(200).json({
    status: 200,
    message: 'Successfully found ALL Countries!',
    data: cities,
  });
};
