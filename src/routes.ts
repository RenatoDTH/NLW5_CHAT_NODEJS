import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const seetingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', seetingsController.create);
routes.get('/settings/:username', seetingsController.findByUsername);
routes.put('/settings/:username', seetingsController.update);
routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };
