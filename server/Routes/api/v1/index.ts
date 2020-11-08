import express from 'express';
const router = express.Router();
import userRouter from './user.js';
import questionRouter from './question.js';
import notificationRouter from './notification.js';
import postRouter from './post.js';
import answerRouter from './answer.js';
import draftRouter from './draft.js';

router.use('/user', userRouter);
router.use('/question', questionRouter);
router.use('/notification', notificationRouter);
router.use('/post', postRouter);
router.use('/answer', answerRouter);
router.use('/draft', draftRouter);

export default router;
