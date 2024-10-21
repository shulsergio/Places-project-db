import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

export const setupServer = () => {
  const app = express();
  const PORT = 4000;

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

  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
};
