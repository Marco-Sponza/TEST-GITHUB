import express from 'express';
import cors from 'cors';
import { apiBaseUrl, apiPort } from './config/api.js';
import './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';
import { apiRouter } from './routes/api.js';

const app = express();
const frontendOrigin = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-5173.app.github.dev`
  : 'http://localhost:5173';

app.use(express.json());
app.use(cors({ origin: frontendOrigin }));

app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use(errorHandler);

app.listen(apiPort, () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl}`);
});
