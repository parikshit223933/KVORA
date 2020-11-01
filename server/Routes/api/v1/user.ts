import express from 'express';
const router = express.Router()
import {signUp} from '../../../Controllers/api/v1/user.js';

router.post('/sign-up', signUp);

export default router;
