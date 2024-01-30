import express from 'express';
import cors from 'cors';

import routerApi from './routes';

function createApp() {
  const app = express();

  const whitelist = [
    'http://localhost:3000',
    'https://chipper-rugelach-bfaf2e.netlify.app/'
  ]

  app.use(cors({ origin: whitelist }));

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.send('Youtube Challenge is online')
  });

  routerApi(app);

  return app;
}

export default createApp;