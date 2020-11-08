import express from 'express';
import { addAnswer } from '../../../Controllers/api/v1/answer.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.post('/add-answer', passport.authenticate('jwt', { session: false }), addAnswer);

export default router;
