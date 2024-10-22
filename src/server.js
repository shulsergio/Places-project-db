import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import placesRouter from './routers/places.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

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
  app.use(errorHandler);
  app.use(placesRouter);
  app.use('*', notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
};
