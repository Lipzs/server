import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server is running!');
});