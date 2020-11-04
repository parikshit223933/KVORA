import express from 'express';
const router=express.Router();
import userRouter from './user.js';
import questionRouter from './question.js';

router.use('/user', userRouter);
router.use('/question', questionRouter);

export default router;
