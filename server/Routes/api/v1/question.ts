import express from 'express';
const router = express.Router();
import { create } from '../../../Controllers/api/v1/question.js';
import passport from '../../../config/passportJWT.js';

router.post('/create', passport.authenticate('jwt', { session: false }), create);

export default router;
