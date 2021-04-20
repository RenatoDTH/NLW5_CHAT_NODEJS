import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const seetingsController = new SettingsController();

routes.post('/settings', seetingsController.create);

export { routes };
