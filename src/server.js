import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getAllPlaces, getPlaceById } from './services/places.js';

export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({ message: 'all is ok' });
  });

  app.get('/places', async (req, res) => {
    const places = await getAllPlaces();
    res.status(200).json({
      status: 200,
      message: 'Successfully found places!',
      data: places,
    });
  });
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.get('/places/:placeId', async (req, res) => {
    const { placeId } = req.params;
    const place = await getPlaceById(placeId);
    if (!place) {
      res.status(404).json({
        message: 'ERROR',
      });
      return;
    }
    res.status(200).json({
      message: 'Successfully found contacts!',
      data: place,
    });
  });

  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
};
