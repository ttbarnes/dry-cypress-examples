import express from 'express';
import path from 'path';
import { get as rootGet, post as rootPost } from '../controllers';
import { get as successGet } from '../controllers/success';
import { get as feedbackGet } from '../controllers/feedback';

const routes = express.Router();
const __dirname = path.resolve();

routes.get('/', rootGet);
routes.post('/', rootPost);

routes.get('/success', successGet);

routes.get('/feedback', feedbackGet);

export default routes;
