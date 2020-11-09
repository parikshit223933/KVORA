import express from 'express';
import { createDraft, fetchUserDrafts } from '../../../Controllers/api/v1/draft.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.post('/create-draft', passport.authenticate('jwt', { session: false }), createDraft);
router.get('/fetch-all', passport.authenticate('jwt', { session: false }), fetchUserDrafts);

export default router;
