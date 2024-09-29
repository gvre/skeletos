import express from 'express';
import { config } from '../config';
import { registerHealthRoutes } from '../health';

const router = express.Router();
router.use('/spec', express.static('src/spec', { index: 'openapi.yaml', dotfiles: 'deny', maxAge: '5m' }));
router.use('/health', registerHealthRoutes({ commit: config.app.commit, appVersion: config.app.version }));

export { router };
