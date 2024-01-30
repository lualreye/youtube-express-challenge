import express from 'express';
import cors from 'cors';

import routerApi from './routes';

function createApp() {
  const app = express();

  const whitelist = [
    'http://localhost:3000',
    'https://chipper-rugelach-bfaf2e.netlify.app'
  ]

  const corsOptions = {
    origin: function (origin: string | undefined, callback: Function) {
      if (whitelist.indexOf(origin!) !== -1 || !origin) {
        callback(null, true)
      } else {
        console.error('CORS BLOCKED', origin)
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200 
  }

  app.use(cors(corsOptions));

  app.options('*', cors(corsOptions));

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.send('Youtube Challenge is online')
  });

  routerApi(app);

  return app;
}

export default createApp;