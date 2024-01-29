import express, { Application } from 'express';

import videos from './videos.routes';

function routerApi(app: Application) {
  const router = express.Router();

  app.use('/api', router);

  router.use(videos);
}

export default routerApi;