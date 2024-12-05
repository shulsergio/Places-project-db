import { getAllUniqueCities } from '../services/places';

export const getAllUniqueCitiesController = async (req, res) => {
  const cities = await getAllUniqueCities();
  res.status(200).json({
    status: 200,
    message: 'Successfully found ALL cities!',
    data: cities,
  });
};
