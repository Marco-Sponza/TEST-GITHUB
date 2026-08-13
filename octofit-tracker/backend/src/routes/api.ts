import { Router } from 'express';
import type { Request, Response } from 'express';
import type { Model } from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js';

type ApiModel = Model<any>;

function registerCrudRoutes(router: Router, resource: string, resourceModel: ApiModel) {
  router.get(`/${resource}`, async (_request: Request, response: Response) => {
    const records = await resourceModel.find().limit(100).sort({ createdAt: -1 });
    response.json(records);
  });

  router.post(`/${resource}`, async (request: Request, response: Response) => {
    const record = await resourceModel.create(request.body);
    response.status(201).json(record);
  });
}

export const apiRouter = Router();

registerCrudRoutes(apiRouter, 'users', User);
registerCrudRoutes(apiRouter, 'teams', Team);
registerCrudRoutes(apiRouter, 'activities', Activity);
registerCrudRoutes(apiRouter, 'leaderboard', LeaderboardEntry);
registerCrudRoutes(apiRouter, 'workouts', Workout);
