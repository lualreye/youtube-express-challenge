import express from 'express';
import cors from 'cors';

import routerApi from './routes';

function createApp() {
  const app = express();

  // const whitelist = [
  //   'http://localhost:3000',
  //   'https://chipper-rugelach-bfaf2e.netlify.app',
  //   'https://youtube-nuxt-challenge.vercel.app'
  // ]

  app.use(cors());

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.send('Youtube Challenge is online')
  });

  routerApi(app);

  return app;
}

export default createApp;