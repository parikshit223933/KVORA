const express=require('express');
const router = express.Router()
const userController=require('../../../Controllers/api/v1/user');

router.post('/sign-up', userController.signUp);

module.exports=router;