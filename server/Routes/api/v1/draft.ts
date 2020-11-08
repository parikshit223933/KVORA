import express from 'express';
import { createDraft } from '../../../Controllers/api/v1/draft.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.post('/create-draft', passport.authenticate('jwt', { session: false }), createDraft);

export default router;
