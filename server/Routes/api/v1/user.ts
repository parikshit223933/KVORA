import express from 'express';
const router = express.Router()
import {signUp, signIn, refreshAuth} from '../../../Controllers/api/v1/user.js';

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/refresh-auth', refreshAuth);

export default router;
