import * as dotenv from 'dotenv';

import dbConnect from './config/mongo';
import createApp from './app';

async function main() {
  dotenv.config();

  await dbConnect();

  const app = createApp();

  const port: number | string = process.env.PORT || 8100;

  app.get('/', (_req, res) => {
    res.send('Youtube Challenge is online')
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

main();