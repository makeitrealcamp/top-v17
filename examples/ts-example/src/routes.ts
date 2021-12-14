import { Application } from 'express';

import note from './api/note';

function routes(app: Application) {
  app.use('/api/notes', note);
}

export default routes;
