import express from 'express';
const router = express.Router();
import userRouter from './user';
router.use('/user', userRouter);
export default router;
//# sourceMappingURL=index.js.map