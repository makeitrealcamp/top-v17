import express from 'express';

import expressConfig from './config/express';
import connectDB from './config/database';
import routes from './routes';

const app = express();

expressConfig(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  // DB connection
  connectDB();

  // routes
  routes(app);

  console.log(`Server running on port ${port}`);
});

export default app;
