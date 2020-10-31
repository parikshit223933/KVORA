import express from 'express';
const router = express.Router();
import { signUp } from '../../../Controllers/api/v1/user';
router.post('/sign-up', signUp);
export default router;
//# sourceMappingURL=user.js.map