const express=require('express');
const router = express.Router()
const userController=require('../../../Controllers/api/v1/user');

router.post('/sign-in', userController.signUp);

module.exports=router;