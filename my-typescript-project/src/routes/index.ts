import { Router, Application } from 'express';
import { IndexController } from '../controllers';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Application) {
    app.use('/', router);
    router.get('/', indexController.getIndex.bind(indexController));
}