import express from 'express';
import routes from '../routers';
import { home, search } from '../controllers/videoController';
import {
	login,
	logout,
	getJoin,
	postJoin
} from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.joins, getJoin);
globalRouter.post(routes.joins, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
