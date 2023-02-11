import express from 'express';

import router from './resources/cities/Router.js';
import userRouter from './resources/profiles/userRouter.js';
import eventRouter from './resources/events/eventRouter.js';
import placeRouter from './resources/places/placeRouter.js';

import connectDB from './connectDB.js';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use('/api', router);
app.use('/api', userRouter);
app.use('/api', eventRouter);
app.use('/api', placeRouter);

async function startApp() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log('server is running ... on localhost: ' + PORT);
    });
  } catch (error) {
    console.log(error);
    console.log('server start with error');
  }
}
startApp();
