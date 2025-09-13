import { Router } from 'express';
import { watchedByEmp, watchedByVisitor } from '../controllers/watchedController.js';
const router = Router();

router.post('/emp/watchedUser', watchedByEmp);
router.post('/visitor/watchedUser', watchedByVisitor);

export default router;