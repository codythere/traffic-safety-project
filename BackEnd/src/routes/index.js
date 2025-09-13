import { Router } from 'express';
import authRoutes from './authRoutes.js';
import watchedRoutes from './watchedRoutes.js';
import { health } from '../controllers/healthController.js';

const router = Router();

router.get('/health', health);
router.use('/api', authRoutes);
router.use('/api', watchedRoutes);

export default router;