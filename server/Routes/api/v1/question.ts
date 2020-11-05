import express from 'express';
const router = express.Router();
import { create, getAllQuestions } from '../../../Controllers/api/v1/question.js';
import passport from '../../../config/passportJWT.js';

router.post('/create', passport.authenticate('jwt', { session: false }), create);
router.get('/fetch-all', passport.authenticate('jwt', { session: false }), getAllQuestions);

export default router;
