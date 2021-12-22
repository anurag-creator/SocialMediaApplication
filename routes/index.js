const express=require('express');

const router=express.Router();
const homeController= require('../controllers/home_controllers');
console.log('Router loded');

router.get('/',homeController.home);
router.use('/users',require('./users'));

//any other route access from here
//router.use('/routerName',require('./routerFile'));

module.exports=router;