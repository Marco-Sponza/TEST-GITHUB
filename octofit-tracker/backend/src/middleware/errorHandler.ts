import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error);

  if (error.name === 'ValidationError') {
    response.status(400).json({ error: 'Request validation failed' });
    return;
  }

  response.status(500).json({ error: 'Internal server error' });
};
