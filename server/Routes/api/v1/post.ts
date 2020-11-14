import express from 'express';
import { downVoteAnswer, getAllPosts, UpvoteAnswer } from '../../../Controllers/api/v1/post.js';
const router = express.Router();
import passport from '../../../config/passportJWT.js';

router.get('/fetch-all', passport.authenticate('jwt', { session: false }), getAllPosts);
router.post('/upvote-answer', passport.authenticate('jwt', { session: false }), UpvoteAnswer);
router.post('/downvote-answer', passport.authenticate('jwt', { session: false }), downVoteAnswer);

export default router;
