import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { placeId } = req.params;
  console.log('req.params in isValidId', req.params);
  console.log('placeId in isValidId', placeId);

  if (!isValidObjectId(placeId)) {
    return next(createHttpError(400, 'Invalid place ID'));
  }

  next();
};
