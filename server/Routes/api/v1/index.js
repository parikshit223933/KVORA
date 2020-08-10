const express=require('express');
const router=express.Router();
const homeController=require('../../../Controllers/api/v1/home');

router.use('/', homeController.home);

module.exports=router;