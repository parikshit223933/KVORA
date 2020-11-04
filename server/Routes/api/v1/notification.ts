import express from 'express';
import { getAllNotifications } from '../../../Controllers/api/v1/notification.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.get('/fetch-all', passport.authenticate('jwt', { session: false }), getAllNotifications);

export default router;
