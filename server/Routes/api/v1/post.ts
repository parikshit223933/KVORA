import express from 'express';
import { getAllPosts } from '../../../Controllers/api/v1/post.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.get('/fetch-all', passport.authenticate('jwt', { session: false }), getAllPosts);

export default router;
